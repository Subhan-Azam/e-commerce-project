import React from 'react'
import { useRouter } from 'next/navigation'

export default function ProductDetail() {
  const router = useRouter()
  const eachProduct = router.query.productDetail
  return (
    <div>{eachProduct}</div>
  )
}
