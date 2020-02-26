document.addEventListener("DOMContentLoaded", function() {
  let selectedBackground;
  const backgroundSelect = document.querySelector(".bg-select");
  const backgroundImageContainer = document.querySelector(".background-image");

  backgroundSelect.addEventListener("change", function(event) {
    selectedBackground = event.target.value;
    if (
      backgroundImageContainer.classList.contains("default-background-image")
    ) {
      backgroundImageContainer.classList.remove("default-background-image");
    }
    backgroundImageContainer.style.backgroundImage = `url("./assets/${selectedBackground}.jpg")`;
  });
});
