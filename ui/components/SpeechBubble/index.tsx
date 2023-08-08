import styles from "./SpeechBubble.module.css";
import clsx from "clsx";

type Props = {
  subject: "me" | "you";
  content: string;
};
export const SpeechBubble = ({ subject, content }: Props) => {
  return (
    <div
      className={clsx(
        "w-full flex",
        subject === "me" ? "justify-end" : "justify-start"
      )}
    >
      <div
        data-subject={subject}
        className={clsx(
          styles.bubble,
          subject === "me"
            ? "justify-end bg-pointBlue2 text-white"
            : "justify-start bg-white text-gray9"
        )}
      >
        {content}
      </div>
    </div>
  );
};
