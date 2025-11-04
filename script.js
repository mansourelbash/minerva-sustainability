document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".timeline")
  const dots = document.querySelectorAll(".dot")
  const cards = document.querySelectorAll(".timeline-card")
  if (timeline && dots.length > 0 && cards.length > 0 && window.innerWidth <= 1024) {
    let currentIndex = 0
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index
        updateCarousel()
      })
    })
    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth + 30 
      timeline.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      })
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex)
      })
    }
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
  if (mobileMenuToggle && nav) {
    const navOverlay = document.createElement('div')
    navOverlay.className = 'nav-overlay'
    document.body.appendChild(navOverlay)
    const navClose = document.createElement('button')
    navClose.className = 'nav-close'
    navClose.innerHTML = '×'
    navClose.setAttribute('aria-label', 'Close navigation menu')
    nav.appendChild(navClose)
    const openMenu = () => {
      mobileMenuToggle.classList.add("active")
      nav.classList.add("active")
      navOverlay.classList.add("active")
      mobileMenuToggle.setAttribute("aria-expanded", "true")
      document.body.classList.add("no-scroll")
      nav.style.transform = 'translateX(0)'
    }
    const closeMenu = () => {
      mobileMenuToggle.classList.remove("active")
      nav.classList.remove("active")
      navOverlay.classList.remove("active")
      mobileMenuToggle.setAttribute("aria-expanded", "false")
      document.body.classList.remove("no-scroll")
      nav.style.transform = 'translateX(100%)'
    }
    mobileMenuToggle.setAttribute("aria-controls", "site-navigation")
    mobileMenuToggle.setAttribute("aria-expanded", "false")
    mobileMenuToggle.setAttribute("aria-label", "Toggle navigation menu")
    if (window.innerWidth <= 1024) {
      nav.style.transform = 'translateX(100%)'
    }
    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation()
      if (!nav.classList.contains("active")) {
        openMenu() 
      }
    })
    navClose.addEventListener("click", (e) => {
      e.stopPropagation()
      closeMenu()
    })
    navOverlay.addEventListener("click", (e) => {
    })
    document.addEventListener("keydown", (e) => {
    })
    nav.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
      })
    })
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        closeMenu()
        nav.style.transform = '' 
      } else {
        if (!nav.classList.contains("active")) {
          nav.style.transform = 'translateX(100%)' 
        }
      }
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
  const timelineYears = document.querySelectorAll(".timeline-year")
  if (timelineYears.length > 0) {
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
    timelineYears.forEach((year) => {
      yearObserver.observe(year)
    })
  }
})
