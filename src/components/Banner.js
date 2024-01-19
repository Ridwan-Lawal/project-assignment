import { useEffect, useState } from "react";

export function Banner({ selectScrollSection }) {
  return (
    <div
      ref={selectScrollSection}
      className="flex py-12 md:py-14  flex-col md:flex-row md:justify-between md:max-w-6xl px-8 mx-auto items-center"
    >
      {/* hero */}
      <Hero />

      {/* banner text section */}

      {/* connected the ref from app.js to the section, so it will be stored in the ref */}
      <section className="mt-14 text-center md:text-left md:order-1">
        <div className="flex justify-center md:justify-start items-center gap-3">
          <p className="border border-blue-950 px-4 h-0 "></p>
          <p className="uppercase font-semibold">Hot Trend</p>
        </div>

        <p className="uppercase mt-2 text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 ">
          Fresh sneakers finds
        </p>

        <p className="uppercase mt-2 text-4xl sm:text-5xl md:text-6xl text-gray-800">
          New collection
        </p>

        <button className="uppercase mt-4 text-gray-800 font-semibold  border-b-2 border-gray-800">
          Discover More
        </button>
      </section>
    </div>
  );
}
function Hero() {
  const [imageCount, setImageCount] = useState(1);

  //   hero slider
  useEffect(function () {
    const counting = setInterval(() => {
      setImageCount((curCount) =>
        curCount === 4 ? (curCount = 1) : curCount + 1
      );
    }, 3000);

    return () => {
      clearInterval(counting);
    };
  }, []);

  return (
    <section className="flex justify-center md:order-2">
      <img
        src={`/hero${imageCount}.png`}
        alt="hero"
        className="w-[350px] md:w-[450px]"
      />
    </section>
  );
}
