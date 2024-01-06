import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);

  return { id, data };
};

const Cooktail = () => {
  const { id, data } = useLoaderData();
  console.log(data);
  // const {
  //   strDrink: name,
  //   strDrinkThumb: image,
  //   strAlcoholic: info,
  //   strCategory: category,
  //   strGlass: glass,
  //   strInstructions: instruction,
  // } = singleDrink;

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
        {/* <h3>{name}</h3> */}
      </header>
    </Wrapper>
  );
};

export default Cooktail;
