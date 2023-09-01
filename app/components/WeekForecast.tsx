import WeekForecastProps from "../interfaces/WeekForecast";
import { getShortDate } from "../utils/shortDate";

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {data?.forecast?.forecastday.map((day, index) => (
        <div key={index} className="bg-gradient-to-b from-sky-700/60 to-sky-900/60 p-2 text-sky-200 text-center rounded-lg flex flex-col items-center hover:bg-sky-200/70 transition-colors duration-300 ease-in-out delay-50">
          <p>
            {getShortDate(day?.date || '')}
          </p>

          <img src={day?.day?.condition.icon} alt={day?.day?.condition.text} />
          <div>
            <p>H {day?.day?.maxtemp_c}°</p>
            <p>L {day?.day?.mintemp_c}°</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WeekForecast;
