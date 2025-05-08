import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
