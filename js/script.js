const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const finalCount = parseInt(counter.dataset.count, 10); // Convert data-count to a number
  let currentCount = 0; // Start from 0
  const increment = Math.ceil(finalCount / 100); // Adjust increment for smoother animation

  const counting = setInterval(() => {
    currentCount += increment; // Increase the current count by the increment
    if (currentCount >= finalCount) {
      currentCount = finalCount; // Ensure it doesn't exceed the final count
      clearInterval(counting); // Stop the interval when done
    }
    counter.innerText = `${currentCount}+`; // Add the '+' symbol
  }, 20); // Adjust the interval duration for speed
});


const myCarousel = document.getElementById('myCarousel')
myCarousel.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img .circle").style.backgroundColor = activeItem.getAttribute("data-color");
})