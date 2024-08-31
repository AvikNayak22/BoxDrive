import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

const TablePagination = ({ table }) => {
  return (
    <div className="flex items-center justify-between px-2">
      <Pagination>
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <Button
              variant="ghost"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <CaretLeftIcon /> Previous
            </Button>
          </PaginationItem>
          {[...Array(table.getPageCount())].map((_, index) => (
            <PaginationItem key={index} className="cursor-pointer">
              <PaginationLink
                onClick={() => table.setPageIndex(index)}
                isActive={table.getState().pagination.pageIndex === index}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem className="cursor-pointer">
            <Button
              variant="ghost"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
              <CaretRightIcon />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TablePagination;
