import { ColumnDef } from "@tanstack/react-table";
import { Fighter, Match, Status, Tournament } from "../types";
import { Badge } from "@/common/components/ui/badge";
import { cn } from "@/common/lib/utils";
import { SquarePen } from "lucide-react";

export const columns: ColumnDef<Match>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "wrestling_type", header: "Type" },
  {
    accessorKey: "tournament",
    header: "Tournament",
    cell: ({ row }) => {
      const data = row.getValue("tournament") as Tournament;
      return data.name;
    },
  },
  { accessorKey: "location", header: "Place" },
  { accessorKey: "weight_category", header: "weight" },
  { accessorKey: "fight_date", header: "Date" },
  { accessorKey: "stage", header: "Stage" },
  {
    accessorKey: "fighter",
    header: "Oppo 1",
    cell: ({ row }) => {
      const data = row.getValue("fighter") as Fighter;
      return data.name;
    },
  },
  {
    accessorKey: "oponent",
    header: "Oppo 2",
    cell: ({ row }) => {
      const data = row.getValue("oponent") as Fighter;
      return data.name;
    },
  },
  {
    accessorKey: "oponent1_point",
    header: "Points",
    cell: ({ row }) => {
      const pointOne = row.getValue("oponent1_point");
      const pointTwo = row.original.oponent2_point;

      return `${pointOne} : ${pointTwo}`;
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Status;
      return (
        <Badge
          className={cn(
            status === Status.Checked
              ? "bg-amber-400"
              : status === Status.Completed
              ? "bg-green-400"
              : status === Status.InProgress
              ? "bg-blue-400"
              : "bg-red-400",
          )}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "submited_date",
    header: "Submited / Checked Date",
    cell: ({ row }) => {
      const submitedDate = row.getValue("submited_date");
      const checkedDate = row.original.checked_date;
      return `${submitedDate || "---"} / ${checkedDate || "---"}`;
    },
  },
  {
    accessorKey: "created_date",
    header: "Created Date",
    cell: ({ row }) => {
      const createdDate = row.getValue("created_date");
      return `${createdDate || "---"}`;
    },
  },
  { accessorKey: "author", header: "Author" },
  {
    id: "action",
    cell: () => {
      return <SquarePen size={20} />;
    },
  },
];
