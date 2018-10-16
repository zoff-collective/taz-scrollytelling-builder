import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .paragraph {
    font-family: ${fonts.serif.family};
    font-size: 1.125rem;
    line-height: 1.4;
  }

  @media ${mq.tablet} {
    .paragraph {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

  :global(.paragraph a) {
    color: currentColor;
    text-decoration: underline;
  }

  :global(.paragraph em) {
    background-color: black;
    color: white;
    font-style: normal;
    font-weight: ${fonts.sansSerif.weight.bold};
    padding: 0.15rem 0.35rem;
  }
`;
