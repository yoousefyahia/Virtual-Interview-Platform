"use client";

import { useMutation } from "@tanstack/react-query";
import { postSubscriber } from "../api/postSubscriber";

export const useSubscribe = () =>
  useMutation({
    mutationFn: postSubscriber,
  });
