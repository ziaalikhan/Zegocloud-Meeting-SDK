import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router"


export default function () {
    const router = useRouter();
    let { customerId } = router.query;
    return (
      <div>
        <h1>Product Name {customerId}</h1>
        <Link href={`/customer/product`}>Product One</Link>
      </div>
    )
}
