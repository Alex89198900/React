import React, { useEffect } from 'react';
import { CardType } from '../model';
import List from '../components/List';
import Header from '../components/Header';
import { setData } from '../model';
import { FieldValues, useForm } from 'react-hook-form';
import Sppiner from '../components/Spinner';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { incrementByAmount } from '../store/redusers/searchreduser';
type FormInputs = {
  input?: string;
};

function Main() {
  const [arr, setCards] = React.useState<CardType[]>([]);
  const [paramFil, setparamFil] = React.useState('');
  const [flagFind, setflagFind] = React.useState(false);
  const dataInput = useAppSelector((state) => state.input.value);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: {},
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const onSubmit = (data: FieldValues): void => {
    setparamFil(data.input);
    reset();
  };

  useEffect(() => {
    setflagFind(false);
    async function fetchData() {
      await setData(setCards, paramFil);
      setflagFind(true);
    }
    fetchData();
  }, [paramFil]);

  const onchange = (e: React.FormEvent<HTMLInputElement>): void => {
    dispatch(incrementByAmount(e.currentTarget.value));
  };

  return (
    <div className="main">
      <h1>Main</h1>
      <Header title="Main" />
      {flagFind === false && <Sppiner />}
      <form onSubmit={handleSubmit(onSubmit)} className="catalin">
        <input
          value={dataInput}
          onInput={onchange}
          type="text"
          {...register('input', { required: 'Please Enter Na' })}
          className="input"
          placeholder="search by category and name product"
        />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      <List elem={arr} find={flagFind} />
    </div>
  );
}
export default Main;
