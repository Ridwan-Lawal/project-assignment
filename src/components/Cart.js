import {
  IoAdd,
  IoArrowForward,
  IoClose,
  IoRemove,
  IoTrash,
} from "react-icons/io5";
import { Button } from "./Button";
import { useInternationalization } from "./useInternationalization";

export function Cart({
  onCartOpening,
  cart,
  onProductQuantityIncrease,
  onProductQuantityDecrease,
  subTotal,
  onDeleteProductFromCart,
  onResetCart,
}) {
  return (
    <div className="pb-8 bg-white ">
      <div className="px-6 ">
        <CartNavBar productNum={cart?.length}>
          <button onClick={onCartOpening}>
            <IoArrowForward className="text-2xl" />
          </button>
        </CartNavBar>
      </div>

      <div className="flex flex-col justify-between h-[88vh]  pb-6">
        <CartProducts>
          {cart?.map((product) => (
            <CartProductCard
              key={product.id}
              product={product}
              onDeleteProductFromCart={onDeleteProductFromCart}
            >
              <ProductQuantityControl
                product={product}
                onProductQuantityIncrease={() =>
                  onProductQuantityIncrease(product?.id)
                }
                onProductQuantityDecrease={() =>
                  onProductQuantityDecrease(product?.id)
                }
              />
            </CartProductCard>
          ))}
        </CartProducts>
        <div className="px-6">
          <CartFooter>
            <Subtotal subTotal={subTotal} onResetCart={onResetCart} />
          </CartFooter>
        </div>
      </div>
    </div>
  );
}
function CartNavBar({ productNum = 0, children }) {
  return (
    <nav className="flex justify-between border-b py-6">
      <p className="uppercase font-medium">shopping bag ({productNum})</p>
      {children}
    </nav>
  );
}
// A component for all products in the cart
function CartProducts({ children }) {
  return (
    <div className="space-y-8 mt-7 h-[80%] overflow-y-scroll px-6">
      {children}
    </div>
  );
}
// A reusable component for each product in the cart
function CartProductCard({ product, children, onDeleteProductFromCart }) {
  return (
    <div className="flex gap-4 items-center border-b pb-4">
      {/* product image */}
      <section>
        <img src={product?.image} alt="cartImg" className=" w-[80px]" />
      </section>

      <div className="w-[74%]">
        {/* product name and product delete button  */}
        <section className="flex justify-between gap-4">
          <p className="text-gray-900 uppercase font-medium">
            {product?.title}
          </p>

          {/* product delete btn */}
          <button onClick={() => onDeleteProductFromCart(product?.id)}>
            <IoClose className="text-xl text-gray-500" />
          </button>
        </section>

        {/* product quantity control and price */}
        {children}
      </div>
    </div>
  );
}
function ProductQuantityControl({
  product,
  onProductQuantityIncrease,
  onProductQuantityDecrease,
}) {
  const pricePerQuantity = useInternationalization(product?.price);

  const priceByQuantity = useInternationalization(
    product.quantity * product.price
  );

  return (
    <section className="flex mt-2 justify-between items-center gap-4">
      <div className="flex items-center gap-4 justify-between  w-[55%] sm:w-[45%]">
        {/* product quantity control */}
        <div className="border flex items-center w-fit gap-3 py-1 px-2">
          <button onClick={onProductQuantityDecrease}>
            <IoRemove />
          </button>

          <p className="text-sm font-medium">{product?.quantity}</p>

          <button onClick={onProductQuantityIncrease}>
            <IoAdd />
          </button>
        </div>

        {/* price per quantity */}
        <p className="text-gray-500">{pricePerQuantity}</p>
      </div>

      {/* price by quantity */}
      <p className="text-gray-900">{priceByQuantity}</p>
    </section>
  );
}
function CartFooter({ children }) {
  return (
    <footer className="space-y-5 border-t mt-6 pt-5">
      {children}
      <Button content="Checkout" width="w-full" />
    </footer>
  );
}
// subtotal section
function Subtotal({ subtotalPrice = 109.95, subTotal, onResetCart }) {
  const totalPrice = useInternationalization(subTotal).split("");
  const subTotalInNaira = `${totalPrice[0]} ${totalPrice.slice(1).join("")}`;
  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-[17px]">Subtotal: {subTotalInNaira}</p>
      <button onClick={onResetCart} className="bg-red-500 p-3">
        <IoTrash className="text-2xl text-white" />
      </button>
    </div>
  );
}
