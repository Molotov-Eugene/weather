const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const routes = {
  getDataUrl: (location: string): string => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=yes&alerts=yes`,
}

export default routes;
