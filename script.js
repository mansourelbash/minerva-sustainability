// Import AOS library
import AOS from "aos"

// Timeline carousel functionality
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  })

  const timeline = document.querySelector(".timeline")
  const dots = document.querySelectorAll(".dot")
  const cards = document.querySelectorAll(".timeline-card")

  // Only enable carousel on mobile
  if (window.innerWidth <= 1024) {
    let currentIndex = 0

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index
        updateCarousel()
      })
    })

    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth + 30 // card width + gap
      timeline.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      })

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex)
      })
    }

    // Update active dot on scroll
    timeline.addEventListener("scroll", () => {
      const cardWidth = cards[0].offsetWidth + 30
      const scrollPosition = timeline.scrollLeft
      const newIndex = Math.round(scrollPosition / cardWidth)

      if (newIndex !== currentIndex) {
        currentIndex = newIndex
        dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentIndex)
        })
      }
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const nav = document.querySelector(".nav")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active")
      nav.classList.toggle("active")
    })
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe sections for scroll animations
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section)
  })

  const animateCounter = (element, target, duration = 2000) => {
    let start = 0
    const increment = target / (duration / 16)

    const updateCounter = () => {
      start += increment
      if (start < target) {
        element.textContent = Math.floor(start)
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = target
      }
    }

    updateCounter()
  }

  // Animate timeline years when they come into view
  const yearObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
        const year = Number.parseInt(entry.target.textContent)
        entry.target.textContent = "0"
        animateCounter(entry.target, year)
        entry.target.classList.add("animated")
      }
    })
  }, observerOptions)

  document.querySelectorAll(".timeline-year").forEach((year) => {
    yearObserver.observe(year)
  })
})
