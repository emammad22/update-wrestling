import { Stage, Status, WrestlingType } from "@/pages/home/types";

type DataWithPagination<DataType> = {
  count: number;
  next_page: number;
  previous_page: null;
  data: DataType;
};

type Params = {
  tournament_id: number;
  place: null;
  wrestler_name: string;
  author: string;
  is_submitted: boolean;
  status: Status;
  weight_category: number;
  date: Date;
  stage: Stage;
  wrestling_type: WrestlingType;
};

export type { DataWithPagination, Params };
