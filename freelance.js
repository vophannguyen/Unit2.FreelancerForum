"use strick";

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose",
];
const occupations = ["gardener", "programmer", "teacher", "driver", "Writer"];
// const freelancers = [
//   { name: "Dr. Slice", price: 25, occupation: "gardener" },
//   { name: "Dr. Pressure", price: 51, occupation: "programmer" },
//   { name: "Prof. Possibility", price: 43, occupation: "teacher" },
//   { name: "Prof. Prism", price: 81, occupation: "teacher" },
//   { name: "Dr. Impulse", price: 43, occupation: "teacher" },
//   { name: "Prof. Spark", price: 76, occupation: "programmer" },
//   { name: "Dr. Wire", price: 47, occupation: "teacher" },
//   { name: "Prof. Goose", price: 72, occupation: "driver" },
// ];
const freelancers = [{ name: "Alice", occupation: "Writer", price: 30 }];
///get variabe from HTML
const maxPeople = 20;
const averagePrice = document.querySelector(".average__price");
// const table = document.querySelector(".table__freelancer");
// const title = document.querySelector(".title__freelancer");
//cal Average
const calAveragePrice = () => {
  let total = 0;
  const allPrice = document.querySelectorAll(".row__price");
  allPrice.forEach((price) => {
    console.log(price.textContent);
    total += Number(price.textContent);
  });
  averagePrice.textContent = (total / allPrice.length).toFixed(2);
};
// render single person to webpage
const render = (name, occupation, price) => {
  const row = document.querySelectorAll(".row");
  const html = `<tr class="row">
  <td class="row__name">${name}</td>
  <td class="row__occupation">${occupation}</td>
  <td>$<span class="row__price">${price}</span></td>
  </tr>`;
  //get lass row to add it under
  row[row.length - 1].insertAdjacentHTML("afterend", html);
};
const addPeople = () => {
  // random Name
  const name = names[Math.floor(Math.random() * names.length)];
  // random occupation
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * (100 - 20 + 1) + 20);
  //add to freelancer array
  freelancers.push({ name, occupation, price });
  // call funtion cal average
  calAveragePrice();
  // stop interval maxpeople (20)
  if (freelancers.length === maxPeople) {
    clearInterval(addPeopleIntervalId);
  } else {
    render(name, occupation, price);
  }
};
const addPeopleIntervalId = setInterval(addPeople, 1000);
