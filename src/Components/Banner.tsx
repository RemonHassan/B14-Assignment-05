import heroImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="bg-base-100 py-12 lg:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#technologies"
              className="btn border-none bg-linear-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold rounded-xl px-7 shadow-md transition-all normal-case"
            >
              Explore Technologies
            </a>
            <a
              href="#learn-more"
              className="btn btn-outline border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 font-semibold rounded-xl px-7 shadow-2xs transition-all normal-case"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <img
            src={heroImage}
            alt="Development Stack 3D Visual"
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
