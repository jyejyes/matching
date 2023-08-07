import clsx from "clsx";

type Props = {
  type: "language" | "job";
  children: React.ReactNode;
  className?: string;
};

export const Tag = ({ type, children, className }: Props) => {
  return (
    <div
      className={clsx(
        "w-fit rounded-md px-2 py-[6px] text-white text-[12px] font-medium",
        type === "language" && "bg-pointGrayBlue",
        type === "job" && "bg-gray8",
        className
      )}
    >
      {children}
    </div>
  );
};
