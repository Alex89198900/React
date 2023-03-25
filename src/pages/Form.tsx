import React, { FormEvent } from 'react';
import Listform from '../components/Listforms';
import Header from '../components/Header';
interface CustomElements extends HTMLFormControlsCollection {
  photo: HTMLInputElement;
  name: HTMLInputElement;
  date: HTMLInputElement;
  frame: HTMLSelectElement;
  conf: HTMLInputElement;
  contactChoice1: HTMLInputElement;
  contactChoice2: HTMLInputElement;
}
export interface CustomElementType {
  id: string;
  name: string;
  photo: string;
  date: string;
  frame: string;
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
      frame: '',
    },
  };

  onSubmit = (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const photoFile =
      target.photo.files?.length !== 0 && target.photo.files
        ? URL.createObjectURL(target.photo.files[0])
        : '';
    const choise = target.contactChoice1.checked
      ? target.contactChoice1.value
      : target.contactChoice2.checked
      ? target.contactChoice2.value
      : '';
    const data = {
      id: String(this.arr.length),
      name: target.name.value,
      photo: photoFile,
      date: target.date.value,
      frame: target.frame.value,
      conf: target.conf.checked,
      radio: choise,
    };
    console.log(choise);
    if (this.validate(data)) {
      this.arr.push(data);
      this.setState({
        arr: this.arr,
      });
      target.name.value = '';
      target.photo.files = null;
      target.conf.checked = false;
      target.date.value = '';
      target.frame.value = '';
      target.contactChoice1.checked = false;
      target.contactChoice2.checked = false;
      alert('CARD CRETED');
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
      frame: '',
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
      errors.radio = 'Please choise language.';
    }
    if (input.frame === 'DEFAULT') {
      isValid = false;
      errors.frame = 'Please choise framework.';
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
        <Header title="Form" />
        <div className="all-forms">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="field">
              <label htmlFor="name">Photo</label>
              <input id="photo" type="file" />
              <div className="message-errr">{this.elem.err.photo}</div>
            </div>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" />
              <div className="message-errr">{this.elem.err.name}</div>
            </div>
            <div className="field">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" />
              <div className="message-errr">{this.elem.err.date}</div>
            </div>
            <div className="field">
              <label htmlFor="cars">framework</label>
              <select name="frame" id="cars" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" hidden></option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
                <option value="Svelte">Svelte</option>
              </select>
              <div className="message-errr">{this.elem.err.frame}</div>
            </div>
            <div className="field">
              <div>
                <input type="radio" id="contactChoice1" name="contact" value="Javascript" />
                <label htmlFor="contactChoice1">Javascript</label>
                <input type="radio" id="contactChoice2" name="contact" value="Typescript" />
                <label htmlFor="contactChoice2">Typescript</label>
                <div className="message-errr">{this.elem.err.radio}</div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="conf">confirm</label>
              <input type="checkbox" id="conf" name="conf" />
              <div className="message-errr">{this.elem.err.conf}</div>
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="list-forms">
          <Listform elem={this.elem} />
        </div>
      </>
    );
  }
}

export default Form;
