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
