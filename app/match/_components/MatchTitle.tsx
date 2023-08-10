type Props = {
  numberOfPeople: number;
};

export default function MatchTitle({ numberOfPeople }: Props) {
  return (
    <div className="flex flex-col gap-2 mt-[10px] mb-[30px]">
      <h1 className="text-subtitle font-extrabold">내팀소</h1>
      <p className="text-[17px] font-bold text-gray5">
        오늘의 추천이 {numberOfPeople}명 있어요.
      </p>
    </div>
  );
}
