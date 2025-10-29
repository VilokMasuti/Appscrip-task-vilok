"use client"


import ProductCard from '@/app/components/product-card/product-card'
import { useState } from "react"
import styles from "./product-grid.module.css"

/**
 * Product Interface
 */
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductGridProps {
  products: Product[]
}

/**
 * ProductGrid Component
 *
 * Features:
 * - Responsive grid layout (3 cols desktop, 2 cols tablet, 1-2 cols mobile)
 * - Wishlist state management
 * - Product card rendering
 * - Smooth animations
 */
export default function ProductGrid({ products }: ProductGridProps) {
  // State for wishlist items
  const [wishlist, setWishlist] = useState<Set<number>>(new Set())

  /**
   * Toggle product in/out of wishlist
   */
  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev)
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId)
      } else {
        newWishlist.add(productId)
      }
      return newWishlist
    })
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isInWishlist={wishlist.has(product.id)}
          onToggleWishlist={() => toggleWishlist(product.id)}
        />
      ))}
    </div>
  )
}
