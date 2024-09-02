"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useUser } from "@clerk/nextjs";
import { FileType } from "@/typings";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useAppStore } from "@/store/store";

const TableWrapper = ({ skeletonFiles }: { skeletonFiles: FileType[] }) => {
  const { user } = useUser();

  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);

  const sort = useAppStore((state) => state.sort);

  const rowsOnCurrentPage = useAppStore((state) => state.rowsOnCurrentPage);

  const [docs] = useCollection(
    user &&
      query(
        collection(db, "users", user.id, "files"),
        orderBy("timeStamp", sort)
      )
  );

  useEffect(() => {
    if (!docs) return;

    const files: FileType[] = docs.docs.map((doc) => ({
      id: doc.id,
      filename: doc.data().filename || doc.id,
      timeStamp: new Date(doc.data().timeStamp?.seconds * 1000) || undefined,
      fullName: doc.data().fullName,
      downloadURL: doc.data().downloadURL,
      type: doc.data().type,
      size: doc.data().size,
    }));

    setInitialFiles(files);
  }, [docs]);

  const modifiedSkeletonFiles: FileType[] = skeletonFiles.slice(
    0,
    Math.min(rowsOnCurrentPage, skeletonFiles.length)
  );

  if (docs?.docs.length === undefined)
    return (
      <div className="flex flex-col">
        <div className="flex justify-start gap-2 items-center py-4">
          <Skeleton className="max-w-sm h-9 w-96 rounded-md" />
          <Skeleton className="w-32 h-9 rounded-md" />
        </div>

        <div className="border rounded-lg mt-5">
          <div className="border-b h-10" />
          {modifiedSkeletonFiles.map((file) => {
            return (
              <div
                key={file.id}
                className="flex items-center space-x-4 px-4 py-3 w-full"
              >
                <Skeleton className="w-12 h-10" />
                <Skeleton className="h-10 w-full" />
              </div>
            );
          })}

          {modifiedSkeletonFiles.length === 0 && (
            <div className="flex items-center space-x-4 p-5 w-full">
              <Skeleton className="w-12 h-10" />
              <Skeleton className="h-10 w-full" />
            </div>
          )}
        </div>
        <div className="flex items-center justify-center gap-2 px-2 py-4">
          <Skeleton className="w-16 h-8 rounded-md" />

          <div className="flex items-center space-x-2">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="w-8 h-8 rounded-md" />
            ))}
          </div>

          <Skeleton className="w-16 h-8 rounded-md" />
        </div>
      </div>
    );

  return (
    <div className="space-y-5 pb-10">
      <DataTable columns={columns} data={initialFiles} />
    </div>
  );
};

export default TableWrapper;
