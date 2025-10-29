"use client"

import Image from "next/image"
import { useState } from "react"
import styles from "./header.module.css"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.headerContent}>
          {/* Mobile Menu Button - Shows on mobile */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Left side - Only image (hidden on mobile) */}
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>

          {/* Center section - Logo text and navigation */}
          <div className={styles.centerSection}>
            <div className={styles.logoText}>LOGO</div>
            <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.navigationOpen : ""}`}>
              <a href="#shop" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>SHOP</a>
              <a href="#skills" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>SKILLS</a>
              <a href="#stories" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>STORIES</a>
              <a href="#about" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
              <a href="#contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</a>
            </nav>
          </div>

          {/* Right side - Icons */}
          <div className={styles.headerActions}>
            <button className={styles.iconButton} aria-label="Search products">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <button className={styles.iconButton} aria-label="View wishlist">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 17.5L8.5 16.2C4 12.1 1 9.4 1 6.1C1 3.4 3.1 1.5 5.8 1.5C7.4 1.5 9 2.3 10 3.5C11 2.3 12.6 1.5 14.2 1.5C16.9 1.5 19 3.4 19 6.1C19 9.4 16 12.1 11.5 16.2L10 17.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            <button className={styles.iconButton} aria-label="View shopping bag">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 7V5C5 2.8 6.8 1 9 1H11C13.2 1 15 2.8 15 5V7M2 7H18L17 19H3L2 7Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            <button className={styles.iconButton} aria-label="View user account">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 18C3 14.7 6.1 12 10 12C13.9 12 17 14.7 17 18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            <button className={styles.languageButton} aria-label="Change language">
              ENG
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
