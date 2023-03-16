const popup = document.querySelector(".popup");
const button = document.querySelector(".random-ayah-button");

const lang = document.querySelector(".lang-select");

button.addEventListener("click", async () => {
  popup.querySelector(".aya-container").textContent =
    lang.value === "en" ? "Loading..." : "جاري التحميل...";
  popup.querySelector(".aya-container").textContent = await getRandomAya(
    lang.value
  );
});

lang.addEventListener("click", async () => {
  button.textContent = lang.value === "ar" ? "عرض آية أخرى" : "Show new aya";
});
