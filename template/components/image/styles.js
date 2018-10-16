import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .figure {
    font-size: 0;
    line-height: 1;
    margin: 3rem auto;
    text-align: center;
  }

  @media ${mq.tablet} {
    .figure {
      margin: 5rem auto;
    }
  }

  .figure--is-full {
    margin: 5rem 0;
  }

  @media ${mq.tablet} {
    .figure--is-full {
      margin: 7rem 0;
    }
  }

  .figure--is-wide {
    max-width: 900px;
  }

  .figure--is-constraint {
    max-width: 780px;
  }

  .image {
    height: auto;
    width: 100%;
  }

  .caption {
    color: #4a4a4a;
    font-family: ${fonts.sansSerif.family};
    font-size: 0.687rem;
    line-height: 1.5;
    margin-top: 0.5rem;
    text-align: left;
  }

  @media ${mq} {
    .caption {
      font-size: 0.875rem;
      margin-top: 1rem;
    }
  }
`;
