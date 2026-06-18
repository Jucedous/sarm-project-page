const filterButtons = document.querySelectorAll("[data-filter]");
const demoCards = document.querySelectorAll(".demo-card");

function pauseHiddenVideos() {
  demoCards.forEach((card) => {
    if (!card.hidden) {
      return;
    }
    const video = card.querySelector("video");
    if (video && !video.paused) {
      video.pause();
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((candidate) => {
      candidate.classList.toggle("active", candidate === button);
    });

    demoCards.forEach((card) => {
      const categories = card.dataset.category || "";
      card.hidden = selected !== "all" && !categories.split(" ").includes(selected);
    });

    pauseHiddenVideos();
  });
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    return;
  }
  document.querySelectorAll("video").forEach((video) => {
    if (!video.paused && !video.classList.contains("hero-video")) {
      video.pause();
    }
  });
});
