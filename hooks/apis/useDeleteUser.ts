import { apiClient } from "#/hooks/apiSetting";
import { useMutation } from "@tanstack/react-query";
import LocalStorage from "#/utils/LocalStorage";

const deleteUser = async () => {
  const response = await apiClient.delete("/member");

  return response.data;
};

export const useDeleteUser = () => {
  return useMutation(deleteUser, {
    onSuccess: () => {
      LocalStorage.clear();
    },
  });
};
