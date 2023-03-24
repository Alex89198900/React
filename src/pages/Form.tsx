import React, { FormEvent } from 'react';
import ListFormRender from './Listformrender';
interface CustomElements extends HTMLFormControlsCollection {
  photo: HTMLInputElement;
  name: HTMLInputElement;
  date: HTMLInputElement;
  cars: HTMLSelectElement;
  conf: HTMLInputElement;
  contactChoice1: HTMLInputElement;
  contactChoice2: HTMLInputElement;
}
export interface CustomElementType {
  id: string;
  name: string;
  photo: string;
  date: string;
  cars: string;
  conf: boolean;
  radio: string;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

class Form extends React.Component {
  private arr: Array<CustomElementType> = [];
  elem = {
    arr: this.arr,
    err: {
      id: '',
      name: '',
      photo: '',
      date: '',
      conf: '',
      radio: '',
    },
  };

  onSubmit = (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const photoFile =
      target.photo.files?.length !== 0 && target.photo.files
        ? URL.createObjectURL(target.photo.files[0])
        : '';
    let choise = null;
    if (target.contactChoice1) {
      choise = target.contactChoice1.value;
    }
    if (target.contactChoice2) {
      choise = target.contactChoice2.value;
    } else {
      choise = '';
    }
    const data = {
      id: String(this.arr.length),
      name: target.name.value,
      photo: photoFile,
      date: target.date.value,
      cars: target.cars.value,
      conf: target.conf.checked,
      radio: choise,
    };
    console.log(target.contactChoice1.value);
    if (this.validate(data)) {
      console.log('suchess');
      this.arr.push(data);
      this.setState({
        arr: this.arr,
      });
      target.name.value = '';
      target.photo.files = null;
      target.conf.checked = false;
      target.date.value = '';
    }
  };
  validate(data: CustomElementType) {
    const input = data;

    const errors = {
      id: '',
      name: '',
      photo: '',
      date: '',
      conf: '',
      radio: '',
    };

    let isValid = true;
    if (input.photo === '') {
      isValid = false;
      errors.photo = 'Please choise your photo.';
    }
    if (input.name === '' || input.name.charAt(0).toUpperCase() !== input.name.charAt(0)) {
      isValid = false;
      errors.name = 'Please enter your name.';
    }
    if (input.date === '') {
      isValid = false;
      errors.date = 'Please enter your date.';
    }
    if (input.conf === false) {
      isValid = false;
      errors.conf = 'Please confirm.';
    }
    if (input.radio === '') {
      isValid = false;
      errors.radio = 'Please choise.';
    }
    this.elem.err = errors;
    this.setState({
      err: errors,
    });
    return isValid;
  }

  render() {
    return (
      <>
        <div className="about">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="photo" type="file" />
              <div>{this.elem.err.photo}</div>
            </div>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" />
              <div>{this.elem.err.name}</div>
            </div>
            <div className="field">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" />
              <div>{this.elem.err.date}</div>
            </div>
            <div className="field">
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="field">
              <div>
                <input type="radio" id="contactChoice1" name="contact" value="email" />
                <label htmlFor="contactChoice1">Email</label>
                <input type="radio" id="contactChoice1" name="contact" value="phone" />
                <label htmlFor="contactChoice2">Phone</label>
                <div>{this.elem.err.radio}</div>
              </div>
            </div>

            <div className="field">
              <input type="checkbox" id="conf" name="conf" />
              <div>{this.elem.err.conf}</div>
              <label htmlFor="conf">confirm</label>
            </div>
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div className="lalalalall">
          <ListFormRender elem={this.elem} />
        </div>
      </>
    );
  }
}

export default Form;
