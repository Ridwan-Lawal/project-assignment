import { IoCartOutline, IoPersonOutline } from "react-icons/io5";

export default function App() {
  return (
    <div className="font-poppins">
      <NavBar />
    </div>
  );
}

function NavBar({ cartNumber = 0 }) {
  return (
    <nav className="border py-4 px-5 flex items-center justify-between">
      {/* logo */}
      <section>
        <img src="/logo.svg" alt="" className="w-11" />
      </section>

      {/* login and cart */}

      <section className="border gap-10 flex items-center">
        <div>
          <IoPersonOutline className="text-[27px] cursor-pointer" />
        </div>
        <div className="relative">
          <IoCartOutline className="text-[33px] cursor-pointer" />
          <p className="bg-red-600 font-medium text-white flex justify-center absolute px-[5px] text-sm items-center rounded-full -bottom-1 right-0">
            {cartNumber}
          </p>
        </div>
      </section>
    </nav>
  );
}
