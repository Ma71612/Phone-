document.addEventListener("DOMContentLoaded", () => {
  const lockScreen = document.getElementById("lockScreen");
  const homeScreen = document.getElementById("homeScreen");
  const apps = document.querySelectorAll(".app");
  const openButtons = document.querySelectorAll("[data-app]");
  const backButtons = document.querySelectorAll(".back-button");

  // فتح الشاشة الرئيسية من شاشة القفل
  lockScreen.addEventListener("click", () => {
    lockScreen.classList.remove("active");
    homeScreen.classList.add("active");
  });

  // فتح أي تطبيق
  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const appId = btn.getAttribute("data-app");
      const appElement = document.getElementById(appId);

      if (appElement) {
        homeScreen.classList.remove("active");
        appElement.classList.add("active");
      }
    });
  });

  // رجوع من التطبيق إلى الشاشة الرئيسية
  backButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      apps.forEach(app => app.classList.remove("active"));
      homeScreen.classList.add("active");
    });
  });
});
