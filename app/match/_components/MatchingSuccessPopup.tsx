import Image from "next/image";

export const MatchingSuccessPopup = () => {
  return (
    <div className="z-50 absolute top-0 left-0 w-full h-full flex-center-col">
      <div
        id="bg"
        className="absolute -z-10 top-0 left-0 w-full h-full backdrop-blur-sm bg-white opacity-70"
      ></div>

      <Image
        src={"/images/match/img-partyPopper@x2.png"}
        alt={"매칭 축하"}
        width={100}
        height={100}
        className="mb-2"
      />

      <h2 className="text-pointBlue2 text-subtitle font-extrabold mb-2">
        매칭되었어요!
      </h2>

      <p className="text-center text-[17px] font-bold text-gray7 mb-9">
        [UserName]님이
        <br />
        같이 이야기 나누고 싶어해요.
      </p>

      <div className="flex gap-[22px] mb-9">
        <div>sdf</div>

        <div>sdf</div>
      </div>

      <div className="flex flex-col gap-4">
        <button>대화 시작하기</button>
        <button>다른 매칭 계속하기</button>
      </div>
    </div>
  );
};
