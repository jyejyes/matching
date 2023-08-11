import LoadingLottie from "../../public/lottie-loading.json";
import Lottie from "lottie-react";

export const Loading = () => {
  return (
    <div className={"w-full h-full flex-center"}>
      <Lottie
        loop
        animationData={LoadingLottie}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};
