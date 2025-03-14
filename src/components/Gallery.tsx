import { MovieType } from "@/app/page";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
type Type = { movieList: MovieType[] }

export default function Gallery({ movieList }: Type) {
    return (
        <div className="grid grid-cols-5 items-center justify-items-center justify-self-center w-fit min-h-screen gap-8 sm:p-20 font-[familyname:var(--font-geist-sans)]">
            {movieList.slice(0,10).map((movie: MovieType) => {
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
                            <span>{movie.vote_average.toFixed(1)}/10</span>
                        </CardDescription>
                        <CardTitle>{movie.title}</CardTitle>
                    </CardHeader>
                </Card>
            })}
        </div>
    )
}