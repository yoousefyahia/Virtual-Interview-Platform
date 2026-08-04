import { axiosInstance } from "@/lib/axios";
import {
  HomeStats,
  HomeStateResponse,
} from "@/features/home/types/home.types";

export const getHomeStats = async (): Promise<HomeStats> => {
  const { data } =
    await axiosInstance.get<HomeStateResponse>(
      "/Home/state"
    );

  return data.data;
};