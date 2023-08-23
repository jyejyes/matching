"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useMatchingSuccessInfo } from "#/app/match/matching.state";
import LocalStorage from "#/utils/LocalStorage";
import { EventSourcePolyfill } from "event-source-polyfill";
import useModalControl from "#/app/modalControl.state";
import modalControlState from "#/app/modalControl.state";
import { MatchingSuccessPopup } from "#/app/match/_components/MatchingSuccessPopup";

type Props = {
  children: React.ReactNode;
};

export default function LibraryWrapper({ children }: Props) {
  const queryClient = new QueryClient();

  const { updateMatchingSuccessInfo } = useMatchingSuccessInfo();
  const { updateIsMatchingSuccessModalOpen } = useModalControl();

  const token = LocalStorage.getItem("token");

  useEffect(() => {
    const eventSource = new EventSourcePolyfill(
      `https://project-308.kro.kr/subscribe/${Math.ceil(Math.random() * 1000)}`,
      {
        headers: {
          Authorization: token ?? "",
        },
      }
    );

    eventSource.onmessage = async (event) => {
      const res = await event.data;
      const parsedRes = JSON.parse(res);

      const {
        data: { type, content },
      } = parsedRes;

      console.log(parsedRes);

      if (type === "MATCH") {
        updateMatchingSuccessInfo(content);

        updateIsMatchingSuccessModalOpen(true);
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => eventSource.close();
  }, []);

  const { isMatchingSuccessModalOpen } = modalControlState();

  return (
    <QueryClientProvider client={queryClient}>
      {isMatchingSuccessModalOpen && <MatchingSuccessPopup />}

      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  );
}
