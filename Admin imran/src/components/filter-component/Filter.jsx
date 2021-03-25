import React, { useState } from "react";
import {
  todayDisplay,
  weekDisplay,
  lastWeekDisplay,
  currentMonthDisplay,
  lastMonthDisplay,
} from "./date";
import HideShow from "./hide-show";

function Filter(props) {
  const { filter, setFilter } = props;

  const [hidden, setHidden] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <>
      <div className="pt-3">
        <span
          className="d-inline-block p-2"
          onClick={() =>
            setFilter((prevValue) => ({ ...prevValue, isApproved: true }))
          }
        >
          Approved
        </span>
        <span
          className="d-inline-block p-2"
          onClick={() =>
            setFilter((prevValue) => ({ ...prevValue, isApproved: false }))
          }
        >
          Non Approved
        </span>
        </div>
        <div className="pt-2">
        <span
          className="d-inline-block p-2"
          onClick={() =>
            setFilter((prevValue) => ({ ...prevValue, gender: "MALE" }))
          }
        >
          Male
        </span>
        <span
          className="d-inline-block p-2"
          onClick={() =>
            setFilter((prevValue) => ({ ...prevValue, gender: "FEMALE" }))
          }
        >
          Female
        </span>
        </div>
        <div className="pt-3">
        <HideShow>
          <h5 className="d-inline">Creation Date</h5>
          <>
            <span
              className="d-block p-2"
              onClick={() => {
                setFilter((prevValue) => ({
                  ...prevValue,
                  start: todayDisplay.start,
                  end: todayDisplay.end,
                }));
              }}
            >
              Today
            </span>
            <span
              className="d-block p-2"
              onClick={() => {
                setFilter((prevValue) => ({
                  ...prevValue,
                  start: weekDisplay.start,
                  end: weekDisplay.end,
                }));
              }}
            >
              This week
            </span>
            <span
              className="d-block p-2"
              onClick={() => {
                setFilter((prevValue) => ({
                  ...prevValue,
                  start: lastWeekDisplay.start,
                  end: lastWeekDisplay.end,
                }));
              }}
            >
              Last week
            </span>
            <span
              className="d-block p-2"
              onClick={() => {
                setFilter((prevValue) => ({
                  ...prevValue,
                  start: currentMonthDisplay.start,
                  end: currentMonthDisplay.end,
                }));
              }}
            >
              This month
            </span>
            <span
              className="d-block p-2"
              onClick={() => {
                setFilter((prevValue) => ({
                  ...prevValue,
                  start: lastMonthDisplay.start,
                  end: lastMonthDisplay.end,
                }));
              }}
            >
              Last month
            </span>
          </>
        </HideShow>
      </div>
      <div className="pt-3">
        <HideShow>
          <h5 className="d-inline">Select Date</h5>
          <>
            <label htmlFor="from">From</label>
            <input
              type="date"
              className="form-control mb-3 d-block"
              name="start"
              value={filter.start}
              onChange={handleChange}
            />

            <label htmlFor="to">To</label>
            <input
              type="date"
              className="form-control mb-3 d-block"
              name="end"
              onChange={handleChange}
              value={filter.end}
            />
          </>
        </HideShow>
      </div>
    </>
  );
}

export default Filter;
