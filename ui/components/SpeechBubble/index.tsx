import styles from "./SpeechBubble.module.css";
import clsx from "clsx";

type Props = {
  isMe: boolean;
  content: string;
};
export const SpeechBubble = ({ isMe, content }: Props) => {
  return (
    <div
      className={clsx("w-full flex", isMe ? "justify-end" : "justify-start")}
    >
      <div
        className={clsx(
          styles.bubble,
          isMe ? "bg-pointBlue2 text-white" : "bg-white text-gray9"
        )}
      >
        {content}
      </div>
    </div>
  );
};
