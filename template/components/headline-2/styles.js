import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .h2 {
    font-family: ${fonts.sansSerif.family};
    font-size: 1.5rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    letter-spacing: 1px;
    line-height: ${36 / 30};
    margin-bottom: 1.25rem;
    margin-top: 2.5rem;
  }

  @media ${mq.tablet} {
    .h2 {
      font-size: 1.875rem;
      margin-bottom: 2.875rem;
      margin-top: 3.175rem;
    }
  }
`;
