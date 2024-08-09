"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Dropzone from "react-dropzone";

const DropzoneComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { isLoaded, isSignedIn, user } = useUser();

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

    setLoading(false);
  };

  const maxSize = 20971520; //20MB

  return (
    <Dropzone
      minSize={0}
      maxSize={maxSize}
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
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
          <section className="m-4">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center p-5 border-2 border-dashed border-green-500 dark:border-green-300 rounded-lg text-center",
                isDragActive
                  ? "bg-green-400/60 dark:bg-green-500/80 text-white animate-pulse"
                  : "bg-green-300/50 dark:bg-green-500/50 text-green-500 dark:text-green-300"
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click here or drop a file to upload!"}
              {isDragActive && !isDragReject && "Drop to upload this file!"}
              {isDragReject && "File type not accepted, sorry!"}
              {isFileTooLarge && (
                <div className="text-danger mt-2">File is too large.</div>
              )}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
};

export default DropzoneComponent;
