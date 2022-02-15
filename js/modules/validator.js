class Validation {
  constructor(elements) {
    this.elements = elements;
    this.status = false;
    this.REGULAR_EXPRESSIONS = {
      no_empty: /^[a-zA-Zа-яА-Я?!@#$%^&*??0-9?\s+]{10,40}$/,
      login: /^[a-zA-Zа-яА-Я?!@#$%^&*??0-9?\s+]{2,20}$/,
      phone: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
      email:
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      name: /^[a-zA-Zа-яА-Я\s+]{2,40}$/,
      password: /^(?=.*\d)\w{3,20}$/m,
    };
  }
  getValidStatus() {
    console.log(this.elements);
    for (let key in this.elements) {
      if (!this.elements[key].check) {
        return { elements: this.elements, check: false };
      }
    }
    return { elements: this.elements, check: true };
  }
  getResult(type, value) {
    return this.REGULAR_EXPRESSIONS[type].test(value);
  }
  handleValidation(element, value) {
    const result = this.getResult(element.type, value);
    element.check = result;
    const target = element.target ? element.target : element.domElement;
    if (!result) {
      target.classList.remove(element.classDone);
      target.classList.add(element.classError);
    }
    if (result) {
      target.classList.remove(element.classError);
      target.classList.add(element.classDone);
    }
  }
  setValidation(flag) {
    this.elements.forEach(element => {
      element.events.forEach(event => {
        if (!flag) {
          element.domElement.removeEventListener(event, e =>
            this.handleValidation(element, e.target.value)
          );
        } else {
          element.domElement.addEventListener(event, e =>
            this.handleValidation(element, e.target.value)
          );
        }
      });
    });
  }

  on() {
    this.elements = this.elements.map(el => {
      return { ...el };
    });
    this.setValidation(true);
  }
  off() {
    this.setValidation(false);
  }
}

export default Validation;
