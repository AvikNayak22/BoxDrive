"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
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
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import TablePagination from "./TablePagination";
import ShareModal from "../ShareModal";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [downloadURL, setDownloadURL] = useState<string>("");

  useEffect(() => {
    const storedPagination = localStorage.getItem("tablePagination");
    if (storedPagination) {
      setPagination(JSON.parse(storedPagination));
    }
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination,
      columnFilters,
    },
    onPaginationChange: (updater) => {
      const newPagination =
        typeof updater === "function" ? updater(pagination) : updater;
      setPagination(newPagination);
      localStorage.setItem("tablePagination", JSON.stringify(newPagination));
    },
  });

  const { pageIndex, pageSize } = pagination;

  const totalRowCount = table.getRowCount();
  const pageCount = table.getPageCount();

  const isLastPage = pageIndex === pageCount - 1;

  const rowsOnCurrentPage = isLastPage
    ? totalRowCount % pageSize || pageSize
    : pageSize;

  const [
    setFileId,
    setFilename,
    setIsDeleteModalOpen,
    setIsRenameModalOpen,
    setIsShareModalOpen,
    setRowsOnCurrentPage,
    sort,
    setSort,
  ] = useAppStore((state) => [
    state.setFileId,
    state.setFilename,
    state.setIsDeleteModalOpen,
    state.setIsRenameModalOpen,
    state.setIsShareModalOpen,
    state.setRowsOnCurrentPage,
    state.sort,
    state.setSort,
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

  function openShareModal(fileId: string, URL: string): void {
    setFileId(fileId);
    setDownloadURL(URL);
    setIsShareModalOpen(true);
  }

  useEffect(() => {
    setRowsOnCurrentPage(rowsOnCurrentPage);
  }, [rowsOnCurrentPage, setRowsOnCurrentPage]);

  return (
    <>
      <DeleteModal />
      <RenameModal />
      <ShareModal downloadURL={downloadURL} />
      <div className="flex justify-start gap-2 items-center py-4">
        <Input
          placeholder="Search filename..."
          value={
            (table.getColumn("filename")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("filename")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Button
          className="w-fit"
          variant="outline"
          onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
        >
          Sort By {sort === "desc" ? "Oldest" : "Newest"}
        </Button>
      </div>
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
                      ) : cell.column.id === "downloadURL" ? (
                        <p
                          onClick={() =>
                            openShareModal(
                              (row.original as FileType).id,
                              cell.getValue() as string
                            )
                          }
                          className="underline cursor-pointer text-green-500 hover:text-green-600"
                        >
                          Share
                        </p>
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
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
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  You have no files.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination table={table} />
    </>
  );
}
