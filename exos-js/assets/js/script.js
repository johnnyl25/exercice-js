const paragraphe = document.getElementById("paragraphe");
paragraphe.style.fontSize = "16px";
let parsed = parseInt(paragraphe.style.fontSize, 10);

function maFonction() {
  parsed = parseInt(paragraphe.style.fontSize, 10);
  // si fontsize est égal à 50, alors fais ça,... sinon, passe à 20px
  if (parsed < 25) {
    // code à effectuer
    // paragraphe.style.fontSize = "50px";
    parsed++;
    paragraphe.style.fontSize = parsed + "px";
    console.log(parsed);
    console.log("oui");
  } else {
    // code
    paragraphe.style.fontSize = "20px";
    console.log("non");
  }
}

paragraphe.addEventListener("click", function() {
  maFonction();
});

// let person = {
//   age: 10,
//   taille: "1,60m",
//   manger: function(aliment) {
//     console.log("je veux manger des " + aliment);
//   }
// };

// console.log(person.manger("pommes"));

function bougeImage(event) {
  // e = 69, a = 65
  // console.log(event.keyCode);
  if (event.keyCode === 69) {
    console.log("keydown");
    document.getElementById("image2").style.display = "none";
    document.getElementById("image1").style.display = "block";
  } else if (event.keyCode === 65) {
    console.log("perdu");
    document.getElementById("image2").style.display = "block";
    document.getElementById("image1").style.display = "none";
  } else {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
  }

  // switch (event.keyCode) {
  //   case 65:
  //     document.getElementById("image2").style.display = "none";
  //     document.getElementById("image1").style.display = "block";
  //     break;

  //   case 69:
  //     document.getElementById("image2").style.display = "block";
  //     document.getElementById("image1").style.display = "none";
  //     break;

  //   default:
  //     document.getElementById("image1").style.display = "none";
  //     document.getElementById("image2").style.display = "none";
  //     break;
  // }

  // Crée un carré jaune, qui se déplace dans un cadre avec les flèches du clavier: conseil : cadre positionné en relative, et le carré en absolute.
}
window.addEventListener("keydown", function(e) {
  bougeImage(e);
});

const cube = document.getElementById("cube");
const cube_style = cube.style;
let cube_top = window.getComputedStyle(cube).getPropertyValue("top");
let cube_left = window.getComputedStyle(cube).getPropertyValue("left");

function bougeCube(event) {
  cube_top = window.getComputedStyle(cube).getPropertyValue("top");
  cube_left = window.getComputedStyle(cube).getPropertyValue("left");

  event.preventDefault();
  switch (event.keyCode) {
    // on va à gauche
    case 37:
      console.log(parseInt(cube_left, 10));
      if (parseInt(cube_left, 10) > 0) {
        cube_style.left = parseInt(cube_left, 10) -  "px";
      }
      break;
    // on va en haut
    case 38:
      console.log(parseInt(cube_top, 10));
      if (parseInt(cube_top, 10) > 0) {
        cube_style.top = parseInt(cube_top, 10) -  "px";
      }
      break;
    //on va à droite
    case 39:
      if (parseInt(cube_left, 10) < 850) {
        cube_style.left = parseInt(cube_left, 10) +  "px";
      }
      break;
    // on va en bas
    case 40:
      if (parseInt(cube_top, 10) < 550) {
        cube_style.top = parseInt(cube_top, 10) +  "px";
      }
      break;

    default:
      cube_style.left = "0px";
      cube_style.top = "0px";
      cube_style.right = "0px";
      cube_style.bottom = "0px";
      break;
  }
}

window.addEventListener("keydown", function(e) {
  bougeCube(e);
});


// Positionner 5 carrés aléatoirement à l'intérieur du cadre