import styles from "./DefaultButton.module.css";
import { ComponentPropsWithoutRef } from "react";

export type PickButtonTagProps = ComponentPropsWithoutRef<"button">;

type Props = {
  children: React.ReactNode;
  disabled: boolean;
} & PickButtonTagProps;

export const DefaultButton = ({ children, disabled, ...props }: Props) => {
  return (
    <div id="test">
      <button
        id="default-button"
        data-disabled={disabled}
        disabled={disabled}
        className={styles.root}
        onClick={props.onClick}
      >
        {children}
      </button>
    </div>
  );
};
