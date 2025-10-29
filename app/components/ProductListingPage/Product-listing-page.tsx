"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import FilterSidebar from '@/app/components/filter-sidebar/filter-sidebar'
import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import ProductGrid from '@/app/components/product-grid/product-grid'
import styles from "./productlistingpage.module.css"

/**
 * Product Interface
 * Represents the structure of product data from Fake Store API
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

interface ProductListingPageProps {
  products: Product[]
}

/**
 * ProductListingPage Component
 *
 * Main product listing page with:
 * - Filter sidebar with collapsible sections
 * - Sort functionality (recommended, price, popularity)
 * - Responsive grid layout
 * - Wishlist functionality
 * - SEO-optimized structure
 */
const sortOptions = [
  { value: "recommended", label: "RECOMMENDED" },
  { value: "newest", label: "NEWEST FIRST" },
  { value: "popular", label: "POPULAR" },
  { value: "price-high-low", label: " HIGH TO LOW" },
  { value: "price-low-high", label: " LOW TO HIGH" }
];
export default function ProductListingPage({ products }: ProductListingPageProps) {
  // State for sidebar visibility toggle
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  // State for sort option
  const [sortOption, setSortOption] = useState("recommended")


  // State for active filters
  const [selectedFilters, setSelectedFilters] = useState({
    customizable: false,
    idealFor: [] as string[],
    occasion: [] as string[],
    work: [] as string[],
    fabric: [] as string[],
    segment: [] as string[],
    suitableFor: [] as string[],
    rawMaterials: [] as string[],
    pattern: [] as string[],
  })

  /**
   * Toggle sidebar visibility on mobile/tablet
   */
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  /**
   * Handle sort option change
   */
  const handleSortChange = (value: string) => {
    setSortOption(value)
  }

  /**
   * Handle filter changes from sidebar
   */
  const handleFilterChange = (filterType: string, value: any) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  /**
   * Apply sorting to products based on selected sort option
   * Uses useMemo to optimize performance and prevent unnecessary re-renders
   */
  const sortedProducts = useMemo(() => {
    const sorted = [...products]

    switch (sortOption) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price)
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price)
      case "newest":
        return sorted.reverse()
      case "popular":
        return sorted.sort((a, b) => b.rating.count - a.rating.count)
      default:
        return sorted
    }
  }, [products, sortOption])
  const [openSort, setOpenSort] = useState(false);



  // Dropdown close on outside click
  const sortRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent): void => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
      setOpenSort(false);
      }
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, []);


  return (
    <div className={styles.pageContainer}>
      <Header/>

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.heroDescription}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh
            amet mi ut elementum dolor.
          </p>
        </section>

        <div className={styles.contentWrapper}>
          {/* Filter Header with Item Count and Sort */}
          <div className={styles.filterHeader}>
            <div className={styles.itemCount}>
              <span className={styles.itemCountNumber}>{products.length}</span> ITEMS
              <button
                className={styles.filterToggle}
                onClick={toggleSidebar}
                aria-label={isSidebarVisible ? "Hide filters" : "Show filters"}
              >
                {isSidebarVisible ? "< HIDE FILTER" : "> SHOW FILTER"}
              </button>
            </div>

            {/* Sort Dropdown */}
         {/* === Custom Sort Dropdown START === */}
            <div className={styles.sortContainer} ref={sortRef}>
              <button
                className={styles.customDropdownBtn}
                onClick={() => setOpenSort((o) => !o)}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={openSort}
              >
                {sortOptions.find(o => o.value === sortOption)?.label || 'RECOMMENDED'}
                <svg width="14" height="8" viewBox="0 0 10 6">
                  <path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openSort && (
                <div className={styles.customDropdownMenu} role="listbox" tabIndex={-1}>
                  {sortOptions.map(opt => (
                    <div
                      key={opt.value}
                      className={`${styles.dropdownItem} ${sortOption === opt.value ? styles.active : ""}`}
                      role="option"
                      aria-selected={sortOption === opt.value}
                      onClick={() => { handleSortChange(opt.value); setOpenSort(false); }}
                      tabIndex={0}
                    >
                      {sortOption === opt.value && <span className={styles.check}>✓</span>}
                      {opt.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content Grid - Sidebar + Products */}
         <div
  className={`${styles.contentGrid} ${
    !isSidebarVisible ? styles.contentGridFullWidth : ""
  }`}
>
  {isSidebarVisible && (
    <aside className={styles.sidebar}>
      <FilterSidebar
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
    </aside>
  )}

  <section className={styles.productSection}>
    <h2 className={styles.visuallyHidden}>Product Listing</h2>
    <ProductGrid products={sortedProducts} />
  </section>
</div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
