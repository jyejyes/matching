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
import useChatControl from "#/app/chat/chat.state";
import routerPaths from "#/utils/routerPaths";

type Props = {
  children: React.ReactNode;
};

export default function LibraryWrapper({ children }: Props) {
  const queryClient = new QueryClient();

  //매칭 State
  const { updateMatchingSuccessInfo } = useMatchingSuccessInfo();
  const { updateIsMatchingSuccessModalOpen } = useModalControl();

  //신규 메세지 state
  const { updateNewChatInfo } = useChatControl();

  const token = LocalStorage.getItem("token");

  useEffect(() => {
    //sse 초기 연결
    // connectEventSource();

    const interval = setInterval(() => {
      connectEventSource();
    }, 10 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const connectEventSource = async () => {
    let eventSource: EventSourcePolyfill;

    eventSource = new EventSourcePolyfill(
      `https://project-308.kro.kr/subscribe/${Math.ceil(Math.random() * 1000)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },

        heartbeatTimeout: 10 * 60 * 1000,
      }
    );

    eventSource.onmessage = async (event) => {
      const res = await event.data;
      const parsedRes = JSON.parse(res);

      const {
        data: { type, content },
      } = parsedRes;

      if (type === "MATCH") {
        updateMatchingSuccessInfo(content);

        updateIsMatchingSuccessModalOpen(true);

        return;
      }

      if (type === "MESSAGE") {
        updateNewChatInfo({
          isNewChat: true,
          messageRoomId: content.messageRoomId,
        });

        return;
      }

      if (type === "ERROR") {
        window.location.assign(routerPaths.signup());
      }
    };

    eventSource.onerror = (event) => {
      eventSource.close();
    };
  };

  const { isMatchingSuccessModalOpen } = modalControlState();

  return (
    <QueryClientProvider client={queryClient}>
      {isMatchingSuccessModalOpen && <MatchingSuccessPopup />}

      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  );
}
