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
export type GalleryProps = {
  movieType: MovieType[];
  movieList: [];
}
type myThis = {
  this: any
}
'use client'
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../constants";
import axios, { isCancel, AxiosError } from 'axios';
import Gallery from "@/components/Gallery";
import GenreSelector from "./_components/GenreSelector";
import { Film, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { instance } from "./utils/axios-instance";

export default function Home() {
  const [movieList, setMovieList] = useState([])
  const [genreId, setGenreId] = useState(18);
  const [searchValue, setSearchValue] = useState("")
  const [upComingMovies, setUpComingMovies] = useState([])
  const getMovies = async () => {
    const movies = await axios.get(`https://api.themoviedb.org/3/${(searchValue === "" ? "discover" : "search")}/movie?language=en&with_genres=${genreId}&query=${searchValue}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })


    setMovieList(movies.data.results)
    console.log(movies.data.results)
    // const movies = await res.json();
  };
  const getUpcomingMovies = async()=>{
      const upComingMovies = await instance.get(`/movie/upcoming`)
      setUpComingMovies(upComingMovies.data.results)
  }
  useEffect(() => {
    getMovies();
    getUpcomingMovies();
  }, [genreId, searchValue])
  console.log(searchValue)
  return (
    <div className="p-8">
      <div className="flex items-center justify-around">
        <div className="flex">
          <Film className="text-indigo-700" />
          <span className="text-indigo-700">Movie Z</span>
        </div>
        <div className="flex gap-4">
          <GenreSelector setGenreId={setGenreId} genreId={genreId} />
          <div className="flex items-center border border-gray-300 rounded-md">
            <Search />
            <Input placeholder={`Search...`} className="border-none selection:border-none" onChange={(e) => setSearchValue(e.currentTarget.value)} />
          </div>

        </div>
        <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50" onClick={() => { }}>
          <Moon className="text-black" />
        </Button>
      </div>
      <Carousel className="relative">
        <CarouselContent className="gap-0">
          {upComingMovies.slice(0,3).map((movie: MovieType) => {
            return <CarouselItem key={movie.id} className="h-[50vh]">
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="h-full object-center object-cover w-full"/>
            </CarouselItem>
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2"/>
        <CarouselNext className="absolute "/>
      </Carousel>

      <Gallery movieList={movieList} />

    </div>

  )
}