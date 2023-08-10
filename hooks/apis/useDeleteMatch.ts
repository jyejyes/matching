//채팅방 삭제와 동일함
import { apiClient } from "#/hooks/apiSetting";
import { useMutation } from "@tanstack/react-query";

const deleteMatchSchema = {};
const deleteMatch = async (matchId: number) => {
  const response = await apiClient.delete(`/match/${matchId}`);

  return response.data;
};

export const useDeleteMatch = () => {
  return useMutation(deleteMatch, {
    onSuccess: (res) => {
      console.log(res);
    },
  });
};
