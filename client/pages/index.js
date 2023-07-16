import { Inter } from '@next/font/google';
import { Global, css } from '@emotion/react';

import DefaultLayout from '../components/layout/default-layout';

const inter = Inter();
const GlobalStyles = css`
  :root {
    --default-font-size: 1.6rem;
    --default-font-family: ${inter.style.fontFamily};
    --font-color-black: #1c2025;
    --font-color-grey: #3f4556;
    --background-color-grey: #f5f5f5;
    --default-container-padding: 2rem;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-size: var(--default-font-size);
    font-family: var(--default-font-family);
    color: var(--font-color-grey);
  }

  button {
    padding: 0;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    background: none;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const HomePage = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <DefaultLayout></DefaultLayout>
    </>
  );
};

export default HomePage;
