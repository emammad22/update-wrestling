import { Stage, Status, WrestlingType } from "@/pages/home/types";

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
  check_author: string;
  page: number;
  limit: number;
};

export type { Params };
