"use client";

import { FileType } from "@/typings";
import { DefaultExtensionType, defaultStyles, FileIcon } from "react-file-icon";
import { ColumnDef } from "@tanstack/react-table";
import prettyBytes from "pretty-bytes";
import { COLOR_EXTENSION_MAP } from "@/constant";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: (info) => {
      const type = info.getValue<string>();
      const extension = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            {...defaultStyles[extension as DefaultExtensionType]}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timeStamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: (info) => <span>{prettyBytes(info.getValue<number>())}</span>,
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
  },
];
