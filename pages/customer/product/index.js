import React from 'react'
import { useRouter } from "next/router"
import Link from 'next/link';

export default function () {
    // const router = useRouter();
    // let { customerId } = router.query;
  
    return (
      <div>
        <h1>Product Page</h1>
        <Link href={"/customer/product/zia052"}>Product One</Link>
        <Link href={"/customer/product/hamza0523"}>Product Two</Link>
      </div>
    )
}
