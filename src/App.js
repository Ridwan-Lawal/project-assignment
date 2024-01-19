import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { ProductDetails } from "./components/ProductDetails";
import { AppForms } from "./components/AppForms";
import { useGetProducts } from "./components/useGetProducts";
import { Triangle } from "react-loader-spinner";

// map the productsData, create a reusable custom hook for the productsData, create a reusable custom hook for the internatonalizaton api, Also product details, also for the carts6

// local storage for storing cart
// ref for nav fixed
// checkout page
// product detalis
// login and signup validation
// create an error and loading state

export default function App() {
  const [isProfile, setIsProfile] = useState(false);
  const { productsData, isLoading, error } = useGetProducts();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem("products"))
  );

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
  console.log(cart);

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

  return (
    <div className="font-poppins">
      <div className="flex">
        {/* main page */}
        <section className="w-full">
          <NavBar
            onProfileState={handleProfileState}
            onCartOpening={handleCartOpening}
            cartNumber={cart?.length}
          />

          {/* for the profile login */}

          {isProfile ? (
            <AppForms />
          ) : (
            <>
              {" "}
              <Banner />
              {isLoading && <Loader />}
              {error && <Error error={error} />}
              {!isLoading && !error && (
                <Products
                  productsData={productsData}
                  onAddProductToCart={handleAddProductToCart}
                />
              )}
              <Footer />
            </>
          )}

          {/* <ProductDetails /> */}
        </section>

        {/* cart */}
        <section
          className={`fixed right-0 shadow-2xl  bg-white ${
            cartIsOpen ? "w-full sm:w-[60%] md:w-[52%] lg:w-[42%]" : "w-0"
          } transition-all duration-500  h-full`}
        >
          <Cart
            onCartOpening={handleCartOpening}
            cart={cart}
            onProductQuantityIncrease={handleProductQuantityIncrease}
            onProductQuantityDecrease={handleProductquantityDecrease}
            subTotal={subTotal}
            onDeleteProductFromCart={handleDeleteProductFromCart}
            onResetCart={handleResetCart}
          />
        </section>
      </div>
    </div>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

function Error({ error = "Something went wrong" }) {
  return (
    <div className="text-center">
      <p className="text-3xl text-red-700">{error}!</p>
    </div>
  );
}
