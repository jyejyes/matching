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
      <div data-subject={subject} className={styles.bubble}>
        {content}
      </div>
    </div>
  );
};
