document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".product-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards.forEach((card, i) => {
        const match = filter === "all" || card.dataset.category === filter;

        card.classList.remove("fade-in");

        if (match) {
          card.classList.remove("hidden");
          card.offsetHeight;
          card.style.animationDelay = `${i * 0.08}s`;
          card.classList.add("fade-in");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});
