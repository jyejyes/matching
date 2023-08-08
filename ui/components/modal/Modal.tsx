import React from "react";

type Props = {
  children: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
};
export const Modal = ({
  children,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}: Props) => {
  return (
    // <ModalPortal>
    <div className="absolute w-full h-full top-0 left-0 z-10 flex-center bg-opacity-40 bg-black">
      <div className="bg-white rounded-[20px] p-4 pt-[24px] shadow-md w-[90%]">
        <div className="mb-6 text-center">{children}</div>

        <div className="w-full flex gap-2 ">
          {onCancel && (
            <button
              className="w-full bg-gray3 text-gray9 text-center p-3 rounded-[10px]"
              onClick={onCancel}
            >
              {cancelText ?? "취소"}
            </button>
          )}
          {onConfirm && (
            <button
              className="w-full bg-pointGrayBlue text-white text-center p-3 rounded-[10px]"
              onClick={onConfirm}
            >
              {confirmText ?? "확인"}
            </button>
          )}
        </div>
      </div>
    </div>
    // </ModalPortal>
  );
};
