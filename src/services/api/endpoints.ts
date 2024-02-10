import { WrestlingType } from "@/pages/home/types";
import { Params } from "react-router-dom";

const fightInfosEndpoints = new (class {
  base = `/app/fight-infos`;
  byId = (id: number) => `${this.base}/${id}`;
  state = (id: number) => `${this.base}/state/${id}`;
  search = (params: Params) =>
    `${this.base}/${Object.entries(params)
      .map(([key, value]) => (value ? `&${key}=${value}` : null))
      .join("")}`;
})();

const filterEndpoints = new (class {
  base = "/app/filters";
  dates = `${this.base}/dates/`;
  tournaments = (date: Date) => `${this.base}/tournaments/${date}/`;
  style = (tournamentId: number) => `${this.base}/style/${tournamentId}/`;
  weights = (tournamentId: number, wrestlingType: WrestlingType) =>
    `${this.base}/weights/${tournamentId}/${wrestlingType}/`;
  stages = (weight: number) => `${this.base}/stages/${weight}/`;
})();

const filterBoardsEnpoints = new (class {
  base = "/dashboard/filters";
  countries = `${this.base}/countries/`;
  fighters = (countryName: string) => `${this.base}/fighters/${countryName}`;
  years = (wrestlerId: number) => `${this.base}/years/${wrestlerId}`;
})();

export { fightInfosEndpoints, filterEndpoints, filterBoardsEnpoints };
