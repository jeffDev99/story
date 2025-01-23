//story 
const stories = [
  [
    "./img/In-Story.Web 1.png",
    "./img/slider (2).webp",
    "./img/In-Story.Web 1.png",
  ],
  [
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
  ],
  [
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
  ],
  [
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
  ],
  [
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
  ],
  [
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
  ],
  [
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
  ],
  [
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
    "./img/In-Story.Web 1.png",
  ],
  // تعداد 8 دسته بندی و هر دسته بندی 3 عکس اشاره به کلاس story
];

let currentStoryIndex = 0;
let currentImageIndex = 0;
let closePopupBtn = document.querySelector(".close-popup-btn");

function startStory(storyIndex) {
  currentStoryIndex = storyIndex;
  currentImageIndex = 0;

  showPopupImage(stories[currentStoryIndex][currentImageIndex]);

  const popup = document.getElementById("story-popup");
  popup.style.display = "flex";
}

function showPopupImage(src) {
  const popupImage = document.getElementById("popup-image");
  popupImage.src = src;
  popupImage.onload = function () {
    animateProgressBar();
  };
}

let intervalId; // ایجاد متغیر جدید

function animateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = "0%";

  let width = 0;
  const intervalTime = 30;
  const totalDuration = 3000;
  const increment = (intervalTime / totalDuration) * 100;

  intervalId = setInterval(function () {
    // ذخیره مقدار برگشتی در متغیر intervalId
    if (width >= 100) {
      clearInterval(intervalId); // در اینجا نیز متوقف می‌شود
      showNextImage();
    } else {
      width += increment;
      progressBar.style.width = width + "%";
    }
  }, intervalTime);
}

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex < stories[currentStoryIndex].length) {
    showPopupImage(stories[currentStoryIndex][currentImageIndex]);
  } else {
    closePopup();
  }
}
function closePopup() {
  const progressBar = document.getElementById("progress-bar");
  const popup = document.getElementById("story-popup");
  popup.style.display = "none";
  currentStoryIndex = 0;
  currentImageIndex = 0;

  clearInterval(intervalId); // این خط باعث متوقف شدن setInterval می‌شود
}

document.addEventListener("click", function (e) {
  if (e.target.id === "story-popup") {
    closePopup();
  }
});

closePopupBtn.addEventListener("click", (e) => {
  closePopup();
});
