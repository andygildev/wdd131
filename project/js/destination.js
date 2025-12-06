
const destinations = [
  { name: "Lagos, Nigeria", desc: "Bustling city with beaches and culture", img: "images/nigeria.avif", price: 900 },
  {name: "Paris, France", desc: "Romantic city with Eiffel Tower", img: "images/paris.webp", price: 1200},
  {name: "Tokyo, Japan", desc: "Vibrant city with culture and sushi", img: "images/tokyo.avif", price: 1500},
  {name: "New York, USA", desc: "The city that never sleeps", img: "images/new-york.avif", price: 1000},
  {name: "Sydney, Australia", desc: "Beautiful beaches and Opera House", img: "images/sydney.avif", price: 1800},
  { name: "Rome, Italy", desc: "Ancient city with rich history and art", img: "images/rome.avif", price: 1300 }
];


const destinationContainer = document.getElementById("destinationContainer");
const bookingList = document.getElementById("bookingList");


let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

if(destinationContainer) {
  renderDestinations();
}

function renderDestinations() {
  destinationContainer.innerHTML = "";
  destinations.forEach((dest, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${dest.img}" alt="${dest.name}" loading="lazy">
      <h3>${dest.name}</h3>
      <p>${dest.desc}</p>
      <p>Price: $${dest.price}</p>
      <button data-index="${index}">Book Now</button>
    `;
    destinationContainer.appendChild(card);
  });

  document.querySelectorAll(".card button").forEach(btn => {
    btn.addEventListener("click", bookDestination);
  });
}

function bookDestination(e) {
  const index = e.target.dataset.index;
  const selected = destinations[index];

 
  if(bookings.find(b => b.name === selected.name)) {
    alert("You already booked this destination!");
    return;
  }

  bookings.push(selected);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert(`${selected.name} booked successfully!`);
  renderBookings();
}


if(bookingList) {
  renderBookings();
}

function renderBookings() {
  if(!bookingList) return;
  bookingList.innerHTML = "";
  bookings.forEach((b, i) => {
    const li = document.createElement("li");
    li.textContent = `${b.name} - $${b.price}`;
    bookingList.appendChild(li);
  });
}
