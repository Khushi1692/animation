
  window.addEventListener("load", () => {
    document.querySelector(".navbar").classList.add("active");
    document.querySelector(".slide-from-left")?.classList.add("active");
    document.querySelector(".slide-from-right")?.classList.add("active");

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");

    menuToggle?.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      overlay.classList.add("active");
    });

    closeMenu?.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
    });

    overlay?.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
