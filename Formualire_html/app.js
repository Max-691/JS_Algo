const submit = document.querySelector('button[type="submit"]');
const text_input = document.getElementById("text");
const pass_input = document.getElementById("pass");
const check_input = document.getElementById("check");
const radio_input = document.querySelectorAll('input[type="radio"]');
const options = document.querySelectorAll("option");
const textarea = document.querySelector("textarea");
let text = "";
let pass = "";
let check = "";
let radio = "";
let list = "";
let comment = "";
submit.addEventListener("click", () => {
  event.preventDefault();
  text = text_input.value; //champ text
  pass = pass_input.value; //champ password

  if (check_input.checked) {
    check = check_input.value; //checkbox
  } else {
    check = false;
  }

  for (let i = 0; i < radio_input.length; i++) {
    if (radio_input[i].checked) {
      radio = radio_input[i].value; //radio
    }
  }
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      list += options[i].value + ", ";
    }
  }

  comment = textarea.value;

  console.log(text, pass, check, radio, list, comment);
});
