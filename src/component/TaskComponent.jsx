import React from "react";

const TaskComponent = ({ title, color, img, frame }) => {
  return (
    <article
      className={`bg-${color} mx-auto w-full h-fit min-h-[140px] md:h-[190px]  relative max-w-[320px] md:max-w-[200px] rounded-2xl overflow-hidden`}
    >
      <section className="h-[60px]" style={{ background: color }}>
        <img
          className="absolute w-[70px] right-[20px] top-[-10px] z-[1]"
          src={img}
          alt={title}
        />
      </section>
      <section className=" top-[30px] left-0 w-[100%] rounded-2xl bg-dark-blue absolute z-[99] p-6 ">
        <div className="flex justify-between items-center">
          <p>{title}</p>
          <img src="images/icon-ellipsis.svg" alt="" />
        </div>

        <div className="flex md:flex-col flex-row items-center md:items-start font-[100] justify-between">
          <p className="text-[2rem] lg:text-[3rem] ">{frame.current}hrs</p>
          <p className="text-pale-blue text-sm">
            Last Week - {frame.previous}hrs
          </p>
        </div>
      </section>
    </article>
  );
};

export default TaskComponent;
