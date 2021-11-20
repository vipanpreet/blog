import moment from "moment";

const ListEvents = ({ singleEvent }) => {
  return (
    <div className="mt-4 flex md:flex-row flex-col">
      <div className="flex-1">
        <h2 className="text-lg">{singleEvent?.name}</h2>
        <p className="text-blue-500">{moment(singleEvent?.eventDate).format("DD-MM-YYYY")}</p>
      </div>
      <div className="p-4 text-sm">{singleEvent?.repetitionType.split("_").join(" ")}</div>
      <div className="p-4 flex ml-2">
        <h3 className="text-xs text-blue-500 underline mr-2">Edit</h3>
        <h3 className="text-xs text-red-500 underline">Remove</h3>
      </div>
    </div>
  );
};

export default ListEvents;
