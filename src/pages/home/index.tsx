import useGetDataWithPagination from "@/common/hooks/useGetDataWithPagination";
import { fightInfosEndpoints } from "@/services/api/endpoints";
import { DataTable } from "@/common/components/ui/data-table";
import { columns } from "./components/columns";
import { Match } from "./types";
import Loading from "@/common/components/loading";
import Error from "@/common/components/error";
import { FormProvider, useForm } from "react-hook-form";
import Filter from "./components/filter";
import { Params } from "react-router-dom";

export default function Home() {
  const forms = useForm<Partial<Params>>({ mode: 'onChange' });
  const { data, isLoading, error, isValidating, mutate, ...paginationProps } = useGetDataWithPagination<Match[]>(fightInfosEndpoints.search(forms.watch()));

  return (
    <FormProvider {...forms}>
      <Filter />
      <div className="p-10">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <DataTable data={data} columns={columns}  {...paginationProps} />
        )}
      </div>
    </FormProvider>
  );
}
