import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data.slice(0, 24));
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const productChunks = chunkArray(products, 2);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {selectedProduct ? (
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <Carousel className="w-full h-[300px] mb-4">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="h-full w-full object-contain"
            />
          </Carousel>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            {selectedProduct.title}
          </h2>
          <p className="text-xl font-semibold text-gray-600">
            ${selectedProduct.price}
          </p>
          <button
            onClick={() => setSelectedProduct(null)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Back to Products
          </button>
        </div>
      ) : (
        <Carousel className="w-full h-[590px] bg-blue-700 max-w-screen-xl">
          {productChunks.map((chunk, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-center gap-4 p-4"
            >
              {chunk.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow-lg cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative h-32 w-full mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h3 className="text-md font-bold text-center text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-md font-semibold text-gray-700">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Product;
