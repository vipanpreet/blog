import moment from "moment";
const Card = ({ title }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 mx-2 my-3 p-2.5 rounded">
      <div className="w-3 h-3">
        <img src="/logo.svg" />
      </div>
      <h1 className="pt-2 text-xs font-medium whitespace-normal">{title}</h1>
      <span style={{ fontSize: 8 }} className="bg-blue-500 py-0.5 px-1 text-white text-center">
        LOW RISK
      </span>
      <h5 className="text-xxs pt-1">{moment(new Date()).format("lll")} (Local time)</h5>
    </div>
  );
};

export default Card;
