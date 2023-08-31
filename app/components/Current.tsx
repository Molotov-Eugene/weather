import { getCurrentDate } from "../utils/currentDate";

const Current = ({ data }) => {
  const weatherIcon = data ? data.condition.icon : null;
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div className="">
          <h1 className="text-3xl text-sky-200">
            Today
          </h1>
          <p className="text-sky-200">
            {getCurrentDate()}
          </p>
        </div>
        <div>
          <img src={weatherIcon} alt={data.condition.text}></img>
        </div>
        <p className="text-5xl text-sky-200">
          {data.temp_c}
          <span>°</span>
        </p>
      </div>
    </div>
  )
}

export default Current;
