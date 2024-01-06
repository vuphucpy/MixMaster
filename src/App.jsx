import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cooktail,
  SinglePageError,
} from './pages';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: 'cooktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cooktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}>mixmaster starter</RouterProvider>;
};
export default App;
