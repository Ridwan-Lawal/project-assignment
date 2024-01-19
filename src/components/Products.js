import { IoAdd, IoEye } from "react-icons/io5";
import { useInternationalization } from "./useInternationalization";

export function Products({
  productsData,
  onAddProductToCart,
  onProductDetails,
}) {
  return (
    <div className="px-8 mt-14">
      <h2 className="text-[32px] text-center font-semibold text-gray-950">
        Explore Our Products
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center mt-11 gap-7">
        {productsData?.map((product) => (
          <ProductCard
            onProductDetails={onProductDetails}
            key={product.id}
            product={product}
          >
            <Button
              onClick={() => onAddProductToCart(product)}
              bgColor="bg-cyan-500"
              textColor="text-white"
            >
              <IoAdd className="text-2xl" />
            </Button>

            <Button
              onClick={() => onProductDetails(product)}
              padding="p-4"
              bgColor="bg-white"
            >
              <IoEye className="text-lg" />
            </Button>
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
function ProductCard({ product, children, onProductDetails }) {
  const priceInNaira = useInternationalization(product?.price);
  return (
    <div className="relative mx-auto group  max-w-[400px] xl:max-w-[350px]">
      {/* product image */}
      <section className="border group h-[300px] border-gray-200 flex items-center justify-center px-8 group ">
        <img
          src={product?.image}
          alt=""
          className=" group-hover:scale-110 transition-transform duration-300 w-[45%] mx-auto"
        />
      </section>

      {/* product details */}
      <section className="space-y-1.5 mt-5">
        <p className="text-gray-500">{product?.category}</p>
        <p
          onClick={() => onProductDetails(product)}
          className="font-semibold cursor-pointer hover:underline"
        >
          {product?.title}
        </p>
        <p>{priceInNaira}</p>
      </section>

      {/* view and add to cart button */}
      {/* w-fit overflow-visible */}
      <section className="flex top-6 transition-all group-hover:w-fit right-6  w-0  flex-col gap-2 overflow-hidden shadow-lg absolute">
        {children}
      </section>
    </div>
  );
}
function Button({ children, bgColor, textColor, padding = "p-3.5", onClick }) {
  return (
    <button
      onClick={onClick}
      className={` ${padding} ${bgColor} ${textColor} `}
    >
      {children}
    </button>
  );
}
