import css from 'styled-jsx/css';

export default css`
  .infobox {
    background-color: rgb(242, 242, 242);
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding: 3rem 0;
    position: relative;
  }

  .logo-container {
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
  }

  :global(.infobox .logo-container svg) {
    height: 3rem;
    width: 3rem;
  }

  :global(.infobox .logo-container path) {
    fill: black;
  }
`;
