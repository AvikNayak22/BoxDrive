"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { FileType } from "@/typings";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useAppStore } from "@/store/store";
import { DeleteModal } from "../DeleteModal";
import RenameModal from "../RenameModal";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [setFileId, setFilename, setIsDeleteModalOpen, setIsRenameModalOpen] =
    useAppStore((state) => [
      state.setFileId,
      state.setFilename,
      state.setIsDeleteModalOpen,
      state.setIsRenameModalOpen,
    ]);

  function openDeleteModal(fileId: string) {
    setFileId(fileId);
    setIsDeleteModalOpen(true);
  }

  function openRenameModal(fileId: string, filename: string): void {
    setFileId(fileId);
    setFilename(filename);
    setIsRenameModalOpen(true);
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                <DeleteModal />
                <RenameModal />

                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.column.id === "timeStamp" ? (
                      <div className="flex flex-col">
                        <div className="text-sm">
                          {(cell.getValue() as Date).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          {(cell.getValue() as Date).toLocaleTimeString()}
                        </div>
                      </div>
                    ) : cell.column.id === "filename" ? (
                      <p
                        onClick={() => {
                          openRenameModal(
                            (row.original as FileType).id,
                            (row.original as FileType).filename
                          );
                        }}
                        className="underline flex items-center text-green-500 hover:cursor-pointer"
                      >
                        {cell.getValue() as string}
                        <Pencil1Icon className="ml-2 size-4" />
                      </p>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}

                <TableCell key={(row.original as FileType).id}>
                  <Button
                    variant="outline"
                    onClick={() => {
                      openDeleteModal((row.original as FileType).id);
                    }}
                  >
                    <TrashIcon className="size-5 " color="red" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                You have no files.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
