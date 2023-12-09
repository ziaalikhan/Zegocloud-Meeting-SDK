import React from 'react'
import { useRouter } from "next/router"
import Link from 'next/link';

export default function () {
    // const router = useRouter();
    // let { customerId } = router.query;
  
    return (
      <div>
        <h1>Customer</h1>
        <Link href={"/customer/ziaproduct"}>Customer One</Link>
      </div>
    )
}
