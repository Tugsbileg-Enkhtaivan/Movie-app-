type MovieType = {
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
// import Gallery from "@/components/Gallery";
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
      <input type="text" placeholder="Search for a movie" className=" p-4 text-lg border rounded-lg" onChange={searchMovie} />
      <div className="grid grid-cols-5 items-center justify-items-center justify-self-center w-fit min-h-screen gap-8 sm:p-20 font-[familyname:var(--font-geist-sans)]">
        {movieList.map((movie: MovieType) => {
          return <Card key={movie.id} className=" p-0 gap-0 w-[230px]">
            <CardContent className="p-0 h-[340px]">
              <img
                className="rounded-t-xl"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </CardContent>
            <CardHeader className="p-2">
              <CardDescription className="flex items-center gap-1 p-0">
                <Star size={18} color="black" fill="black" />
                <span>{movie.vote_average}/10</span>
              </CardDescription>
              <CardTitle>{movie.title}</CardTitle>
            </CardHeader>
          </Card>
        })}
      </div>
    </div>

  )
}
