export function TrailerPlayer({videoId,setIsPlaying}){
   return <>

    <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-20">
    <div className="relative w-full max-w-[500px] max-h-[300px] aspect-video mt-24">
      <button
        onClick={() => setIsPlaying(false)}
        className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
        title="Close"
      >
        ✕
      </button>
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  </div></>
}