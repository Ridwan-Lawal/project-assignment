import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { useEffect, useRef, useState } from "react";
import { Button } from "./components/Button";
import { ProductDetails } from "./components/ProductDetails";
import { AppForms } from "./components/AppForms";
import { useGetProducts } from "./components/useGetProducts";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";
import { Input } from "./components/Input";
import { useInternationalization } from "./components/useInternationalization";

// checkout page
// login and signup validation

export default function App() {
  const [isProfile, setIsProfile] = useState(false);
  const { productsData, isLoading, error } = useGetProducts();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem("products"))
  );
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [productDetails, setProductDetails] = useState("");
  const [isCheckOut, setIsCheckout] = useState(false);

  // for a fixed nav
  const selectScrollSection = useRef(null);

  // Event for the Login profile
  function handleProfileState() {
    setIsProfile((curBool) => !curBool);
  }

  // event for the opening and closing of the cart
  function handleCartOpening() {
    setCartIsOpen((curBool) => !curBool);
  }

  // Adding new product to the cart
  function handleAddProductToCart(newProduct) {
    // to check if new product already existed in the cart
    const isProductExist = cart.find((product) => product.id === newProduct.id);

    // if new product does not exist in the cart, then add the new product to the cart, else if it exist then just increase the quanity of the product
    setCart((curProducts) =>
      !isProductExist
        ? [{ ...newProduct, quantity: 1 }, ...curProducts]
        : curProducts.map((product) =>
            product.id === newProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
    );
  }

  // Deleting each product in the cart
  function handleDeleteProductFromCart(id) {
    setCart((curProducts) =>
      curProducts.filter((product) => product.id !== id)
    );
  }

  // Resetting/deleting all product from cart
  function handleResetCart() {
    setCart([]);
  }

  // Increasing the quantity for each product in the cart
  function handleProductQuantityIncrease(id) {
    setCart((curProducts) =>
      curProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  }

  // decreasing the quantity for each product in the cart
  function handleProductquantityDecrease(id) {
    setCart((curProducts) =>
      curProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  // updataing the product details state to the product that is clicked

  function handleProductDetails(product) {
    setProductDetails(product);
  }

  // updating the checkout state
  function handleCheckout() {
    setIsCheckout((curBool) => !curBool);
  }

  // sub total i.e total price for all items in the cart
  const subTotal = cart.reduce(
    (acc, curProduct) => acc + curProduct.price * curProduct.quantity,
    0
  );

  console.log(subTotal);

  // Storing the cart items in the local storage
  useEffect(
    function () {
      localStorage.setItem("products", JSON.stringify(cart));
    },
    [cart]
  );

  // for the manipulation of element in the ref
  useEffect(function () {
    const heroSectionCoords =
      selectScrollSection.current.getBoundingClientRect();

    window.addEventListener("scroll", (e) => {
      if (window.scrollY > heroSectionCoords.top) setIsNavFixed(true);
      else setIsNavFixed(false);
    });

    console.log(heroSectionCoords);
  }, []);

  return (
    <div className="font-poppins">
      <div className="flex">
        {/* main page */}
        <section className="w-full">
          <NavBar
            onProfileState={handleProfileState}
            onCartOpening={handleCartOpening}
            cartNumber={cart?.length}
            isNavFixed={isNavFixed}
          />

          {/* for the profile login */}

          {isProfile ? (
            <AppForms />
          ) : (
            <>
              {productDetails && !isCheckOut && (
                <ProductDetails
                  productDetails={productDetails}
                  onAddProductToCart={handleAddProductToCart}
                />
              )}
              {!productDetails && !isCheckOut && (
                <>
                  <Banner selectScrollSection={selectScrollSection} />
                  {isLoading && <Loader />}
                  {error && <Error error={error} />}
                  {!isLoading && !error && (
                    <Products
                      productsData={productsData}
                      onAddProductToCart={handleAddProductToCart}
                      onProductDetails={handleProductDetails}
                    />
                  )}
                </>
              )}
              {!productDetails && isCheckOut && (
                <CheckOut subTotal={subTotal} cartItems={cart.length} />
              )}
              <Footer />
            </>
          )}
        </section>

        {/* cart */}
        <section
          className={`fixed right-0 shadow-2xl  bg-white ${
            cartIsOpen ? "w-full sm:w-[60%] md:w-[52%] lg:w-[42%]" : "w-0"
          } transition-all duration-500 z-20  h-full`}
        >
          <Cart
            onCartOpening={handleCartOpening}
            cart={cart}
            onProductQuantityIncrease={handleProductQuantityIncrease}
            onProductQuantityDecrease={handleProductquantityDecrease}
            subTotal={subTotal}
            onDeleteProductFromCart={handleDeleteProductFromCart}
            onResetCart={handleResetCart}
            onProductDetails={handleProductDetails}
            onCheckout={handleCheckout}
          />
        </section>
      </div>
    </div>
  );
}

function CheckOut({ subTotal, cartItems }) {
  return (
    <div className="w-full bg-gray-100 p">
      <div className=" max-w-xl mx-auto space-y-10">
        <OrderSummary subTotal={subTotal} cartItems={cartItems} />
        <CheckOutForm />
      </div>
    </div>
  );
}

function CheckOutForm() {
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");

  function handleCardNumber(e) {
    if (!Number.isFinite(+e.target.value)) return;
    setCardNumber(+e.target.value);
  }

  function handleExpiryDate(e) {
    if (!Number.isFinite(+e.target.value)) return;
    setExpiryDate(+e.target.value);
  }

  function handleCvc(e) {
    if (!Number.isFinite(+e.target.value)) return;
    setCvc(+e.target.value);
  }

  return (
    <div className="px-8 py-8 bg-white  w-full shadow-xl">
      <h1 className="text-2xl  font-semibold text-slate-900">
        Credit Card Details
      </h1>

      <form
        action=""
        className="border-t mt-2 md:grid md:grid-cols-2 items-center gap-4 max-w-5xl py-4  mx-auto"
      >
        <Input
          inputName="CARD HOLDER"
          placeholder="Card Holder"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />
        <Input
          inputName="EXPIRATION DATE"
          placeholder="Expiration Date"
          value={expiryDate}
          onChange={handleExpiryDate}
        />
        <Input
          inputName="CARD NUMBER"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleCardNumber}
        />

        <Input
          inputName="CVC"
          placeholder="CVC"
          value={cvc}
          onChange={handleCvc}
        />

        <Button
          width="w-full rounded-md col-span-2"
          padY="py-2"
          bgColor="bg-blue-950"
          content="Proceed Checkout"
        />
      </form>
    </div>
  );
}

function OrderSummary({ subTotal, cartItems }) {
  return (
    <div className="border py-8 px-8 bg-white shadow-xl">
      <h1 className="uppercase text-2xl text-slata-900 font-medium">
        Order summary
      </h1>

      <div className="font-medium mt-4 space-y-2 border-b-2 border-slate-900 py-5">
        <OrderSummaryPrice priceType="Subtotal" priceValue={subTotal} />
        <OrderSummaryPrice priceType="Taxes" priceValue={0} />
        <OrderSummaryPrice
          priceType={`Shipping (${cartItems} items)`}
          priceValue={0}
        />
      </div>

      <div className="mt-4 pb-8">
        <OrderSummaryPrice
          priceType="Total"
          priceValue={subTotal}
          fontSlze="text-2xl"
        />
      </div>

      <Button
        content="APPLY A PROMO CODE OR DISCOUNT"
        bgColor="bg-white border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all rounded-sm"
        width="w-full"
        padY="py-2"
        textColor="text-slate-900"
        fontSize="text-[15px]"
      />
    </div>
  );
}

function OrderSummaryPrice({
  priceType = "Shipping({cartItems} items)",
  priceValue = 0,
  fontSlze,
}) {
  const priceValueInNgn = useInternationalization(priceValue);
  return (
    <p className={`flex   justify-between ${fontSlze}`}>
      <span>{priceType}</span> <span>{priceValueInNgn}</span>
    </p>
  );
}
