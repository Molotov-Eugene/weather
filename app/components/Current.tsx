import { getCurrentDate } from "../utils/currentDate";
import { SlLocationPin } from 'react-icons/sl'
import CurrrentProps from "../interfaces/CurrentProps";

const Current = ({ data }: CurrrentProps) => {
  const weatherIcon = data?.current ? data.current.condition.icon : undefined;
  return (
    <div className="bg-gradient-to-br from-sky-900/80 to-sky-700/80 rounded-xl p-4 mx-9 mb-9 ">
      <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-fit h-full">
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
            <img className='w-[100px] object-cover' src={weatherIcon} alt={data?.current?.condition.text}></img>
          </div>
        </div>
        <p className="text-5xl text-sky-200">
          {data?.current?.temp_c}
          <span>°</span>
        </p>
        <span className="text-sky-100 text-3xl">{data?.current?.condition.text}</span>
        <div className="w-fit h-fit">
          <div className="flex items-center text-sky-700 bg-white/90 p-2 rounded-xl">
            <SlLocationPin className='text-sky-800 font-bold' />
            <span>
              {data?.location?.name}, {data?.location?.region}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Current;
