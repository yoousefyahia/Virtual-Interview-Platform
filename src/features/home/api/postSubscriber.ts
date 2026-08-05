import { axiosInstance } from "@/lib/axios";
import {
  SubscriberRequest,
  SubscriberResponse,
} from "@/features/home/types/home.types";

export const postSubscriber = async (
  payload: SubscriberRequest
): Promise<SubscriberResponse> => {
  const { data } = await axiosInstance.post<SubscriberResponse>(
    "/Home/subscribers",
    payload
  );

  return data;
};
