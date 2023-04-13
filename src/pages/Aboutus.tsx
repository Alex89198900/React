import React from 'react';
import { useGetStoreDataQuery } from '../store/redusers/apireduser';
import Header from '../components/Header';
function About() {
  const { data, error, isLoading } = useGetStoreDataQuery('');
  console.log(data);
  return (
    <div className="about">
      <Header title="About us" />
      <h1>About page</h1>
    </div>
  );
}

export default About;
