import React from 'react';
import Listform from '../components/Listforms';
import Header from '../components/Header';
import { FieldValues, useForm } from 'react-hook-form';
import {
  FormInputs,
  MyInputFile,
  MyInputText,
  MyInputDate,
  MySelect,
  MyInputRadio,
  MyInputCheckbox,
} from '../components/Formcomponent';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { addForm } from '../store/redusers/reduserform';
export interface CustomElementType {
  id: string;
  name: string | undefined;
  photo: string;
  date: string | undefined;
  frame: string | undefined;
  conf: boolean | undefined;
  radio: string;
}
const arrCards: CustomElementType[] = [];
const preparationArr = (data: FieldValues): CustomElementType => {
  const photoFile =
    data.photo?.length !== 0 && data.photo ? URL.createObjectURL(data.photo[0]) : '';
  const dataCard = {
    id: String(arrCards.length),
    name: data.name,
    photo: photoFile,
    date: data.date,
    frame: data.frame,
    conf: data.conf,
    radio: data.contactChoice,
  };
  arrCards.push(dataCard);
  return dataCard;
};
function showMessage(callback: (arg: string) => void) {
  callback('CARD CREATED');
  setTimeout(() => {
    callback('');
  }, 3000);
}

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const [mess, setMess] = React.useState('');
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: FieldValues): void => {
    showMessage(setMess);
    dispatch(addForm(preparationArr(data)));
    reset();
  };
  return (
    <>
      <Header title="Form" />
      <div className="all-forms">
        <div className="message">{mess}</div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <MyInputFile register={register} errors={errors} />
          <MyInputText register={register} errors={errors} />
          <MyInputDate register={register} errors={errors} />
          <MySelect register={register} errors={errors} />
          <MyInputRadio register={register} errors={errors} />
          <MyInputCheckbox register={register} errors={errors} />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        <Listform />
      </div>
    </>
  );
}
export default Form;
