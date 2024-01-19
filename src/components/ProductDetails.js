import { Button } from "./Button";
import { useInternationalization } from "./useInternationalization";

export function ProductDetails({ productDetails, onAddProductToCart }) {
  const productPriceInNaira = useInternationalization(productDetails?.price);
  return (
    <div className="flex mt-8 flex-col lg:flex-row w-full  justify-between max-w-5xl mx-auto  items-center gap-4 px-8">
      {/* product image */}
      <section className="mt-8 flex justify-center">
        <img
          src={productDetails?.image}
          alt="productImage"
          className="w-[200px]  lg:w-[300px]"
        />
      </section>

      {/* product name */}
      <div className="text-center mt-8  lg:text-left max-w-[540px] ml-auto">
        <p className="text-[28px] font-medium">{productDetails?.title}</p>

        {/* product price */}
        <p className="text-[26px] mt-1.5 font-medium text-red-500">
          {productPriceInNaira}
        </p>

        {/* product description */}
        <p className="mt-5 text-[16px] mb-9  lg:text-[17px">
          {productDetails?.description}
        </p>

        <Button
          onClick={() => onAddProductToCart(productDetails)}
          content="Add to Cart"
          padX="px-8"
        />
      </div>
    </div>
  );
}
