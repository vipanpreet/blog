import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListEvents from "../../components/admin/ListEvents";
import { getEvents } from "../../redux/events/eventsActions";

const DListEvent = () => {
  const dispatch = useDispatch();

  const eventsState = useSelector((state) => state.eventsState);
  const { events } = eventsState;

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  return (
    <div className="bg-white container">
      <div className="p-3 border-b border-solid border-gray-200">
        <Link to="/create/event">
          <button className="btn-green">Create new</button>
        </Link>
      </div>
      <div className="mt-4">
        {events?.map((singleEvent) => (
          <ListEvents singleEvent={singleEvent} />
        ))}
      </div>
    </div>
  );
};

export default DListEvent;
