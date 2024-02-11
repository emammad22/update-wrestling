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
  date: string;
  stage: Stage;
  wrestling_type: WrestlingType;
  check_author: string;
  page: number;
  limit: number;
};

// type PaginationType = {
//   nextPage: () => void;
//   prevPage: () => void;
//   selectedPage: () => void;
//   firstPage: () => void;
//   lastPage: () => void;
// }

interface PaginationModel {
  nextPage: () => void;
  prevPage: () => void;
  selectedPage: (page : number) => void;
  firstPage: () => void;
  lastPage: () => void;
  total : number;
  current : number;
}

export type { Params, DataWithPagination, PaginationModel };
