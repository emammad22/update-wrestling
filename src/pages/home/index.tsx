import useGetDataWithPagination from "@/common/hooks/useGetDataWithPagination";
import { fightInfosEndpoints } from "@/services/api/endpoints";
import { DataTable } from "@/common/components/ui/data-table";
import { columns } from "./components/columns";
import { Match } from "./types";

export default function Home() {
  const { data, isLoading, error, isValidating, mutate, ...paginationProps } = useGetDataWithPagination<Match[]>(fightInfosEndpoints.base);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Oops, Something went wrong</div>
      ) : (
          <DataTable data={data} columns={columns}  {...paginationProps}/>
      )}
    </div>
  );
}
