export interface HomeStats {
  total_candidates_hired: number;
  success_rate: number;
  active_companies: number;
}

export interface HomeStateResponse {
  status: number;
  message: string;
  data: HomeStats;
}