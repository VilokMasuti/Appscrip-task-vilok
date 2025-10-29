import styles from "./footer.module.css"

/**
 * Footer Component
 *
 * Features:
 * - Newsletter subscription form
 * - Contact information
 * - Currency selector
 * - Company links
 * - Social media links
 * - Payment method icons
 * - Copyright notice
 * - Fully responsive design
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Footer Top Section - Newsletter and Contact */}
        <div className={styles.footerTop}>
          {/* Newsletter Signup Section */}
          <div className={styles.newsletterSection}>
            <h2 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h2>
            <p className={styles.newsletterText}>Sign up for updates from mettā muse.</p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.emailInput}
                aria-label="Email address for newsletter"
                required
              />
              <button type="submit" className={styles.subscribeButton}>
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h2 className={styles.contactTitle}>CONTACT US</h2>
            <address className={styles.contactInfo}>
              <a href="tel:+442211335360" className={styles.contactLink}>
                +44 221 133 5360
              </a>
              <a href="mailto:customercare@mettamuse.com" className={styles.contactLink}>
                customercare@mettamuse.com
              </a>
            </address>

            {/* Currency Selector */}
            <div className={styles.currencySection}>
              <h3 className={styles.currencyTitle}>CURRENCY</h3>
              <div className={styles.currencySelector}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22M12 2C9.5 4.5 8 8 8 12C8 16 9.5 19.5 12 22M2 12H22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className={styles.currencyText}>USD</span>
              </div>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Footer Bottom Section - Links and Social */}
        <div className={styles.footerBottom}>
          {/* Company Links Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>mettā muse</h3>
            <nav className={styles.footerNav}>
              <a href="#about" className={styles.footerLink}>
                About Us
              </a>
              <a href="#stories" className={styles.footerLink}>
                Stories
              </a>
              <a href="#artisans" className={styles.footerLink}>
                Artisans
              </a>
              <a href="#boutiques" className={styles.footerLink}>
                Boutiques
              </a>
              <a href="#contact" className={styles.footerLink}>
                Contact Us
              </a>
              <a href="#compliance" className={styles.footerLink}>
                EU Compliances Docs
              </a>
            </nav>
          </div>

          {/* Quick Links Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>QUICK LINKS</h3>
            <nav className={styles.footerNav}>
              <a href="#orders" className={styles.footerLink}>
                Orders & Shipping
              </a>
              <a href="#seller" className={styles.footerLink}>
                Join/Login as a Seller
              </a>
              <a href="#payment" className={styles.footerLink}>
                Payment & Pricing
              </a>
              <a href="#returns" className={styles.footerLink}>
                Return & Refunds
              </a>
              <a href="#faqs" className={styles.footerLink}>
                FAQs
              </a>
              <a href="#privacy" className={styles.footerLink}>
                Privacy Policy
              </a>
              <a href="#terms" className={styles.footerLink}>
                Terms & Conditions
              </a>
            </nav>
          </div>

          {/* Social and Payment Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>FOLLOW US</h3>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" className={styles.socialLink} aria-label="Follow us on Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://linkedin.com" className={styles.socialLink} aria-label="Follow us on LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 3H4C3.4 3 3 3.4 3 4V20C3 20.6 3.4 21 4 21H20C20.6 21 21 20.6 21 20V4C21 3.4 20.6 3 20 3ZM8.5 18.3H5.7V10H8.5V18.3ZM7.1 8.7C6.2 8.7 5.5 8 5.5 7.1C5.5 6.2 6.2 5.5 7.1 5.5C8 5.5 8.7 6.2 8.7 7.1C8.7 8 8 8.7 7.1 8.7ZM18.3 18.3H15.5V14.2C15.5 13.2 15.5 11.9 14.1 11.9C12.7 11.9 12.5 13 12.5 14.1V18.3H9.7V10H12.4V11.1H12.4C12.8 10.4 13.7 9.7 15 9.7C17.8 9.7 18.3 11.4 18.3 13.7V18.3Z" />
                </svg>
              </a>
            </div>

            {/* Payment Methods Section */}
            <div className={styles.paymentSection}>
              <h3 className={styles.paymentTitle}>mettā muse ACCEPTS</h3>
              <div className={styles.paymentMethods}>
                <div className={styles.paymentIcon}>
                  <svg width="40" height="26" viewBox="0 0 40 26" fill="none">
                    <rect width="40" height="26" rx="3" fill="#1434CB" />
                    <text x="20" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                      VISA
                    </text>
                  </svg>
                </div>
                <div className={styles.paymentIcon}>
                  <svg width="40" height="26" viewBox="0 0 40 26" fill="none">
                    <rect width="40" height="26" rx="3" fill="#EB001B" />
                    <circle cx="15" cy="13" r="8" fill="#FF5F00" />
                    <circle cx="25" cy="13" r="8" fill="#F79E1B" />
                  </svg>
                </div>
                <div className={styles.paymentIcon}>
                  <svg width="40" height="26" viewBox="0 0 40 26" fill="none">
                    <rect width="40" height="26" rx="3" fill="#00457C" />
                    <text x="20" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                      AMEX
                    </text>
                  </svg>
                </div>
                <div className={styles.paymentIcon}>
                  <svg width="40" height="26" viewBox="0 0 40 26" fill="none">
                    <rect width="40" height="26" rx="3" fill="#5469D4" />
                    <text x="20" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                      GPay
                    </text>
                  </svg>
                </div>
                <div className={styles.paymentIcon}>
                  <svg width="40" height="26" viewBox="0 0 40 26" fill="none">
                    <rect width="40" height="26" rx="3" fill="#635BFF" />
                    <text x="20" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                      Pay
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
