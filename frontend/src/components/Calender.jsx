import { useState } from "react";
import moment from "moment";
import { BiChevronLeft, BiChevronRight, BiX } from "react-icons/bi";
import Card from "./Card";

const Calender = () => {
  const [currentMonth, setcurrentMonth] = useState(new Date());
  const [selectedDate, setselectedDate] = useState(new Date());
  const [open, setopen] = useState();

  const [data, setdata] = useState([
    {
      _id: 1,
      date: "2021-10-11T12:05:44.362+00:00",
      events: [
        {
          _id: 11,
          title: "JetSwap (Fantom) Farm Launch",
        },
      ],
    },
    {
      _id: 2,
      date: "2021-10-12T12:05:44.362+00:00",
      events: [
        {
          _id: 21,
          title: "JetSwap (Fantom) Farm Launch",
        },
        {
          _id: 21,
          title: "EmojiSwap Farm Launch",
        },
        {
          _id: 14,
          title: "JetSwap (Fantom) Farm Launch",
        },
      ],
    },
    {
      _id: 3,
      date: "2021-10-14T12:05:44.362+00:00",
      events: [
        {
          _id: 31,
          title: "JetSwap (Fantom) Farm Launch",
        },
        {
          _id: 32,
          title: "JetSwap (Fantom) Farm Launch",
        },
      ],
    },
    {
      _id: 4,
      date: "2021-10-15T12:05:44.362+00:00",
      events: [
        {
          _id: 41,
          title: "JetSwap (Fantom) Farm Launch",
        },
      ],
    },
    {
      _id: 5,
      date: "2021-10-16T12:05:44.362+00:00",
      events: [
        {
          _id: 51,
          title: "JetSwap (Fantom) Farm Launch",
        },
      ],
    },
    {
      _id: 6,
      date: "2021-10-17T12:05:44.362+00:00",
      events: [
        {
          _id: 61,
          title: "JetSwap (Fantom) Farm Launch",
        },
      ],
    },
    {
      _id: 6,
      date: "2021-10-18T12:05:44.362+00:00",
      events: [
        {
          _id: 61,
          title: "JetSwap (Fantom) Farm Launch",
        },
      ],
    },
    {
      _id: 7,
      date: "2021-10-20T12:05:44.362+00:00",
      events: [
        {
          _id: 71,
          title: "JetSwap (Fantom) Farm Launch",
        },
      ],
    },
  ]);

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="w-full bg-white dark:bg-gray-900 dark:text-white px-6 py-10 border-b border-solid border-gray-100 dark:border-gray-600 flex flex-row flex-wrap align-middle">
        <div className="flex-grow max-w-full justify-start text-left">
          <div
            className="cursor-pointer text-blue-500 w-8 h-8 flex items-center justify-center bg-gray-50 dark:bg-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-colors rounded-full"
            onClick={prevMonth}
          >
            <BiChevronLeft size={20} />
          </div>
        </div>
        <div className="dark:text-white cursor-default text-gray-600 uppercase font-normal flex-grow max-w-full justify-center text-center">
          <span>{moment(currentMonth).format(dateFormat)}</span>
        </div>
        <div className="flex flex-grow max-w-full justify-end text-right">
          <div
            className="cursor-pointer text-blue-500 w-8 h-8 flex items-center justify-center bg-gray-50 dark:bg-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-colors rounded-full"
            onClick={nextMonth}
          >
            <BiChevronRight size={20} />
          </div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];

    let startDate = moment(currentMonth).startOf("week")._d;
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="flex-grow max-w-full justify-center text-center" key={i}>
          {moment(moment(startDate).add(i, "days")).format("ddd")}
        </div>
      );
    }

    return (
      <div className="uppercase font-normal text-gray-400 text-xs py-4 border-b border-solid border-gray-200 dark:border-gray-600 flex flex-row flex-wrap w-full bg-white dark:bg-gray-900">
        {days}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = moment(currentMonth).startOf("month")._d;
    const monthEnd = moment(monthStart).endOf("month")._d;
    const startDate = moment(monthStart).startOf("week")._d;
    const endDate = moment(monthEnd).endOf("week")._d;

    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = moment(day).format("DD");
        const cloneDay = day;
        days.push(
          <div
            className={`cell flex-1 flex-grow max-w-full relative border-r border-b border-solid border-gray-200 dark:border-gray-600 overflow-hidden cursor-pointer bg-white dark:bg-gray-900 transition-all  dark:text-white ${
              !moment(day).isSame(monthStart, "month")
                ? "text-gray-400 dark:text-gray-500 pointer-events-none bg-gray-50"
                : moment(day).isSame(selectedDate, "day")
                ? "border border-solid border-blue-300 text-blue-400 dark:text-white"
                : ""
            }`}
            style={{ alignItems: "stretch" }}
            key={day}
          >
            <div className={`mt-12 relative`}>
              {data.map(
                (event) =>
                  moment(event.date).date() == moment(day).date() && (
                    <div
                      className={`box  ${
                        moment(day).date() == moment(open).date() &&
                        "d-block fixed z-10 w-10/12 mx-auto overflow-y-scroll flex-shrink bg-white border border-gray-200 border-solid py-4 px-6"
                      }`}
                    >
                      <div
                        className="block md:invisible cursor-pointer z-20"
                        onClick={() => onDateClick("close")}
                      >
                        <BiX />
                      </div>
                      {event.events.map((item) => (
                        <div>
                          <Card title={item.title} />
                        </div>
                      ))}
                    </div>
                  )
              )}
            </div>
            <span
              onClick={() => onDateClick(cloneDay._d)}
              className="absolute text-sm top-4 left-4 font-medium md:bg-transparent bg-gray-50 p-1 rounded-full"
            >
              {formattedDate}
            </span>
          </div>
        );
        day = moment(day).add(1, "day");
      }
      rows.push(
        <div className="flex flex-wrap flex-row w-full" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const onDateClick = (day) => {
    if (day === "close") {
      setopen("");
      setselectedDate("");
    } else {
      setselectedDate(day);
      setopen(day);
    }

    // Ethe event aauga
  };

  const nextMonth = () => {
    setcurrentMonth(moment(currentMonth).add(1, "month"));
  };

  const prevMonth = () => {
    setcurrentMonth(moment(currentMonth).subtract(1, "month"));
  };

  return (
    <div className="block relative w-full bg-white border border-solid border-gray-100 dark:border-gray-600">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calender;
