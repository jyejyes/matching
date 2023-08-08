import clsx from "clsx";

type Props = {
  bgColor: string;
  rotate?: string;
};
export const FakeCard = ({ bgColor, rotate }: Props) => {
  //임시로 이렇게 해놓음.
  const rotateStyle = rotate === "3" ? `rotate-3` : "rotate-6";

  return (
    <div
      className={clsx(
        "absolute w-[95%] h-[430px] rounded-[12px] p-5",
        `bg-${bgColor} ${rotateStyle}`
      )}
    ></div>
  );
};
