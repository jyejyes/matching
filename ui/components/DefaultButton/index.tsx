import styles from "./DefaultButton.module.css";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export type PickButtonTagProps = ComponentPropsWithoutRef<"button">;

type Props = {
  children: React.ReactNode;
  disabled: boolean;
} & PickButtonTagProps;

export const DefaultButton = ({ children, disabled, ...props }: Props) => {
  return (
    <button
      data-disabled={disabled}
      disabled={disabled}
      className={clsx(styles.root, disabled ? "bg-gray3" : "bg-pointBlue2")}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
