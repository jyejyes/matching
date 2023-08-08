import { PickButtonTagProps } from "#/ui/components/DefaultButton";
import Image from "next/image";

type Props = PickButtonTagProps;

export const LikeButton = ({ ...props }: Props) => {
  return (
    <button
      className="w-[60px] h-[60px] rounded-full bg-white flex-center shadow-lg"
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
