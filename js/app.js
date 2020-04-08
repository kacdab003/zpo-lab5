import "../scss/style.scss";
import Student from "./models/Student";
import Teacher from "./models/Teacher";

const injectValuesToConsole = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let html = "";
  for (let i in keys) {
    html += `<p class="property">${keys[i]}</p><p class="value">${values[i]}</p>`;
  }
  document.querySelector(".console").innerHTML = html;

  // document.querySelector()
};

const classes = {
  Student,
  Teacher,
};
let objectSet = false;
let currentObject = null;
const classNameInput = document.querySelector('input[name="class-name"]');
const DOMElements = {
  fields: document.querySelector(".fields"),
  saveChangesBtn: document.querySelector(".save-changes"),
  createObjectBtn: document.querySelector(".create-object"),
  classNameInput: document.querySelector('input[name="class-name"]'),
};
DOMElements.createObjectBtn.addEventListener("click", (e) => {
  const className = classNameInput.value;
  if (className || (currentObject && !objectSet)) {
    const instance = new classes[className]();
    currentObject = instance;
    const html = classes[className].generateFields(instance).join("");
    DOMElements.fields.innerHTML = html;
    injectValuesToConsole(currentObject);
    objectSet = true;
  } else {
    alert("Invalid state of an app");
  }
});
DOMElements.saveChangesBtn.addEventListener("click", () => {
  if (currentObject) {
    const props = Object.keys(currentObject);

    props.forEach((prop) => {
      if (currentObject["set" + prop.toLowerCase()]) {
        currentObject["set" + prop.toLowerCase()](
          document.querySelector(`[name='${prop}']`).checked ||
            document.querySelector(`[name='${prop}']`)
              .value ||
            document.querySelector(`[name='${prop}']`).textContent
        );
      } else {
        console.log("Function not found");
      }
    });
    injectValuesToConsole(currentObject);
  } else {
    alert("No object created");
  }
});
