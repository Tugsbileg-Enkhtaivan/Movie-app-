export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
type GalleryProps = {
  movieType: MovieType[];
  movieList: [];
}
'use client'
import { useState } from "react";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../constants";
import axios, { isCancel, AxiosError } from 'axios';
import { Film, Star } from "lucide-react";
import Gallery from "@/components/Gallery";
export default function Home() {
  const searchMovie = (e: React.FormEvent<HTMLInputElement>) => {
    const search = (e.target as HTMLInputElement).value;
    console.log(search)
  }
  const [movieList, setMovieList] = useState([])
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  }
  const getMovies = async () => {
    const movies = await axios.get("https://api.themoviedb.org/3/discover/movie",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      });
    setMovieList(movies.data.results)
    console.log(movies.data.results)
    // const movies = await res.json();
  };
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="p-8">
      <Gallery movieList={movieList} />
    </div>

  )
}
