import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      
      <h1 className="text-6xl font-bold text-purple-600 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6">
        Sorry, this page doesn’t exist.
      </p>

      <Link to="/">
        <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Go Home
        </button>
      </Link>

    </div>
  );
};

export default ErrorPage;