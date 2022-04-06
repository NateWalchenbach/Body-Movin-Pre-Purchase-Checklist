const element = document.getElementById("bm");

let animation = lottie.loadAnimation({
  container: element,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "data.json",
});

animation.goToAndStop(14, true);

container.addEventListener("click", () => {
  if (state === "play") {
    animation.playSegments([14, 27], true);
    state = "pause";
  } else {
    animation.playSegments([0, 14], true);
    state = "play";
  }
});
