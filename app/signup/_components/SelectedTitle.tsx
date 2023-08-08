import clsx from "clsx";

type Props = {
  currentStep: number;
  totalSteps: number;
  title: string[];
  subTitle?: string;
  className?: string;
};

export const SelectedTitle = ({
  currentStep,
  totalSteps,
  title,
  subTitle,
  className,
}: Props) => {
  return (
    <div className={clsx("flex flex-col gap-[10px]", className)}>
      <p className="text-pointBlue2 font-bold text-[20px]">
        {currentStep}/{totalSteps} 단계
      </p>

      <div>
        {title.map((item, index) => (
          <h2 key={index} className="text-gray9 font-bold text-[20px]">
            {item}
          </h2>
        ))}
      </div>

      <p className="text-gray6 text-[15px] font-medium">{subTitle}</p>
    </div>
  );
};
