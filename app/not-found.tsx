import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative bg-white w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-subtitle font-extrabold mb-2">
        페이지를 찾을 수 없어요.
      </h2>
      <p className="font-bold text-[17px] text-gray5 mb-[35px]">
        다시 시도해주세요.
      </p>

      <Image
        src={"/images/img-notfound.png"}
        alt={"not-found"}
        width={138}
        height={170}
      />
    </div>
  );
}
