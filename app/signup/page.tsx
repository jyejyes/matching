import { SocialLogin } from "#/app/signup/_components/SocialLogin";
import { InfiniteImages } from "#/app/signup/_components/InfiniteImages";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex-center-col w-full h-[100%]">
      <InfiniteImages />

      <div className="flex-center-col">
        <div className="mb-8 flex-center-col">
          <Image
            src={"/images/ic-logo-texture.png"}
            alt={"logo"}
            width={163}
            height={55}
            className={"mb-[14px]"}
          />

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
