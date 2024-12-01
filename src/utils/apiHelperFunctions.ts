import axios from "axios";

export const fetchSeriesData = () => axios.get(`https://swapi.dev/api/films/?format=json`);

export const fetchSelectedSeriesData = ({ title, year }: { title: string, year: string | number }) => axios.get(`https://www.omdbapi.com/?apikey=b9a5e69d&t=${title}&y=${year}type=series&plot=full`);