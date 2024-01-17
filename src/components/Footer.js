export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 mt-16 h-[130px] px-8 flex justify-center items-center ">
      <div className="">
        <p className="text-white text-center  text-[16px]">
          Copyright &copy; Lawal Ridwan {year}. All rights reserved
        </p>
      </div>
    </footer>
  );
}
