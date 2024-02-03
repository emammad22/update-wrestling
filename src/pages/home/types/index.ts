enum Decision {
  ByDSQ = "by DSQ",
  ByVFA = "by VFA",
  ByVIN = "by VIN",
  ByVPO = "by VPO",
  ByVPO1 = "by VPO1",
  ByVSU = "by VSU",
  ByVSU1 = "by VSU1",
}

enum Status {
  NotStarted = "not started",
  InProgress = "in progress",
  Completed = "completed",
  Checked = "checked",
}

enum Level {
  Senior = "Senior",
  U17 = "U17",
  U20 = "U20",
  U23 = "U23",
  Veterans = "Veterans",
}

enum Stage {
  Gold = "GOLD",
  Bronze = "BRONZE",
  Qualification = "Qualification",
  Quaterfinal = "Quaterfinal",
  Repechage = "Repechage",
  Semifinal = "Semifinal",
  "1/16" = "1/16",
  "1/8" = "1/8",
  "1/4" = "1/4",
  Final = "Final",
}

enum WrestlingType {
  GrecoRoman = "Greco-Roman",
  Freestyle = "Freestyle",
  WomensWrestling = "Women's wrestling",
}

interface Fighter {
  name: string;
  natinality_name: string;
  id: number;
}

type Tournament = {
  name: string;
  id: number;
  date: Date;
};

type Match = {
  wrestling_type: WrestlingType;
  fight_date: Date;
  location: Location;
  weight_category: number;
  stage: Stage;
  decision: Decision;
  is_submitted: boolean;
  status: Status;
  oponent1_point: number;
  oponent2_point: number;
  level: Level;
  id: number;
  author: null | string;
  submited_date: Date | null;
  checked_date: Date | null;
  created_date: null;
  fighter: Fighter;
  oponent: Fighter;
  winner: Fighter;
  tournament: Tournament;
};

export type { Match, Fighter, Tournament };
export { Decision, Level, Stage, Status, WrestlingType };
