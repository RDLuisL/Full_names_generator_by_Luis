/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let name = [
    "sofia",
    "mateo",
    "isabella",
    "tomas",
    "martina",
    "matias",
    "valentina",
    "lucas",
    "catalina",
    "benja",
    "antonia",
    "santiago",
    "florencia",
    "ignacio",
    "emilia",
    "vicente",
    "constanza",
    "joaquin",
    "javiera",
    "maxi",
    "triny",
    "felipe",
    "francisca",
    "nicolas",
    "amelia",
    "bruno",
    "cami",
    "agustin",
    "majose",
    "cristobal"
  ];
  let surname = [
    "gonzalez",
    "rodriguez",
    "fernandez",
    "perez",
    "diaz",
    "munoz",
    "silva",
    "contreras",
    "sanchez",
    "castro",
    "morales",
    "flores",
    "vasquez",
    "alvarez",
    "gomez",
    "torres",
    "espinoza",
    "cortes",
    "bravo",
    "herrera",
    "ortiz",
    "rivas",
    "mendez",
    "araya",
    "pinto",
    "rojas",
    "sepulveda",
    "valenzuela",
    "salazar",
    "jara"
  ];

  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < surname.length; j++) {
      let nombredom = name[i] + surname[j];
      console.log(nombredom);
    }
  }
};
