document.querySelectorAll(".footer-submenu-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const submenu = btn.nextElementSibling;
    submenu.classList.toggle("open");
    btn.querySelector("img").classList.toggle("rotate");
  });
});
