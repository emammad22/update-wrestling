import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table"
import { PaginationModel } from "@/common/types"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/common/components/ui/pagination";


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pagination: PaginationModel
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pagination
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })


  console.log('pag', Array.from({ length: pagination.total }, (_, index) => index + 1))

  return (

    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="whitespace-nowrap">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
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
                  <TableCell key={cell.id} className="whitespace-nowrap cursor-pointer">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Pagination >
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={pagination.prevPage} />
          </PaginationItem>
          {Array.from({ length: pagination.total }, (_, index) => index + 1).map((item: number) => {
            return (
              <>
                {
                  item <= 4 || item >= pagination.total - 5 || (item <= pagination.current + 1 && item >= pagination.current - 1)
                    ? (<PaginationItem onClick={()=> pagination.selectedPage(item)}>
                      <PaginationLink>{item}</PaginationLink>
                    </PaginationItem>)
                    : (item === pagination.current + 4
                      ? (<PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>) : null)
                }
              </>)
          }
          )}
          <PaginationItem>
            <PaginationNext onClick={pagination.nextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
