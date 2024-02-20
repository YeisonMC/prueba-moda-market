"use client";
import React, { useEffect, useState } from "react";
import "@/assets/styles/home.css";
import "@/assets/styles/swiper.css";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-violet-400">
            <img
              src="https://media.gq.com.mx/photos/63f53660937b5d59a717b034/4:3/w_1999,h_1499,c_limit/ropa-barata-de-hombre-en-tendencia-febrero-2023.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6sYr6ZyiffRXSCFPWE5ItxuvN8wCn_pf_g&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6sYr6ZyiffRXSCFPWE5ItxuvN8wCn_pf_g&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
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
                  <Link
                    href={"/pages/home/id"}
                    className="bg-black text-white rounded-lg py-2 text-center w-full"
                  >
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
