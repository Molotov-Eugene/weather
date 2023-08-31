interface DayForecast {
  date?: string;
  day?: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

interface WeekForecastProps {
  data?: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
}

export default WeekForecastProps;
