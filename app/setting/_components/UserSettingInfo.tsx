"use strict";

import { useGetMember } from "#/hooks/apis/useGetMember";

export default function UserSettingInfo() {
  const { isLoading, data: userInfo } = useGetMember();

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="w-full flex gap-2">
      {/*<Image cla/>*/}
      <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
        <img
          src={userInfo.imgUrl}
          alt="user profile image"
          className="w-[50px] h-[50px]"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-[18px] font-bold">{userInfo.username}</p>

        <p className="text-[14px] text-gray6">email</p>
      </div>
    </div>
  );
}
