"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Dropzone from "react-dropzone";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "sonner";
import { UploadIcon } from "@radix-ui/react-icons";

const DropzoneComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = async () => {
        await uploadFile(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadFile = async (selectedFile: File) => {
    if (loading) return;

    if (!user) return;

    setLoading(true);

    const toastId = toast.loading("Uploading...");

    //addDoc -> users/user123/files
    const docRef = await addDoc(collection(db, "users", user.id, "files"), {
      userId: user.id,
      filename: selectedFile.name,
      fullName: user.fullName,
      profileImg: user.imageUrl,
      timeStamp: serverTimestamp(),
      type: selectedFile.type,
      size: selectedFile.size,
    });

    const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

    uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
        downloadURL: downloadURL,
      });
    });

    toast.success("Uploaded successfully", {
      id: toastId,
      style: {
        color: "green",
      },
    });

    setLoading(false);
  };

  const maxSize = 20971520; //20MB

  return (
    <Dropzone minSize={0} maxSize={maxSize} onDrop={onDrop}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section className="p-6 flex flex-col items-center justify-center gap-4">
            <div
              {...getRootProps()}
              className={cn(
                "w-full max-w-lg p-8 border-2 border-dashed rounded-md flex flex-col items-center justify-center transition-all",
                isDragActive
                  ? "border-green-500 bg-green-50 dark:bg-green-900/60 dark:border-green-400"
                  : "border-gray-300 bg-gray-100 dark:bg-gray-700",
                isDragReject &&
                  "border-red-500 bg-red-50 dark:bg-red-900/60 dark:border-red-400"
              )}
            >
              <input {...getInputProps()} />
              <UploadIcon
                className={cn(
                  "h-16 w-16 mb-4 transition-transform",
                  isDragActive
                    ? "text-green-500 animate-bounce"
                    : "text-gray-500 dark:text-gray-400",
                  isDragReject && "text-red-500"
                )}
              />

              <p className="text-center text-700 dark:text-gray-300 font-medium">
                {isDragReject
                  ? "File type not accepted, sorry!"
                  : isDragActive
                  ? "Drop the file to upload!"
                  : "Click to browse or drag and drop your file here"}
              </p>
              {isFileTooLarge && (
                <div className="mt-3 text-red-600 dark:text-red-400 text-sm">
                  File is too large. Please select a smaller file.
                </div>
              )}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
};

export default DropzoneComponent;
