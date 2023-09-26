import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const API_LINK = 'https://dummyjson.com'
// Pages in App Router are always Server Side Components
export const revalidate = 3600 // revalidate the data almost every hour

async function fetchProducts() {
  try {
    const data = await fetch(`${API_LINK}/products`)
    return data.json()    
  } catch (error) {
    throw new Error('oops!')
  }
}

export default async function Products() {
  const data = await fetchProducts();

    return (
      <>
        <h1 className="text-3xl font-bold">Products</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ol className="list-decimal mt-4">
            {data.products.map((product, ix) => (
              <li key={`${product.title}-${ix}`} className="mb-4">
                <div className="flex gap-3">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <Link href={`/products/${product.id}`}>Go to product</Link>
                </div>
                <Image src={product.thumbnail} alt={product.title} className="w-32 mt-2" width={100} height={100}/>
                <p className="text-gray-600">{product.brand}</p>
                <hr className="my-2" />
              </li>
            ))}
          </ol>
        </Suspense>
      </>
    );
}
