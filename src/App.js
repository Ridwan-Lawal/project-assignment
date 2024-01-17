import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { useState } from "react";
import { Button } from "./components/Button";
import { ProductDetails } from "./components/ProductDetails";
import { AppForms } from "./components/AppForms";

export default function App() {
  const [isProfile, setIsProfile] = useState(false);

  function handleProfileState() {
    setIsProfile((curBool) => !curBool);
  }
  return (
    <div className="font-poppins">
      <div className="flex">
        {/* main page */}
        <section className="w-full">
          <NavBar onProfileState={handleProfileState} />

          {/* for the profile login */}

          {isProfile ? (
            <AppForms />
          ) : (
            <>
              {" "}
              <Banner />
              <Products />
              <Footer />
              <ProductDetails />
            </>
          )}
        </section>

        {/* cart */}
        {/* <section className="fixed right-0 shadow-2xl w-full bg-white  h-full sm:w-[54%] md:w-[52%] lg:w-[42%]">
          <Cart />
        </section> */}
      </div>
    </div>
  );
}
