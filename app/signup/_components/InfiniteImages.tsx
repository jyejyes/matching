import Image from "next/image";
import React from "react";

export const InfiniteImages = () => {
  return (
    <div className="mb-[71px]">
      <Image
        src={"/images/signup/img-main1@x2.png"}
        alt={"top"}
        width={1290}
        height={120}
        className="mb-8"
      />

      <Image
        src={"/images/signup/img-main2@x2.png"}
        alt={"bottom"}
        width={1290}
        height={120}
      />
    </div>
  );
};
