import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<Genre>({
    queryKey: ["genre"],
  });

export default useGenres;
