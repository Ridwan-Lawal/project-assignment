import { Button } from "./Button";

export function ProductDetails({
  imgSrc = "/hero2.png",
  productName = "Nike Airmax sneakers",
  productPrice = 22.3,
}) {
  return (
    <div className="flex mt-8 flex-col max-w-6xl mx-auto lg:flex-row w-full  items-center gap-4 px-8">
      {/* product image */}
      <section className=" flex justify-center">
        <img
          src={imgSrc}
          alt="productImage"
          className="w-[350px] md:w-[380px] lg:w-[450px]"
        />
      </section>

      {/* product name */}
      <div className="text-center lg:text-left max-w-[540px] mx-auto">
        <p className="text-[28px] font-medium">{productName}</p>

        {/* product price */}
        <p className="text-[26px] mt-1.5 font-medium text-red-500">
          $ {productPrice}
        </p>

        {/* product description */}
        <p className="mt-5 text-[16px] mb-9  lg:text-[17px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          facilis, eum ipsam tempora quis, asperiores saepe amet corporis
          deserunt itaque, eligendi doloremque quasi ad rem incidunt vitae
          nostrum at placeat?
        </p>

        <Button content="Add to Cart" padX="px-8" />
      </div>
    </div>
  );
}
