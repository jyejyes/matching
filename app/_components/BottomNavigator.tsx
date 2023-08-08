import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const pathname = window.location.pathname.replace("/", "");
  const { push } = useRouter();

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
          className="flex-1 flex-center cursor-pointer"
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
        </div>
      ))}
    </div>
  );
};
