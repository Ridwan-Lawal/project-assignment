import { Triangle } from "react-loader-spinner";

export function Loader() {
  return (
    <div className="flex items-center  justify-center">
      <Triangle
        visible={true}
        height="70"
        width="70"
        color="darkblue"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
