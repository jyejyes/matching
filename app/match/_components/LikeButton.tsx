import { PickButtonTagProps } from "#/ui/components/DefaultButton";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  status: "match" | "people";
} & PickButtonTagProps;

export const LikeButton = ({ status, ...props }: Props) => {
  return (
    <button
      className={clsx(
        "w-[60px] h-[60px] rounded-full flex-center",
        status === "people" ? "bg-white shadow-lg" : "bg-gray1"
      )}
      onClick={props.onClick}
    >
      <Image
        src={"/images/match/ic-thumbup.svg"}
        alt={"like"}
        width={28}
        height={28}
      />
    </button>
  );
};
