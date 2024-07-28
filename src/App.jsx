import React, { useState } from "react";
import Timedata from "./data.json";
import TaskComponent from "./component/TaskComponent";

const App = () => {
  const [data, setdata] = useState(Timedata);
  const [timeFrame, setTimeframe] = useState("weekly");

  const changeTimeFrame = (frame) => {
    setTimeframe(frame);
  };

  return (
    <main className="w-full h-full min-h-screen p-4 bg-very-dark-blue font-Rubik text-white flex flex-col md:flex-row items-center justify-center gap-6">
      <article className="w-full md:h-full  md:max-w-[240px]  rounded-2xl overflow-hidden max-w-[320px] font-white bg-dark-blue">
        <section className="w-full  px-6 py-8 rounded-2xl bg-blue flex items-center md:flex-col md:items-start justify-start gap-3  md:gap-6">
          <img
            className="w-[60px] border-4 border-white rounded-full"
            src="images/image-jeremy.png"
            alt=""
          />
          <div>
            <p className="text-sm text-pale-blue">Report for</p>
            <p className="text-[1.4rem] md:text-[2.5rem] font-[100] leading-[1.1]">
              Jeremy Robson
            </p>
          </div>
        </section>
        <section className="w-full px-6 py-6 text-lg flex items-center justify-between md:flex-col md:items-start md:gap-2 ">
          <button
            className={`${
              timeFrame === "daily" ? "text-white" : "text-pale-blue"
            }`}
            onClick={() => setTimeframe("daily")}
          >
            Daily
          </button>
          <button
            className={`${
              timeFrame === "weekly" ? "text-white" : "text-pale-blue"
            }`}
            onClick={() => setTimeframe("weekly")}
          >
            weekly
          </button>
          <button
            className={`${
              timeFrame === "monthly" ? "text-white" : "text-pale-blue"
            }`}
            onClick={() => setTimeframe("monthly")}
          >
            Monthly
          </button>
        </section>
      </article>

      <section className="w-full max-w-[600px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <TaskComponent key={i} {...item} frame={item.timeframes[timeFrame]} />
        ))}
      </section>
    </main>
  );
};

export default App;
