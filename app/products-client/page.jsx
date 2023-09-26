'use client'
import useSWR from 'swr';
import useFetch from './useFetch'
import Image from 'next/image';
import { Suspense } from 'react';
import Link from 'next/link';

const API_LINK = 'https://dummyjson.com'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ProductsClient () {

   const { data, loading, error } = useFetch(`api/products`)
  //const { data, isLoading, error } = useSWR(`${API_LINK}/products`, fetcher)
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Products</h1>
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
    </>
  )
}