// recupeartion des donnée du carte et du boutton

let btnshow = document.querySelector(".btnunshow");
let carte = document.querySelectorAll(".carte");
// recupeartion des donnée du formullaire

let formname = document.querySelector("#name");
const formid = document.querySelector("#mrform");
let formprix = document.querySelector("#prix");
let formdesc = document.querySelector("#desc");
let formfich = document.querySelector("#file");

// recupeartion des donnée du saidebar
const saidebar_menu=document.querySelector(".sidebar_menu")
const saidebar = document.querySelector(".sidebar")


const message = document.querySelector("#message");

// fonction qui affiche le boutton en savoir plus des article
carte.forEach((cartes) => {
  let btnshow = cartes.querySelector(".btnunshow");
  cartes.addEventListener("mouseover", () => {
    btnshow.classList.add("btnshowas");
  });

  cartes.addEventListener("mouseout", () => {
    btnshow.classList.remove("btnshowas");
  });
});

// fonction qui affiche le menu beugue et le referme
saidebar_menu.addEventListener("click" ,ferme)
function ferme(){
    saidebar.classList.toggle("sidebarferme")
}

// fonction qui verifie si les valeurs entrée dans le formullaire est correct

// input nom
formname.addEventListener(
  "keyup",
  () => {
    let nom = formname.value;
    if (nom.length ==1){
      message.innerHTML = "Entrez un nom pour votre article";
    } else if(nom.length > 50) {
      message.innerHTML = "Nom du produit est trop long";
    } else{
      message.innerHTML =" "
    }
  }
);
// input prix
formprix.addEventListener(
  "keyup",
  () => {
    if (formprix.value.length==0){
      message.innerHTML = "Entrez un prix pour votre article ";
    }else if(formprix.value.length >=6) {
      message.innerHTML = "Prix de votre article est trop long ";
    } else{
      message.innerHTML =" "
    }
  }
);
// input description
desc.addEventListener(
  "keyup",
  () => {
     if (desc.value.length < 5 ){
      message.innerHTML = "Entrez une description a votre article";
    }else if(desc.value.length > 50) {
      message.innerHTML = "votre description est trop longue";
    } else{
      message.innerHTML =" "
    }
  }
);



