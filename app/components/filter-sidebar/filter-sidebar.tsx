"use client"

import type React from "react"
import { useState } from "react"
import styles from "./filter-sidebar.module.css"

interface FilterSidebarProps {
  selectedFilters: any
  onFilterChange: (filterType: string, value: any) => void
}


interface FilterSectionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}


function FilterSection({ title, isOpen, onToggle, children }: FilterSectionProps) {
  return (
    <div className={styles.filterSection}>
      <button
        className={styles.filterHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={`${title} filter section`}
      >
        <span className={styles.filterTitle}>{title}</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className={`${styles.filterIcon} ${isOpen ? styles.filterIconOpen : ""}`}
          aria-hidden="true"
        >
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {isOpen && <div className={styles.filterContent}>{children}</div>}
    </div>
  )
}


export default function FilterSidebar({ selectedFilters, onFilterChange }: FilterSidebarProps) {
  // State for which filter sections are open/closed
  const [openSections, setOpenSections] = useState({
    customizable: true,
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  })

  /**
   * Toggle filter section open/closed state
   */
  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }))
  }

  return (
    <div className={styles.sidebar}>
      {/* Customizable Checkbox Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={selectedFilters.customizable}
            onChange={(e) => onFilterChange("customizable", e.target.checked)}
            className={styles.checkbox}
            aria-label="Filter by customizable products"
          />
          <span>CUSTOMIZABLE</span>
        </label>
      </div>

      <div className={styles.divider} />

      {/* Ideal For Filter Section */}
      <FilterSection title="IDEAL FOR" isOpen={openSections.idealFor} onToggle={() => toggleSection("idealFor")}>
        <div className={styles.filterOptions}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Men</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Women</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Baby & Kids</span>
          </label>
        </div>
      </FilterSection>

      <div className={styles.divider} />

      {/* Occasion Filter Section */}
      <FilterSection title="OCCASION" isOpen={openSections.occasion} onToggle={() => toggleSection("occasion")}>
        <div className={styles.filterOptions}>
          <p className={styles.allOption}>All</p>
        </div>
      </FilterSection>

      <div className={styles.divider} />

      {/* Work Filter Section */}
      <FilterSection title="WORK" isOpen={openSections.work} onToggle={() => toggleSection("work")}>
        <div className={styles.filterOptions}>
          <p className={styles.allOption}>All</p>
        </div>
      </FilterSection>

      <div className={styles.divider} />

      {/* Fabric Filter Section */}
      <FilterSection title="FABRIC" isOpen={openSections.fabric} onToggle={() => toggleSection("fabric")}>
        <div className={styles.filterOptions}>
          <p className={styles.allOption}>All</p>
        </div>
      </FilterSection>

      <div className={styles.divider} />

      {/* Segment Filter Section */}
      <FilterSection title="SEGMENT" isOpen={openSections.segment} onToggle={() => toggleSection("segment")}>
        <div className={styles.filterOptions}>
          <p className={styles.allOption}>All</p>
        </div>
      </FilterSection>

      <div className={styles.divider} />

      {/* Suitable For Filter Section */}
      <FilterSection
        title="SUITABLE FOR"
        isOpen={openSections.suitableFor}
        onToggle={() => toggleSection("suitableFor")}
      >
        <div className={styles.filterOptions}>
          <p className={styles.allOption}>All</p>
        </div>
      </FilterSection>

      <div className={styles.divider} />

      {/* Raw Materials Filter Section */}
      <FilterSection
        title="RAW MATERIALS"
        isOpen={openSections.rawMaterials}
        onToggle={() => toggleSection("rawMaterials")}
      >
        <div className={styles.filterOptions}>
          <p className={styles.allOption}>All</p>
        </div>
      </FilterSection>

      <div className={styles.divider} />

      {/* Pattern Filter Section */}
      <FilterSection title="PATTERN" isOpen={openSections.pattern} onToggle={() => toggleSection("pattern")}>
        <div className={styles.filterOptions}>
          <p className={styles.allOption}>All</p>
        </div>
      </FilterSection>
    </div>
  )
}
