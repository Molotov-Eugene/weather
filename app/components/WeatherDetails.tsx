import { BsSunrise, BsSunset } from 'react-icons/bs';
import { GiWindSlap, GiCompass } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';
import { MdAir } from 'react-icons/md';
import { CiTempHigh } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import WeatherDetailsProps from '../interfaces/WeatherDetails';

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-sky-200">
          Weather Details
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-sky-100/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3 className="text-sky-900">Wind speed</h3>
              <h3 className="text-sky-900">{data?.current?.wind_kph} km/h</h3>
            </div>
            <div className="text-sky-900">
              <GiWindSlap fontSize={40} />
            </div>
          </div>
          <div className="bg-sky-100/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3 className="text-sky-900">WiHumidity</h3>
              <h3 className="text-sky-900">{data?.current?.humidity}%</h3>
            </div>
            <div className="text-sky-900">
              <WiHumidity fontSize={40} />
            </div>
          </div>
          <div className="bg-sky-100/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3 className="text-sky-900">Wind direction</h3>
              <h3 className="text-sky-900">{data?.current?.wind_dir}</h3>
            </div>
            <div className="text-sky-900">
              <GiCompass fontSize={40} />
            </div>
          </div>
          <div className="bg-sky-100/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3 className="text-sky-900">Sunrise</h3>
              <h3 className="text-sky-900">{data?.forecast?.forecastday[0].astro.sunrise}</h3>
            </div>
            <div className="text-sky-900">
              <BsSunrise fontSize={40} />
            </div>
          </div>
          <div className="bg-sky-100/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3 className="text-sky-900">Sunset</h3>
              <h3 className="text-sky-900">{data?.forecast?.forecastday[0].astro.sunset}</h3>
            </div>
            <div className="text-sky-900">
              <BsSunset fontSize={40} />
            </div>
          </div>
          <div className="bg-sky-100/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3 className="text-sky-900">Air Pressure</h3>
              <h3 className="text-sky-900">{data?.current?.pressure_mb} hPa</h3>
            </div>
            <div className="text-sky-900">
              <MdAir fontSize={40} />
            </div>
          </div>
          <div className="bg-sky-100/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3 className="text-sky-900">Feels Like</h3>
              <h3 className="text-sky-900">{data?.current?.feelslike_c}°</h3>
            </div>
            <div className="text-sky-900">
              <CiTempHigh fontSize={40} />
            </div>
          </div>
          <div className="bg-sky-100/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3 className="text-sky-900">Visibility</h3>
              <h3 className="text-sky-900">{data?.current?.vis_km} km</h3>
            </div>
            <div className="text-sky-900">
              <FaEye fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherDetails;
