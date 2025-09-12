const menuForMobile = document.getElementById("menuForMobile");
const closeBtn = document.getElementById("closeDrawer");
const backdrop = document.querySelector(".backdrop");
const body = document.body;

// Open drawer
menuForMobile.addEventListener("click", () => body.classList.add("nav-open"));
// Close drawer
closeBtn.addEventListener("click", () => body.classList.remove("nav-open"));
backdrop.addEventListener("click", () => body.classList.remove("nav-open"));



// Submenu toggle
document.querySelectorAll(".submenu-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const parent = btn.closest(".submenu");
    parent.classList.toggle("open");
  });
});
