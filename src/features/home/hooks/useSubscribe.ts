"use client";

import { useMutation } from "@tanstack/react-query";
import { postSubscriber } from "@/features/home/api/postSubscriber";

export const useSubscribe = () =>
  useMutation({
    mutationFn: postSubscriber,
  });
