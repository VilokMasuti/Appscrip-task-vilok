"use client"

import Image from "next/image"
import styles from "./product-card.module.css"

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

interface ProductCardProps {
  product: Product
  isInWishlist: boolean
  onToggleWishlist: () => void
}

/**
 * ProductCard Component
 *
 * Features:
 * - Product image with lazy loading
 * - Wishlist toggle button
 * - Product title and pricing info
 * - SEO-friendly alt text
 * - Hover effects
 * - Accessibility features
 */
export default function ProductCard({ product, isInWishlist, onToggleWishlist }: ProductCardProps) {
  /**
   * Generate SEO-friendly image name from product title
   * Converts to lowercase and replaces special characters with hyphens
   */
  const seoImageName = product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

  return (
    <article className={styles.card}>
      {/* Product Image Container */}
      <div className={styles.imageContainer}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={`${product.title} - Premium ${product.category} product available at mettā muse`}
          width={300}
          height={400}
          className={styles.image}
          loading="lazy"
          quality={75}
        />

        {/* Wishlist Toggle Button */}
        <button
          className={`${styles.wishlistButton} ${isInWishlist ? styles.wishlistActive : ""}`}
          onClick={onToggleWishlist}
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isInWishlist}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill={isInWishlist ? "currentColor" : "none"}>
            <path
              d="M10 17.5L8.5 16.2C4 12.1 1 9.4 1 6.1C1 3.4 3.1 1.5 5.8 1.5C7.4 1.5 9 2.3 10 3.5C11 2.3 12.6 1.5 14.2 1.5C16.9 1.5 19 3.4 19 6.1C19 9.4 16 12.1 11.5 16.2L10 17.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {/* Product Info Section */}
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.signInText}>
          <a href="#signin" className={styles.signInLink}>
            Sign in
          </a>{" "}
          or Create an account to see pricing
        </p>
      </div>
    </article>
  )
}
