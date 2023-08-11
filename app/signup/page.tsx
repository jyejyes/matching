import { SocialLogin } from "#/app/signup/_components/SocialLogin";
import { InfiniteImages } from "#/app/signup/_components/InfiniteImages";

export default function Page() {
  return (
    <div className="flex-center-col w-full h-[100%]">
      <InfiniteImages />

      <div className="flex-center-col">
        <div className="mb-8 text-center">
          <h1 className="font-extrabold text-title mb-[14px] text-gray9">
            내팀소
          </h1>

          <h3 className="text-center text-subtitle text-gray7">
            나와 핏이 맞는 파트너를
            <br /> 매일 추천받아보세요
          </h3>
        </div>

        {/*kakaotalk login*/}
        <SocialLogin />
      </div>
    </div>
  );
}
