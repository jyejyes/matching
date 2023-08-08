import { PickButtonTagProps } from "#/ui/components/DefaultButton";
import clsx from "clsx";

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
      className={clsx(
        selected ? "text-white bg-pointGrayBlue" : "bg-gray1 text-gray9",
        size === "sm" &&
          "w-fit text-left p-[10px] text-[15px] font-bold rounded-[12px]",
        size === "lg" &&
          "w-full text-left py-[16px] px-[18px] text-[17px] font-bold rounded-[12px]"
      )}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
