class Student {
  constructor(name, surname, indexNumber, notesText) {
    this.name = name;
    this.surname = surname;
    this.indexNumber = indexNumber;
    this.notesText = notesText;
    this.areStudiesPassed = false;
  }
  static generateFields(instance) {
    const properties = Object.getOwnPropertyNames(instance);
    properties.forEach((property) => property.toLowerCase());

    const htmlToGenerate = properties.map((prop) => {
      if (prop.toLowerCase().includes("text")) {
        return `<label for="${prop}">${prop}</label><textarea name="${prop}"></textarea>`;
      } else if (prop.toLowerCase().includes("number")) {
        return `<label for="${prop}">${prop}</label><input name="${prop}" type="number"/>`;
      } else if (
        prop.toLowerCase().includes("is") ||
        prop.toLowerCase().includes("are")
      ) {
        return `<label for="${prop}">${prop}</label><input name="${prop}" type="checkbox"/>`;
      } else {
        return `<label for="${prop}">${prop}</label><input name="${prop}" type="text"/>`;
      }
    });
    return htmlToGenerate;
  }
  getname() {
    return this.name;
  }
  getsurname() {
    return this.surname;
  }
  getindexnumber() {
    return this.indexNumber;
  }
  getnotestext() {
    return this.notesText;
  }
  setname(value) {
    this.name = value;
  }
  setsurname(value) {
    this.surname = value;
  }
  setindexnumber(value) {
    this.indexNumber = value;
  }
  setnotestext(value) {
    this.notesText = value;
  }
  setarestudiespassed(value){
    value==="on" ? value = false: value=true;
    this.areStudiesPassed = value;
  }
}

export default Student;
