import { useEffect, useState } from "react";

export function useGetProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [productsData, setProductsData] = useState([]);

  useEffect(function () {
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function getProducts() {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products", {
          signal,
        });
        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        console.log(data);
        setProductsData(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();

    return () => {
      abortController.abort();
    };
  }, []);

  return { productsData, isLoading, error };
}
