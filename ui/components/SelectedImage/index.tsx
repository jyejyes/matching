import styles from "./SelectedImage.module.css";
import { PickButtonTagProps } from "#/ui/components/DefaultButton";
import Image from "next/image";

type Props = {
  imgUrl: string;
  selected: boolean;
} & PickButtonTagProps;
export default function SelectedImage({ imgUrl, selected, ...props }: Props) {
  return (
    <button className={styles.root} onClick={props.onClick}>
      <img src={imgUrl} alt={"아바타 사진"} className={styles.img} />

      {selected && (
        <>
          <div className={styles.selected}></div>

          <div className="absolute top-0 left-0 w-full h-full flex justify-center">
            <Image
              src={"/images/signup/ic-check.svg"}
              alt={"선택됨"}
              width={50}
              height={50}
            />
          </div>
        </>
      )}
    </button>
  );
}
