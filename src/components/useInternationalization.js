import { useEffect, useState } from "react";

export function useInternationalization(price) {
  const [priceInNaira, setPriceInNaira] = useState("");

  useEffect(
    function () {
      const priceConvert = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(price);

      setPriceInNaira(priceConvert);
    },
    [price]
  );

  return priceInNaira;
}
