import "./styles.css";

const revealItems = document.querySelectorAll("[data-reveal]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -80px 0px", threshold: 0.12 },
);

revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll("[data-faq-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const current = trigger.closest("[data-faq-item]");
    const wasOpen = current?.classList.contains("is-open");

    document.querySelectorAll("[data-faq-item]").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector("[data-faq-trigger]")?.setAttribute("aria-expanded", "false");
    });

    if (current && !wasOpen) {
      current.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Intl.NumberFormat("fa-IR", { useGrouping: false }).format(new Date().getFullYear());
}
