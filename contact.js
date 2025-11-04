document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const formMessage = document.getElementById("formMessage")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const firstName = document.getElementById("firstName").value
      const lastName = document.getElementById("lastName").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value
      if (!firstName || !lastName || !email || !subject || !message) {
        showMessage("Please fill in all required fields.", "error")
        return
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        showMessage("Please enter a valid email address.", "error")
        return
      }
      const submitButton = contactForm.querySelector(".btn-submit")
      submitButton.disabled = true
      submitButton.textContent = "Sending..."
      setTimeout(() => {
        showMessage("Thank you for your message! We will get back to you soon.", "success")
        contactForm.reset()
        submitButton.disabled = false
        const currentLang = localStorage.getItem("preferredLanguage") || "en"
        submitButton.textContent = currentLang === "ar" ? "إرسال الرسالة" : "Send Message"
      }, 1500)
    })
  }
  function showMessage(text, type) {
    formMessage.textContent = text
    formMessage.className = `form-message ${type}`
    formMessage.style.display = "block"
    setTimeout(() => {
      formMessage.style.display = "none"
    }, 5000)
  }
})
