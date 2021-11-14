import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import successData from "./success.json";
import loadingData from "./loading.json";

const Alert = () => {
  const alertShow = useSelector((state) => state.alertShow);
  const { alertState } = alertShow;
  const defaultOptions = {
    loop: alertState.alertType === "success" ? false : true,
    autoplay: true,
    animationData: alertState.alertType === "success" ? successData : loadingData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {Object.keys(alertState).length === 0 && alertState.constructor === Object ? null : (
        <div
          style={{ zIndex: 999 }}
          className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-white bg-opacity-95 z-50"
        >
          <div className="absolute flex items-center justify-center w-auto h-auto px-4 flex-col">
            <Lottie options={defaultOptions} height={120} width={120} />
            <div className="text-base uppercase text-gray-600 text-center py-2">
              {alertState.message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Alert;
