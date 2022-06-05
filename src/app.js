/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let symbol = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let draw = document.querySelector("#draw");
  let sort = document.querySelector("#sort");
  let input;
  var orden = [];

  let numero = number;
  let simbolo = symbol;

  //FUNCION Crear//
  draw.addEventListener("click", Crear);

  function Crear() {
    input = document.getElementById("input").value;
    document.querySelector("#generadas").innerHTML = "";

    //GENERA LAS CARTAS//
    for (let i = 0; i < input; i++) {
      numero = number[Math.floor(Math.random() * number.length)];
      simbolo = symbol[Math.floor(Math.random() * symbol.length)];

      //Carta//
      let card = document.createElement("div");
      card.classList.add("card");
      document.querySelector("#generadas").appendChild(card);

      //pintaTop//
      let pintaTop = document.createElement("div");
      pintaTop.id = "pintaTop";
      pintaTop.innerHTML = simbolo;
      card.appendChild(pintaTop);

      //pintaBottom//
      let pintaBottom = document.createElement("div");
      pintaBottom.id = "pintaBottom";
      pintaBottom.innerHTML = simbolo;
      card.appendChild(pintaBottom);

      if (simbolo === "&#9829" || simbolo === "&#9830") {
        pintaBottom.style.color = "red";
        pintaTop.style.color = "red";
      }

      //Numero//
      let numberCard = document.createElement("div");
      numberCard.classList.add("numberCard");
      numberCard.innerHTML = numLetra(numero);
      card.appendChild(numberCard);

      let cards = {
        numb: numero,
        simb: simbolo
      };

      orden.push(cards);
    }
  }

  function numLetra(numero) {
    switch (numero) {
      case 1:
        return "A";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return numero;
    }
  }
  //FUNCION Ordenar//

  sort.addEventListener("click", function() {
    let wall = orden.length - 1;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (orden[index].numb > orden[index + 1].numb) {
          let aux = orden[index];
          orden[index] = orden[index + 1];
          orden[index + 1] = aux;
          final();
        }
        index++;
      }
      wall--;
    }
  });

  function final() {
    let card = document.createElement("div");
    card.classList.add();
    document.querySelector("#ordenadas").appendChild(card);

    for (let i = 0; i < orden.length; i++) {
      //Carta//
      let card = document.createElement("div");
      card.classList.add("card");
      document.querySelector("#ordenadas").appendChild(card);

      //pintaTop//
      let pintaTop = document.createElement("div");
      pintaTop.classList.add("rojas");
      pintaTop.id = "pintaTop";
      pintaTop.innerHTML = orden[i].simb;
      card.appendChild(pintaTop);

      //pintaBottom//
      let pintaBottom = document.createElement("div");
      pintaBottom.classList.add("rojas");
      pintaBottom.id = "pintaBottom";
      pintaBottom.innerHTML = orden[i].simb;
      card.appendChild(pintaBottom);

      if (orden[i].simb === "&#9829" || orden[i].simb === "&#9830") {
        pintaTop.style.color = "red";
        pintaBottom.style.color = "red";
      }

      //Numero//
      let numberCard = document.createElement("div");
      numberCard.classList.add("numberCard");
      numberCard.innerHTML = numLetra(orden[i].numb);
      card.appendChild(numberCard);
    }
  }
};
