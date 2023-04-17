import React, { useEffect } from 'react';
import { CardType } from '../model';
import List from '../components/List';
import Header from '../components/Header';
import { FieldValues, useForm } from 'react-hook-form';
import Sppiner from '../components/Spinner';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { incrementByAmount } from '../store/redusers/searchreduser';
import { RootState } from 'store/store';
import { useLazyGetStoreDataQuery } from '../store/redusers/apireduser';
import { incrementByAmountM } from '../store/redusers/searchmemory';
type FormInputs = {
  input?: string;
};

function searchData(callback: (arg: string) => void, param = '') {
  if (param !== '') {
    callback(`search?q=${param}`);
  } else {
    callback(param);
  }
}

function Main() {
  const [arr, setCards] = React.useState<CardType[]>([]);
  const [paramFil, setparamFil] = React.useState('');
  const [fetchTrigger, { data, isLoading }] = useLazyGetStoreDataQuery({});
  const dataInput = useAppSelector((state: RootState) => state.input.value);
  const dataInput2 = useAppSelector((state: RootState) => state.inputm.value);
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
    setparamFil(dataInput);
    searchData(setparamFil, data.input);
    dispatch(incrementByAmount(data.input));
    dispatch(incrementByAmountM(''));
    reset();
  };
  useEffect(() => {
    async function fetchData() {
      searchData(setparamFil, dataInput);
      fetchTrigger(paramFil);
      if (data) {
        setCards(data?.products);
      }
    }
    fetchData();
  }, [data, dataInput, fetchTrigger, paramFil]);

  const onchange = (e: React.FormEvent<HTMLInputElement>): void => {
    dispatch(incrementByAmountM(e.currentTarget.value));
  };
  return (
    <div className="main">
      <h1>Main</h1>
      <Header title="Main" />
      {isLoading && <Sppiner />}
      <form onSubmit={handleSubmit(onSubmit)} className="catalin">
        <input
          type="text"
          {...register('input')}
          className="input"
          value={dataInput2}
          onInput={onchange}
        />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      <List elem={arr} isLoading={isLoading} />
    </div>
  );
}

export default Main;
