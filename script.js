const InputElem = document.querySelector(".light");
const Container = document.querySelector(".container");

InputElem.addEventListener("change", function (event) {
  console.log(event.target.value);
  Container.style.filter = 'brightness('+ event.target.value +'%)';
  console.log(Container)
});
