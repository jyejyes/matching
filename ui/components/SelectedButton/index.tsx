import styles from "./SelectedButton.module.css";
import { PickButtonTagProps } from "#/ui/components/DefaultButton";

type Props = {
  children: React.ReactNode;
  disabled: boolean;
  selected: boolean;
  size: "lg" | "sm";
  className?: string;
} & PickButtonTagProps;

export const SelectedButton = ({
  children,
  size,
  disabled,
  selected,
  className,
  ...props
}: Props) => {
  return (
    <button
      data-size={size}
      data-select={selected}
      className={styles.root}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
