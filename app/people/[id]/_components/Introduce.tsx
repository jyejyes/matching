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
        에이전시, 스타트업, 대기업에서 모두 일한 경력을 가지고 있으며 OOO,
        OOO이라는 프로덕트를 만들고 있습니다. 지금은 창업에 관심이 많고 같이
        즐겁게 일할 수 있는 개발자를 만나서 이런저런 실험을 해보고, 어쩌면 같이
        회사를 만들수도...! 에이전시, 스타트업, 대기업에서 모두 일한 경력을
        가지고 있으며 OOO, OOO이라는 프로덕트를 만들고 있습니다. 지금은 창업에
        관심이 많고 같이 즐겁게 일할 수 있는 개발자를 만나서 이런저런 실험을
        해보고, 어쩌면 같이 회사를 만들수도...!
      </p>
    </div>
  );
};
