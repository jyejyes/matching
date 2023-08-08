import Image from "next/image";

export default function Terms() {
  return (
    <>
      <p className="text-[13px] text-gray6">기타</p>

      <div>
        <a
          href={
            "https://www.notion.so/solyourock/7053ddfba6404b73bf1df3a3c4070e78"
          }
          target={"_blank"}
          className="w-full py-[14px] bg-white flex items-center gap-[11px]"
        >
          <Image
            src={"/images/setting/ic-note.svg"}
            alt={"note"}
            width={24}
            height={24}
          />
          이용약관
        </a>
        <a
          href={
            "https://www.notion.so/solyourock/891788ec05434a0f912ce3ef16ce55cb"
          }
          target={"_blank"}
          className="w-full py-[14px] bg-white flex items-center gap-[11px]"
        >
          <Image
            src={"/images/setting/ic-lock.svg"}
            alt={"note"}
            width={24}
            height={24}
          />
          개인정보 처리방침
        </a>
      </div>
    </>
  );
}
