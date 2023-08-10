type Props = {
  intro: string;
};

export const Introduce = ({ intro }: Props) => {
  return (
    <div>
      <p className="text-[15px] font-bold mb-3 text-pointBlue2">
        자기소개 문구
      </p>

      <p className="text-gray8 text-[15px] font-medium leading-[23px]">
        {intro}
      </p>
    </div>
  );
};
