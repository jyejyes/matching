"use client";

import { useGetAvatarUrl } from "#/hooks/apis/useGetAvartar";
import SelectedImage from "#/ui/components/SelectedImage";
import useUserInfo from "#/app/signup/store/useUserInfo";

export default function SelectAvatar() {
  const { data, isLoading } = useGetAvatarUrl();

  const { imgUrl, updateImgUrl } = useUserInfo();

  const handleClickImage = (url: string) => {
    updateImgUrl(url);
  };

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-[18px]">
      <p className="text-pointBlue2 font-bold">아바타 선택</p>

      <div className="grid grid-cols-3 gap-[14px]">
        {data &&
          data.map((item, i) => (
            <SelectedImage
              key={i}
              imgUrl={item.imgUrl}
              selected={imgUrl === item.imgUrl}
              onClick={() => handleClickImage(item.imgUrl)}
            />
          ))}
      </div>
    </div>
  );
}
