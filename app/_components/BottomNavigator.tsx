import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import useChatControl from "#/app/chat/chat.state";

const ICON = [
  {
    defaultIconUrl: "/images/ic-match@default.svg",
    selectedIconUrl: "/images/ic-match@selected.svg",
    name: "match",
  },
  {
    defaultIconUrl: "/images/ic-chat@default.svg",
    selectedIconUrl: "/images/ic-chat@selected.svg",
    name: "chat",
  },
  {
    defaultIconUrl: "/images/ic-setting@default.svg",
    selectedIconUrl: "/images/ic-setting@selected.svg",
    name: "setting",
  },
];

export const BottomNavigator = () => {
  const pathname = usePathname().replace("/", "");

  const { push } = useRouter();

  const {
    newChatInfo: { isNewChat },
  } = useChatControl();

  const handleClickIcon = (name: string) => {
    push(`/${name}`);
  };
  return (
    <div
      className={"w-full h-[58px] bg-white flex border-t-gray1 border-[1px]"}
    >
      {ICON.map((icon, index) => (
        <div
          key={index}
          className="flex-1 flex-center cursor-pointer relative"
          onClick={() => handleClickIcon(icon.name)}
        >
          <Image
            src={
              pathname === icon.name
                ? icon.selectedIconUrl
                : icon.defaultIconUrl
            }
            alt={icon.name}
            width={24}
            height={24}
          />
          {
            // 새로운 메세지가 있을 경우
            icon.name === "chat" && isNewChat && (
              <Image
                src={"/images/chat/ic-new.svg"}
                alt={"new"}
                width={14}
                height={14}
                className="absolute top-[23%] right-[39%]"
              />
            )
          }
        </div>
      ))}
    </div>
  );
};
