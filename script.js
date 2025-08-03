// Back to top button & counters & testimonial slider & navbar active link highlight
document.addEventListener("DOMContentLoaded", () => {
  // Back to top button
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Counter Animation for impact statistics
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // Testimonial Carousel
  let testimonialIndex = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  if (testimonials.length > 1) {
    setInterval(() => {
      testimonials[testimonialIndex].style.display = "none";
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      testimonials[testimonialIndex].style.display = "flex";
    }, 6000);
  }
});
