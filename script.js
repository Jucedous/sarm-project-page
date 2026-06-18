const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const demoCards = Array.from(document.querySelectorAll(".demo-card"));
const contentVideos = Array.from(document.querySelectorAll(".demo-card video"));
const heroVideo = document.querySelector(".hero-video");

function pauseVideo(video) {
  if (video && !video.paused) {
    video.pause();
  }
}

function applyFilter(selected) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === selected;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  demoCards.forEach((card) => {
    const categories = (card.dataset.category || "").split(/\s+/).filter(Boolean);
    const shouldShow = selected === "all" || categories.includes(selected);
    card.hidden = !shouldShow;

    if (!shouldShow) {
      pauseVideo(card.querySelector("video"));
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

contentVideos.forEach((video) => {
  video.addEventListener("play", () => {
    contentVideos.forEach((candidate) => {
      if (candidate !== video) {
        pauseVideo(candidate);
      }
    });
  });
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    return;
  }

  contentVideos.forEach(pauseVideo);
  pauseVideo(heroVideo);
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (reduceMotion.matches) {
  pauseVideo(heroVideo);
}
