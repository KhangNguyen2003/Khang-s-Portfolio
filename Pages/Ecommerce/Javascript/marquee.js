var marquee = document.getElementById('marqueeElement');

var messages = ["Free Shipping & 20% Discount for the your first purchase!", "Join the Community Survey for chance to obtain gift cards and other free gift away!"];

var currentIndex = 0;

function updateMarquee() {
  marquee.textContent = messages[currentIndex];

  currentIndex++;

  if (currentIndex >= messages.length) {
    currentIndex = 0;
  }
}

updateMarquee();

setInterval(updateMarquee, 20000);