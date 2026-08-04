"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/queryKeys";
import { getHomeStats } from "../api/getHomeStats";

export const useHomeStats = () =>
  useQuery({
    queryKey: queryKeys.home.stats,
    queryFn: getHomeStats,
  });