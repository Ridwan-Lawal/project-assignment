import { IoAdd, IoEye } from "react-icons/io5";

export function Products() {
  return (
    <div className="px-8 mt-14">
      <h2 className="text-[32px] text-center font-semibold text-gray-950">
        Explore Our Products
      </h2>
      <div className="flex flex-wrap justify-center mt-11 gap-7">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
function ProductCard({
  imgSrc = "/hero2.png",
  productName = "Mens Cotton Jacket",
  productPrice = 55.99,
}) {
  return (
    <div className="relative mx-auto  max-w-[400px] xl:max-w-[350px]">
      {/* product image */}
      <section className="border border-gray-200 py-16 px-8 group ">
        <img
          src={imgSrc}
          alt=""
          className=" group-hover:scale-110 transition-transform duration-300 w-[73%] mx-auto"
        />
      </section>

      {/* product details */}
      <section className="space-y-1.5 mt-5">
        <p className="text-gray-500">Men's Clothing</p>
        <p className="font-semibold cursor-pointer hover:underline">
          {productName}
        </p>
        <p>{productPrice}</p>
      </section>

      {/* view and add to cart button */}
      {/* w-fit overflow-visible */}
      <section className="flex top-6 right-6  w-0  flex-col gap-2 overflow-hidden shadow-lg absolute">
        <Button bgColor="bg-cyan-500" textColor="text-white">
          <IoAdd className="text-2xl" />
        </Button>

        <Button padding="p-4" bgColor="bg-white">
          <IoEye className="text-lg" />
        </Button>
      </section>
    </div>
  );
}
function Button({ children, bgColor, textColor, padding = "p-3.5" }) {
  return (
    <button className={` ${padding} ${bgColor} ${textColor} `}>
      {children}
    </button>
  );
}
