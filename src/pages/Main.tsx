import React, { useEffect } from 'react';
import { CardType } from '../model';
import List from '../components/List';
import Header from '../components/Header';
import { setData } from '../model';
import { FieldValues, useForm } from 'react-hook-form';
import Sppiner from '../components/Spinner';
type FormInputs = {
  input?: string;
};

function Main() {
  const [arr, setCards] = React.useState<CardType[]>([]);
  const [paramFil, setparamFil] = React.useState('');
  const [flagFind, setflagFind] = React.useState(false);
  const [name1, setName] = React.useState<string>(() => {
    const saved = localStorage.getItem('name');
    return saved || '';
  });

  useEffect(() => {
    localStorage.setItem('name', name1);
  }, [name1]);
  const onchange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };
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
    setName('');
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

  return (
    <div className="main">
      <h1>Main</h1>
      <Header title="Main" />
      {flagFind === false && <Sppiner />}
      <form onSubmit={handleSubmit(onSubmit)} className="catalin">
        <input
          value={name1}
          type="text"
          onInput={onchange}
          {...register('input')}
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
