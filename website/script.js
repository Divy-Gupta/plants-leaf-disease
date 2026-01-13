document.addEventListener("DOMContentLoaded", () => {
  const tryBtn = document.getElementById("tryBtn");
  const hero = document.getElementById("hero");
  const detection = document.getElementById("detection");

  tryBtn.addEventListener("click", () => {
    hero.style.opacity = "0";

    setTimeout(() => {
      hero.style.display = "none";
      detection.style.display = "block";
      detection.scrollIntoView({ behavior: "smooth" });
    }, 600);
  });
});
