import React, { FormEvent } from 'react';
import Listform from '../components/Listforms';
import Header from '../components/Header';
export interface CustomElementType {
  id: string;
  name: string | undefined;
  photo: string;
  date: string | undefined;
  frame: string | undefined;
  conf: boolean | undefined;
  radio: string;
}

class Form extends React.Component {
  private arr: Array<CustomElementType> = [];
  name = React.createRef<HTMLInputElement>();
  photo = React.createRef<HTMLInputElement>();
  date = React.createRef<HTMLInputElement>();
  frame = React.createRef<HTMLSelectElement>();
  conf = React.createRef<HTMLInputElement>();
  contactChoice1 = React.createRef<HTMLInputElement>();
  contactChoice2 = React.createRef<HTMLInputElement>();
  elem = {
    arr: this.arr,
    mess: '',
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

  showMessage() {
    this.elem.mess = 'CARD CREATED';
    setTimeout(() => {
      this.elem.mess = '';
      this.setState({
        mess: '',
      });
    }, 3000);
  }

  onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const name = this.name.current?.value;
    const date = this.date.current?.value;
    const frame = this.frame.current?.value;
    const conf = this.conf.current?.checked;

    const photoFile =
      this.photo.current?.files?.length !== 0 && this.photo.current?.files
        ? URL.createObjectURL(this.photo.current.files[0])
        : '';
    const choise = this.contactChoice1.current?.checked
      ? this.contactChoice1.current?.value
      : this.contactChoice2.current?.checked
      ? this.contactChoice2.current?.value
      : '';
    const data = {
      id: String(this.arr.length),
      name: name,
      photo: photoFile,
      date: date,
      frame: frame,
      conf: conf,
      radio: choise,
    };
    if (this.validate(data)) {
      this.showMessage();
      this.arr.push(data);
      this.setState({
        arr: this.arr,
      });
      this.name.current ? (this.name.current.value = '') : '';
      this.frame.current ? (this.frame.current.value = '') : '';
      this.date.current ? (this.date.current.value = '') : '';
      this.conf.current ? (this.conf.current.checked = false) : false;
      this.contactChoice1.current ? (this.contactChoice1.current.checked = false) : false;
      this.contactChoice2.current ? (this.contactChoice2.current.checked = false) : false;
      this.photo.current ? (this.photo.current.value = '') : '';
    }
  };

  validate(data: CustomElementType) {
    const input = data;
    const name = data.name ?? '';
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
    if (name === '' || name.charAt(0).toUpperCase() !== name.charAt(0)) {
      isValid = false;
      errors.name = 'Must start with a capital letter and not change two letters.';
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
        <div className="message">{this.elem.mess}</div>
        <div className="all-forms">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="field">
              <label htmlFor="name">Photo</label>
              <input id="photo" type="file" ref={this.photo} />
              <div className="message-errr">{this.elem.err.photo}</div>
            </div>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" ref={this.name} />
              <div className="message-errr">{this.elem.err.name}</div>
            </div>
            <div className="field">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" ref={this.date} />
              <div className="message-errr">{this.elem.err.date}</div>
            </div>
            <div className="field">
              <label htmlFor="cars">framework</label>
              <select ref={this.frame} id="cars" defaultValue={'DEFAULT'}>
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
                <input
                  type="radio"
                  id="contactChoice1"
                  ref={this.contactChoice1}
                  value="Javascript"
                />
                <label htmlFor="contactChoice1">Javascript</label>
                <input
                  type="radio"
                  id="contactChoice2"
                  ref={this.contactChoice1}
                  value="Typescript"
                />
                <label htmlFor="contactChoice2">Typescript</label>
                <div className="message-errr">{this.elem.err.radio}</div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="conf">confirm</label>
              <input type="checkbox" id="conf" ref={this.conf} />
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
