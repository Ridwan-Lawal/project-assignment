import { IoCartOutline, IoPersonOutline } from "react-icons/io5";

export function NavBar({
  cartNumber = 0,
  onProfileState,
  onCartOpening,
  isNavFixed,
}) {
  return (
    <nav
      className={` py-4 px-5 ${
        isNavFixed
          ? "fixed shadow-lg bg-white z-10"
          : "static shadow-none bg-none"
      } w-full transition-all duration-500`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* logo */}
        <section>
          <img
            src="/logo.svg"
            alt=""
            className="w-11 cursor-pointer"
            onClick={onProfileState}
          />
        </section>

        {/* login and cart */}

        <section className="gap-10 flex items-center">
          <div onClick={onProfileState}>
            <IoPersonOutline className="text-[27px] cursor-pointer" />
          </div>
          <div className="relative cursor-pointer" onClick={onCartOpening}>
            <IoCartOutline className="text-[33px] cursor-pointer" />
            <p className="bg-red-700 font-medium text-white flex justify-center absolute w-[18px] text-[12px] items-center rounded-full -bottom-1 right-0">
              {cartNumber}
            </p>
          </div>
        </section>
      </div>
    </nav>
  );
}
