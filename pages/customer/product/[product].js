import React from 'react'
import { useRouter } from "next/router"
import Link from 'next/link';

export default function () {
    const router = useRouter();
    let { product } = router.query;
  
    return (
      <div>
        <h1>Product {product}</h1>
        {/* <Link href={"/customer/ziaproduct"}>Product Page One</Link> */}
      </div>
    )
}
