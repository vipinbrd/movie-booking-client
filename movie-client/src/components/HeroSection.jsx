import { useEffect, useState } from "react";
import { Url } from "./Url";
import { useDispatch, useSelector } from "react-redux";
import { replaceHeroSection } from "../store/HeroSectionSlice";
import { TrailerPlayer } from "./TrailerPlayer";

export function HeroSection() {
  const heroMovies = useSelector((state) => state.hero);
  const [currentShowingMovie, setCurrentShowingMovie] = useState(0);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  async function fetchHeroSectionData() {
    const req = await fetch(`${Url}/api/movies/hero`);
    const res = await req.json();
    dispatch(replaceHeroSection(res));
    setIsLoading(false);
  }

  function BannerHandler(type) {
    setCurrentShowingMovie((prevIndex) => {
      if (type === "INCREEMENT") {
        return prevIndex === heroMovies.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? heroMovies.length - 1 : prevIndex - 1;
      }
    });
  }

  useEffect(() => {
    fetchHeroSectionData();
  }, []);

  // Automatically change the movie every 4 seconds
  useEffect(() => {
    if (heroMovies.length === 0) return;

    const id = setInterval(() => {
      BannerHandler("INCREEMENT");
    }, 4000);

    return () => clearInterval(id);
  }, [heroMovies.length]);

  function getVideoId(url) {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes("youtube.com")) {
        return urlObj.searchParams.get("v");
      }
    } catch {
      return null;
    }
  }

  const currentMovie = heroMovies[currentShowingMovie];
  const videoId = currentMovie ? getVideoId(currentMovie.trailerLink) : null;

  return (
    <>
      {isloading || heroMovies.length === 0 ? (
        <p className="text-center text-white text-xl mt-10">Loading...</p>
      ) : (
        <div className="relative w-full h-[65vh] overflow-hidden">
          <img
            src={currentMovie.posterUrl}
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            alt="movie-poster"
          />

          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end px-10 pb-8 text-white space-y-3">
            <h1 className="text-4xl font-bold">{currentMovie.name}</h1>
            <p className="text-sm opacity-80">
              Release: {currentMovie.releaseDate} | Language: {currentMovie.language}
            </p>
            <p className="max-w-2xl text-sm">{currentMovie.description}</p>

            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
              >
                ▶ Play Trailer
              </button>
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
                Details
              </button>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={() => BannerHandler("DICREEMENT")}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full px-3 hover:bg-opacity-80"
          >
            &lt;
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => BannerHandler("INCREEMENT")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full px-3 hover:bg-opacity-80"
          >
            &gt;
          </button>

          {isPlaying && videoId &&  <TrailerPlayer setIsPlaying={setIsPlaying} videoId={videoId}/>}
           
        </div>
      )}
    </>
  );
}
