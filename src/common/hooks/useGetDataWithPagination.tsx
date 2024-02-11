import { getData } from "@/services/api/requests";
import useSWR from "swr";
import { useState } from "react";
import { DataWithPagination, PaginationModel } from "../types";

type UseGetDataWithPagination = string;

export default function useGetDataWithPagination<DataType = unknown>(path: UseGetDataWithPagination) {
  const [page, setPage] = useState(1);

  const { data, ...swrProps } = useSWR<DataWithPagination<DataType>>(
    path.includes("?") ? `${path}&page=${page}&limit=200` : `${path}?page=${page}&limit=200`,
    getData,
    {keepPreviousData : true}
  );

  const nextPage = () => data?.next_page && setPage(data?.next_page);
  const lastPage = () => data?.count && setPage(data?.count);
  const prevPage = () => data?.previous_page && setPage(data?.previous_page);
  const firstPage = () => setPage(1);

  const selectedPage = (page: number) => setPage(page);

  return { data: data?.data || [], ...swrProps, pagination: { nextPage, lastPage, prevPage, selectedPage, firstPage, total: data?.count, current : page || 1 } as PaginationModel };
}
