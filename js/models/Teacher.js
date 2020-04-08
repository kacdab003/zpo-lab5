class Teacher {
  constructor(name, surname, subject) {
    this.name = name;
    this.surname = surname;
    this.subject = subject;
  }
  getname() {
    return this.name;
  }
  getsurname() {
    return this.surname;
  }
  getsubject() {
    return this.subject;
  }
  setname(value) {
    this.name = value;
  }
  setsurname(value) {
    this.surname = value;
  }
  setsubject(value) {
    this.subject = value;
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
}
export default Teacher;
