// Listen for spacebar key
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    event.preventDefault(); // prevent page scroll

    // Get all sections
    const sections = document.querySelectorAll(".section");
    let currentSection = null;

    // Find the section currently in view (center of the screen)
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = sec;
      }
    });

    if (currentSection) {
      // Toggle portrait mode
      if (!currentSection.classList.contains("portraits")) {
        // Create portrait gallery if not already created
        if (!currentSection.querySelector(".portrait-gallery")) {
          const portraits = currentSection.dataset.portraits.split(",");
          const gallery = document.createElement("div");
          gallery.classList.add("portrait-gallery");
          portraits.forEach(src => {
            const img = document.createElement("img");
            img.src = src.trim();
            gallery.appendChild(img);
          });
          currentSection.appendChild(gallery);
        }
        currentSection.classList.add("portraits");
      } else {
        // Switch back to original background + text
        currentSection.classList.remove("portraits");
      }
    }
  }
});
