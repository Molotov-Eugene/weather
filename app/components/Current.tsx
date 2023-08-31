import { getCurrentDate } from "../utils/currentDate";
import { SlLocationPin } from 'react-icons/sl'

interface CurrrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrrentProps) => {
  const weatherIcon = data.current ? data.current.condition.icon : null;
  return (
    <>
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
            <img className='w-[50px] object-cover' src={weatherIcon} alt={data.current.condition.text}></img>
          </div>
          <p className="text-5xl text-sky-200">
            {data.current.temp_c}
            <span>°</span>
          </p>
        </div>
        <span className="text-sky-100 text-3xl">{data.current.condition.text}</span>
      </div>
      <div className="w-fit h-fit">
        <div className="flex items-center text-sky-700 bg-white/90 p-2 rounded-xl">
          <SlLocationPin className='text-sky-800 font-bold'/>
          <span>
            {data.location.name}, {data.location.region}
          </span>
        </div>
      </div>
    </>
  )
}

export default Current;
