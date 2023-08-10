import { UserInfo } from "#/app/people/[id]/_components/UserInfo";
import { UserImage } from "#/app/people/[id]/_components/UserImage";
import Buttons from "#/app/people/[id]/_components/Buttons";
import Image from "next/image";
import Link from "next/link";
import routerPaths from "#/utils/routerPaths";

export default function Page() {
  return (
    <div className="w-full h-full relative flex flex-col justify-between">
      <Link
        href={routerPaths.match()}
        className="rounded-full bg-white bg-opacity-60 absolute top-4 left-4 w-[45px] h-[45px] flex-center shadow-md"
      >
        <Image
          src={"/images/signup/ic-backward.svg"}
          alt={"back"}
          width={24}
          height={24}
        />
      </Link>

      <div>
        <UserImage />

        <UserInfo />
      </div>

      <Buttons />
    </div>
  );
}
