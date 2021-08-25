const sizePicker = document.getElementById("size");
const buyButton = document.querySelector(".snipcart-add-item");

sizePicker.addEventListener("change", (ev) => {
  const val = ev.target.value;

  buyButton.dataset["itemCustom1Value"] = val;
});