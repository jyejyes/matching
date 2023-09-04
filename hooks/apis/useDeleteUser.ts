import { apiClient } from "#/hooks/apiSetting";
import { useMutation } from "@tanstack/react-query";
import LocalStorage from "#/utils/LocalStorage";
import useModalControl from "#/app/modalControl.state";

const deleteUser = async () => {
  const response = await apiClient.delete("/member");

  return response.data;
};

export const useDeleteUser = () => {
  const { updateIsDeleteModalOpen } = useModalControl();

  return useMutation(deleteUser, {
    onSuccess: () => {
      LocalStorage.clear();
      updateIsDeleteModalOpen(false);
    },
  });
};
