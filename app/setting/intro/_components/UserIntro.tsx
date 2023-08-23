import { MemberType } from "#/hooks/apis/useGetMember";

export const UserIntro = (props: MemberType) => {
  const handleChangeIntro = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-col gap-7">
      <p className={"text-pointBlue2 font-bold"}>자기소개</p>

      <textarea
        className="w-full h-[207px] bg-gray1 border-none resize-none rounded-[12px] p-5 text-gray9 text-[15px] leading-[23px] focus:ring-0 placeholder-gray5"
        maxLength={500}
        defaultValue={props.intro}
        onChange={handleChangeIntro}
        placeholder={"자기소개 입력 (최대 500자)"}
      />
    </div>
  );
};
