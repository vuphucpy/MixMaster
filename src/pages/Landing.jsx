import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CooktailList from '../components/CooktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <>
      <CooktailList drinks={drinks} />
    </>
  );
};

export default Landing;
