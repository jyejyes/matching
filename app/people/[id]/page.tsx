import { UserInfo } from "#/app/people/[id]/_components/UserInfo";
import { UserImage } from "#/app/people/[id]/_components/UserImage";
import Buttons from "#/app/people/[id]/_components/Buttons";
import { useParams } from "next/navigation";

export default function Page() {
  return (
    <div className="w-full relative">
      <UserImage />

      <UserInfo />

      <Buttons />
    </div>
  );
}
