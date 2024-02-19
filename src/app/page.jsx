"use client";
import React, { useEffect, useState } from "react";
import "@/assets/styles/home.css";

export default function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      // const response = await fetch("/api/product");
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
      <div className="mt-20 w-11/12 max-w-screen-2xl mx-auto">
        <div className="text-center">
          <h1 className="font-extrabold text-3xl">La Colección De La Semana</h1>
          <p className="mt-4 md:w-7/12 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            aliquam delectus dolor at cum quam quasi fuga repudiandae,
            perspiciatis molestias quos vel illo voluptatibus perferendis beatae
            iure voluptatem! Consequatur, sed!
          </p>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-6">
          {products.map((product) => (
            <div className="max-w-64 max-md:max-w-56" key={product.id}>
              <div className="rounded shadow-lg">
                <div className="w-full h-72 max-md:h-56">
                  <img
                    className="w-full h-full"
                    src={product.imagen}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.nombre}</div>
                  <p className="text-gray-700 text-dispers">
                    {/* <p class="text-gray-700 text-base whitespace-nowrap overflow-hidden text-ellipsis"> */}
                    {product.descripcion}
                  </p>
                </div>
                <div className="px-6 pt-2 pb-4 flex ">
                  <a
                    href="#"
                    className="bg-black text-white rounded-lg py-2 text-center w-full"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
