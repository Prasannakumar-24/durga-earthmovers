import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import companyConfig from '../config/companyConfig';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent page scrolling while mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    {
      name: 'HOME',
      path: '/',
    },
    {
      name: 'ABOUT',
      path: '/about',
    },
    {
      name: 'SERVICES',
      path: '/services',
    },
    {
      name: 'WORKS',
      path: '/works',
    },
    {
      name: 'CONTACT',
      path: '/contact',
    },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          LIQUID GLASS NAVBAR
      ====================================================== */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="
          fixed
          top-0
          left-0
          right-0
          z-[100]
          w-full
          pointer-events-none
        "
      >
        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}
        <div className="w-full px-3 pt-3 md:px-6 md:pt-5">
          <div
            className={`
              section-container
              pointer-events-auto
              mx-auto
              transition-all
              duration-500
            `}
          >
            <div className="flex items-center justify-between gap-4">
              
              {/* =================================================
                  LOGO (OUTSIDE GLASS SECTION)
              ================================================== */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="
                  relative
                  z-10
                  flex
                  items-center
                  shrink-0
                  group
                "
              >
                <img
                  src="/assets/images/durga-earthmovers-logo.png"
                  alt="DURGA EARTHMOVERS"
                  className="h-10 md:h-14 w-auto max-w-[140px] object-contain rounded-2xl"
                  style={{ filter: 'none' }}
                />
              </Link>

              {/* =================================================
                  GLASS NAVIGATION SECTION
              ================================================== */}
              <div
                className={`
                  relative
                  flex-1
                  flex
                  items-center
                  justify-between
                  min-h-[68px]
                  md:min-h-[76px]
                  px-4
                  md:px-7
                  rounded-[22px]
                  md:rounded-[26px]

                  bg-white/[0.08]
                  backdrop-blur-2xl
                  backdrop-saturate-150

                  border
                  border-white/[0.20]

                  shadow-[0_8px_40px_rgba(0,0,0,0.20)]

                  overflow-hidden

                  transition-all
                  duration-500

                  ${
                    isScrolled
                      ? 'bg-black/[0.35] border-white/[0.25] shadow-[0_12px_45px_rgba(0,0,0,0.30)]'
                      : 'bg-white/[0.10]'
                  }
                `}
              >
                {/* =================================================
                    GLASS LIGHT REFLECTION
                ================================================== */}
                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    rounded-[22px]
                    md:rounded-[26px]
                    bg-gradient-to-b
                    from-white/[0.14]
                    via-transparent
                    to-transparent
                  "
                />

                {/* =================================================
                    COMPANY NAME (INSIDE GLASS SECTION)
                ================================================== */}
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="
                    relative
                    z-10
                    hidden
                    md:flex
                    items-center
                    shrink-0
                    group
                  "
                >
                  <div className="flex overflow-hidden">
                    {'DURGA EARTHMOVERS'.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: 'easeOut'
                        }}
                        className="text-lg md:text-xl font-poppins font-medium text-white tracking-wider transition-all duration-300 group-hover:text-construction-yellow"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </Link>

                {/* =================================================
                    DESKTOP NAVIGATION
                ================================================== */}
                <div
                  className="
                    relative
                    z-10
                    hidden
                    md:flex
                    items-center
                    gap-1
                    lg:gap-2
                  "
                >
                {navLinks.map((link) => {
                  const isActive =
                    location.pathname === link.path;

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="
                        relative
                        px-3
                        lg:px-4
                        py-2.5
                        rounded-xl
                        font-poppins
                        font-medium
                        text-sm
                        tracking-wider
                        transition-all
                        duration-300
                        group
                      "
                    >
                      {/* Active / Hover Glass Background */}
                      <span
                        className={`
                          absolute
                          inset-0
                          rounded-xl
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? 'bg-white/[0.16] opacity-100'
                              : 'bg-white/[0.10] opacity-0 group-hover:opacity-100'
                          }
                        `}
                      />

                      {/* Top Glass Highlight */}
                      <span
                        className="
                          absolute
                          left-2
                          right-2
                          top-0
                          h-px
                          bg-white/[0.35]
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                        "
                      />

                      <span
                        className={`
                          relative
                          z-10
                          ${
                            isActive
                              ? 'text-construction-yellow'
                              : 'text-white group-hover:text-construction-yellow'
                          }
                        `}
                      >
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* =================================================
                  DESKTOP CTA
              ================================================== */}
              <div
                className="
                  relative
                  z-10
                  hidden
                  md:flex
                  items-center
                "
              >
                <Link
                  to="/contact"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    px-5
                    lg:px-6
                    py-3

                    bg-construction-yellow
                    text-charcoal-dark

                    font-poppins
                    font-medium
                    text-sm
                    tracking-wider

                    shadow-lg
                    shadow-black/20

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-xl
                  "
                >
                  {/* Button Shine */}
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      group-hover:translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/40
                      to-transparent
                      transition-transform
                      duration-700
                    "
                  />

                  <span className="relative z-10">
                    BOOK A SERVICE
                  </span>
                </Link>
              </div>

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================== */}
              <button
                type="button"
                onClick={() =>
                  setIsMobileMenuOpen((previous) => !previous)
                }
                className="
                  relative
                  z-[120]
                  md:hidden

                  flex
                  items-center
                  justify-center

                  w-11
                  h-11

                  rounded-xl

                  bg-white/[0.10]
                  border
                  border-white/[0.20]

                  text-white

                  transition-all
                  duration-300

                  hover:bg-white/[0.18]
                "
                aria-label={
                  isMobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X
                    size={28}
                    strokeWidth={2}
                  />
                ) : (
                  <Menu
                    size={28}
                    strokeWidth={2}
                  />
                )}
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE LIQUID GLASS MENU
        ====================================================== */}
        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              className="
                md:hidden
                pointer-events-auto
                px-3
                pt-2
              "
            >
              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[22px]

                  bg-black/[0.55]
                  backdrop-blur-2xl
                  backdrop-saturate-150

                  border
                  border-white/[0.18]

                  shadow-[0_15px_50px_rgba(0,0,0,0.35)]
                "
              >
                {/* Glass Highlight */}
                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-gradient-to-b
                    from-white/[0.10]
                    via-transparent
                    to-transparent
                  "
                />

                <div className="relative px-5 py-4">
                  {/* =========================================
                      MOBILE LINKS
                  ========================================== */}
                  <div className="flex flex-col">
                    {navLinks.map((link, index) => {
                      const isActive =
                        location.pathname === link.path;

                      return (
                        <motion.div
                          key={link.path}
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.05,
                            duration: 0.25,
                          }}
                        >
                          <Link
                            to={link.path}
                            onClick={closeMobileMenu}
                            className={`
                              block
                              w-full
                              py-4
                              px-3
                              rounded-xl

                              border-b
                              border-white/[0.10]

                              font-poppins
                              font-medium
                              text-lg
                              tracking-wider

                              transition-all
                              duration-300

                              ${
                                isActive
                                  ? 'text-construction-yellow bg-white/[0.10]'
                                  : 'text-white hover:text-construction-yellow hover:bg-white/[0.08]'
                              }
                            `}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* =========================================
                      MOBILE CTA
                  ========================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.25,
                      duration: 0.25,
                    }}
                    className="pt-5 pb-2"
                  >
                    <Link
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="
                        group
                        relative
                        overflow-hidden

                        block
                        w-full

                        rounded-xl

                        bg-construction-yellow
                        text-charcoal-dark

                        text-center
                        font-poppins
                        font-medium
                        tracking-wider

                        py-4

                        shadow-lg

                        transition-all
                        duration-300

                        hover:shadow-xl
                      "
                    >
                      <span
                        className="
                          absolute
                          inset-0
                          -translate-x-full
                          group-hover:translate-x-full
                          bg-gradient-to-r
                          from-transparent
                          via-white/40
                          to-transparent
                          transition-transform
                          duration-700
                        "
                      />

                      <span className="relative z-10">
                        BOOK A SERVICE
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={closeMobileMenu}
            className="
              fixed
              inset-0
              bg-black/50
              backdrop-blur-sm
              z-[90]
              md:hidden
            "
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
