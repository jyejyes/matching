import Lottie from "react-lottie-player";
import LoadingLottie from "../../public/lottie-loading.json";
export const Loading = () => {
  return (
    <div className="w-full h-full flex-center-col bg-white bg-opacity-40">
      <Lottie
        loop
        animationData={LoadingLottie}
        play
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};
