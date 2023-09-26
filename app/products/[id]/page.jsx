import Image from "next/image"

const API_LINK = 'https://dummyjson.com'
async function fetchProduct(id) {
  try {
    const data = await fetch(`${API_LINK}/products/${id}`)
    return data.json()    
  } catch (error) {
    throw new Error('oops!')
  }
}

export default async function Product({ params }) {
  const product = await fetchProduct(params.id)

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Image width={1000} height={1000} src={product.thumbnail} alt={product.title} className="w-64 mx-auto" />
      <h2 className="text-2xl font-semibold mt-4">{product.title}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-lg font-semibold text-blue-600">${product.price}</p>
          {product.discountPercentage > 0 && (
            <p className="text-sm text-gray-400 line-through">${(product.price / ((100 - product.discountPercentage) / 100)).toFixed(2)}</p>
          )}
        </div>
        <div className="text-yellow-400">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">Brand: {product.brand}</p>
        <p className="text-gray-600">Category: {product.category}</p>
        <p className="text-gray-600">Stock: {product.stock}</p>
      </div>
    </div>
  );
}