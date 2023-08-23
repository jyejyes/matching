import { POSITIONS } from "#/constant/signup.constant";
import { SelectedButton } from "#/ui/components/SelectedButton";

export const UserSelectedPosition = () => {
  return (
    <div>
      <p className={"text-pointBlue2 font-bold mb-7"}>직군 리스트</p>

      <div className="flex flex-col gap-3 mb-[30px]">
        {POSITIONS.map((position, i) => (
          <SelectedButton
            key={i}
            size={"lg"}
            selected={false}
            // selected={userSelectedInterest.includes(position.dev)}
            disabled={false}
            // onClick={() => handleClickInterest(position.dev)}
          >
            {position.user}
          </SelectedButton>
        ))}
      </div>
    </div>
  );
};