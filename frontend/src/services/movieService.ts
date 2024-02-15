import axios from "axios";
import { Obj } from "../types";
const baseUrl = "http://localhost:3003/api";

const getMovies = async (time: string, quantity: number, after?: number) => {
  const { data } = await axios.get<Obj[]>(
    `${baseUrl}/movies/trending/${time}/${quantity}/${after}`
  );
  return data;
};

export default { getMovies };
