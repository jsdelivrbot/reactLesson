import axios from 'axios';

const API_KEY = '3ee8a08330a3ab90045231348d92ec80';
const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
    const url = WEATHER_URL + '&q=' + city + ',us';
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}