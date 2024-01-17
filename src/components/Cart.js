import {
  IoAdd,
  IoArrowForward,
  IoClose,
  IoRemove,
  IoTrash,
} from "react-icons/io5";
import { Button } from "./Button";

export function Cart() {
  return (
    <div className="pb-8 bg-white ">
      <div className="px-6 ">
        <CartNavBar />
      </div>

      <div className="flex flex-col justify-between h-[88vh]  pb-6">
        <CartProducts />
        <div className="px-6">
          <CartFooter />
        </div>
      </div>
    </div>
  );
}
function CartNavBar({ productNum = 0 }) {
  return (
    <nav className="flex justify-between border-b py-6">
      <p className="uppercase font-medium">shopping bag ({productNum})</p>
      <button>
        <IoArrowForward className="text-2xl" />
      </button>
    </nav>
  );
}
// A component for all products in the cart
function CartProducts() {
  return (
    <div className="space-y-8 mt-7 h-[80%] overflow-y-scroll px-6">
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
    </div>
  );
}
// A reusable component for each product in the cart
function CartProductCard({
  imgSrc = "/hero2.png",
  productName = "Nike airmax sneakers",
}) {
  return (
    <div className="flex gap-4 items-center border-b pb-4">
      {/* product image */}
      <section>
        <img src={imgSrc} alt="cartImg" className=" w-[150px]" />
      </section>

      <div className="w-[74%]">
        {/* product name and product delete button  */}
        <section className="flex justify-between gap-4">
          <p className="text-gray-900 uppercase font-medium">{productName}</p>

          {/* product delete btn */}
          <button>
            <IoClose className="text-xl text-gray-500" />
          </button>
        </section>

        {/* product quantity control and price */}
        <ProductQuantityControl />
      </div>
    </div>
  );
}
function ProductQuantityControl({ productQuantity = 1 }) {
  return (
    <section className="flex mt-2 justify-between items-center gap-4">
      <div className="flex items-center gap-4 justify-between  w-[55%] sm:w-[45%]">
        {/* product quantity control */}
        <div className="border flex items-center w-fit gap-3 py-1 px-2">
          <button>
            <IoRemove />
          </button>

          <p className="text-sm font-medium">{productQuantity}</p>

          <button>
            <IoAdd />
          </button>
        </div>

        {/* price per quantity */}
        <p className="text-gray-500">109.95</p>
      </div>

      {/* price by quantity */}
      <p className="text-gray-900">109.95</p>
    </section>
  );
}
function CartFooter() {
  return (
    <footer className="space-y-5 border-t mt-6 pt-5">
      <Subtotal />
      <Button content="Checkout" width="w-full" />
    </footer>
  );
}
// subtotal section
function Subtotal({ subtotalPrice = 109.95 }) {
  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-[17px]">Subtotal: ${subtotalPrice}</p>
      <button className="bg-red-400 p-3">
        <IoTrash className="text-2xl text-white" />
      </button>
    </div>
  );
}
