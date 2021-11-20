import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calender from "../components/Calender";
import { getEvents } from "../redux/events/eventsActions";

const Home = () => {
  const dispatch = useDispatch();

  const eventsState = useSelector((state) => state.eventsState);
  const { events } = eventsState;

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  return (
    <div className="pt-6 pb-12 container">
      <Calender events={events} />
    </div>
  );
};

export default Home;
