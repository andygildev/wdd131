document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


const menubutton = document.querySelector("#menuButton");
const navlinks = document.querySelector(".navlinks");

menubutton.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  menubutton.textContent = navlinks.classList.contains("open") ? "✖" : "☰";
});



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 41010,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },

  {
  templeName: "St. Louis Missouri Temple",
  location: "St. Louis, Missouri, United States",
  dedicated: "1997, June, 1",
  area: 58749,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/_temp/050-St.-Louis-Missouri-Temple.jpg"
  },

  {
  templeName: "Accra Ghana",
  location: "Accra, Ghana",
  dedicated: "2004, January, 11",
  area: 17500,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  }

  
];



const container = document.querySelector(".temple-contents");

function createTempleCard(temple) {
  const card = document.createElement("figure");
  card.classList.add("temple-card");

  card.innerHTML = `
    <h2>${temple.templeName}</h2>

    <div class="temple-meta">
      <p><span class="label">Location:</span> <span class="value">${temple.location}</span></p>
      <p><span class="label">Dedicated:</span> <span class="value">${temple.dedicated}</span></p>
      <p><span class="label">Size:</span> <span class="value">${temple.area} sq ft</span></p>
    </div>

    <img src="${temple.imageUrl}" alt="${temple.templeName} Temple">
  `;

  return card;
}


function displayTemples(list) {
  container.innerHTML = "";  
  list.forEach(temple => container.appendChild(createTempleCard(temple)));
}


displayTemples(temples);


document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
  const oldTemples = temples.filter(t => parseInt(t.dedicated) < 1900);
  displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", () => {
  const newTemples = temples.filter(t => parseInt(t.dedicated) > 2000);
  displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", () => {
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", () => {
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples);
});
