import { SelectedButton } from "#/ui/components/SelectedButton";

type Props = {
  skills: string[];
};
export const HaveSkills = ({ skills }: Props) => {
  return (
    <div>
      <p className="text-[15px] font-bold mb-3 text-pointBlue2">
        보유중인 기술
      </p>

      <div className="flex gap-[10px] flex-wrap">
        {skills.map((skill, i) => (
          <SelectedButton key={i} selected={false} disabled={true} size="sm">
            {skill.replaceAll('"', "")}
          </SelectedButton>
        ))}
      </div>
    </div>
  );
};
