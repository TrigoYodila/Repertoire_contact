//Gestion du bouton upload
/*const imagech = document.querySelector(".img-choice");
const defaultB = document.querySelector("#default-btn");
const input = document.querySelector("input");
const customB = document.querySelector("#custom-btn");
const imag = document.querySelector(".img-choice img");

function defaultBtnActive() {
  defaultB.click();
}
//
defaultB.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {

    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imag.src = result;
    };
    reader.readAsDataURL(file);
  }
});

/*const image = document.querySelector("#img-c");

const previewPicture = function(e){
  const [picture] = e.files

  if(picture)
}*/

const defaultB = document.querySelector("#default-btn");
//const customB = document.querySelector("#custom-btn");

//fonction pour basculer au button default
function defaultBtnActive() {
  defaultB.click();
}

//fonction d'affichage d'image dans le formulaire
const image = document.querySelector("#image");

const previewPicture = function (e) {
  const [picture] = e.files;

  let types = ["image/jpg", "image/jpeg", "image/png"];

  if (types.includes(picture.type)) {
    // L'objet FileReader
    const reader = new FileReader();

    // L'événement déclenché lorsque la lecture est complète
    reader.onload = function (e) {
      // On change l'URL de l'image (base64)
      image.src = e.target.result;
    };
    // On lit le fichier "picture" uploadé
    reader.readAsDataURL(picture);
  }
};
