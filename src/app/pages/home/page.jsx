"use client";
import React, { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      //   const response = await fetch("/api/product");
      const response = await fetch(
        "https://prueba-moda-market-production.up.railway.app/api/product"
      );
      const data = await response.json();
      setProducts(data.Product);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="max-w-7xl bg-violet-300 mx-auto">
        <h1>Productos</h1>
        <div className="">
          {products.map((product) => (
            <div className="" key={product.id}>
              <h1 className="text-2xl font-bold">1. {product.nombre}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
