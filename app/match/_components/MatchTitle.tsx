import Image from "next/image";

type Props = {
  numberOfPeople: number;
};

export default function MatchTitle({ numberOfPeople }: Props) {
  return (
    <div className="flex flex-col gap-2 mt-[10px] mb-[30px]">
      <div>
        <Image
          src={"/images/ic-logo@x2.png"}
          alt={"logo"}
          width={83}
          height={28}
        />
      </div>
      <p className="text-[17px] font-bold text-gray5">
        오늘의 추천이 {numberOfPeople}명 있어요.
      </p>
    </div>
  );
}
