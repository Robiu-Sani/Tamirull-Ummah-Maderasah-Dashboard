export default function MothersTableBanner() {
  return (
    <div className="relative w-full bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 text-white py-10 px-6 rounded-lg shadow-md">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-4xl font-extrabold mb-4">
          Mothers Information Hub
        </h1>
        <p className=" font-light mb-6">
          Discover detailed profiles and insights about fathers, their
          locations, and more.
        </p>
      </div>
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-20">
        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            className="w-72 h-72"
            fill="url(#gradient)"
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <circle cx="250" cy="250" r="200" />
          </svg> */}
      </div>
    </div>
  );
}
