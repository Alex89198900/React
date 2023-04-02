import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type FormInputs = {
  name?: string;
  date?: string;
  photo?: string;
  frame?: string;
  contactChoice?: string;
  conf?: boolean;
};
type ComponentPropsd = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export function MyInputFile(props: ComponentPropsd) {
  return (
    <div className="field">
      <label htmlFor="photo">Photo</label>
      <input
        id="photo"
        type="file"
        {...props.register('photo', {
          required: 'Choise photo',
        })}
        accept="image/*"
      />
      <div className="message-errr">{props.errors.photo?.message}</div>
    </div>
  );
}
export function MyInputText(props: ComponentPropsd) {
  return (
    <div className="field">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        {...props.register('name', {
          required: 'Please Enter Name',
          pattern: {
            value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
            message: 'Please Enter A Valid Name!',
          },
        })}
        id="name"
      />
      <div className="message-errr">{props.errors.name?.message}</div>
    </div>
  );
}
export function MyInputDate(props: ComponentPropsd) {
  return (
    <div className="field">
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        {...props.register('date', {
          required: 'Please Choise Date',
        })}
      />
      <div className="message-errr">{props.errors.date?.message}</div>
    </div>
  );
}
export function MySelect(props: ComponentPropsd) {
  return (
    <div className="field">
      <label htmlFor="cars">framework</label>
      <select {...props.register('frame', { required: 'Please Choise framework' })} id="cars">
        <option value="" hidden></option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
        <option value="Vue">Vue</option>
        <option value="Svelte">Svelte</option>
      </select>
      <div className="message-errr">{props.errors.frame?.message}</div>
    </div>
  );
}
export function MyInputRadio(props: ComponentPropsd) {
  return (
    <div className="field">
      <div>
        <input
          type="radio"
          id="contactChoice1"
          {...props.register('contactChoice', { required: 'Please Choise framework' })}
          value="Javascript"
        />
        <label htmlFor="contactChoice1">Javascript</label>
        <input
          type="radio"
          id="contactChoice2"
          {...props.register('contactChoice')}
          value="Typescript"
        />
        <label htmlFor="contactChoice2">Typescript</label>
        <div className="message-errr">{props.errors.contactChoice?.message}</div>
      </div>
    </div>
  );
}

export function MyInputCheckbox(props: ComponentPropsd) {
  return (
    <div className="field">
      <label htmlFor="conf">confirm</label>
      <input
        type="checkbox"
        id="conf"
        {...props.register('conf', { required: 'Please confirm' })}
      />
      <div className="message-errr">{props.errors.conf?.message}</div>
    </div>
  );
}
