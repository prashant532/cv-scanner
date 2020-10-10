console.log("cv screener");

//create an array of objects
const array = [
  {
    name: "Neha",
    age: 18,
    languages: "C",
    city: "Ghaziabad",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    name: "Rajat",
    age: 19,
    languages: "Java",
    city: "Bulandsheher",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Prabhat",
    age: 18,
    languages: "C++",
    city: "Ghaziabad",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    name: "Payal",
    age: 19,
    languages: "Llb",
    city: "Sahibabad",
    image: "https://randomuser.me/api/portraits/women/73.jpg",
  },
  {
    name: "Sheetal",
    age: 19,
    languages: "English",
    city: "Bulandsheher",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Navya",
    age: 19,
    languages: "JavaScript",
    city: "Noida",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

//cv iterator
function iterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < profiles.length) {
        return {
          value: profiles[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

//button listener

let next = document.getElementById("next");
next.addEventListener("click", nextCV);

const candidate = iterator(array);
nextCV();

function nextCV() {
  const currentCandidate = candidate.next().value;
  let image = document.getElementById("img");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group list-group-flush">
<li class="list-group-item text-center"><i><b>Name : ${currentCandidate.name}</b></i></li>
<li class="list-group-item text-center"><i><b>Age : ${currentCandidate.age}</b></i></li>
<li class="list-group-item text-center"><i><b>Language : ${currentCandidate.languages}</b></i></li>
<li class="list-group-item text-center"><i><b>City : ${currentCandidate.city}</b></i></li>
</ul>`;
  } else {
    window.location.reload();
  }
}
