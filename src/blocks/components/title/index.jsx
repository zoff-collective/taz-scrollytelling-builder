import React from 'react';

import styles from './styles';

export default {
  name: 'title',
  defaultContent: 'Insert title ...',
  Component: (props) => (
    <h1 className={styles.title} {...props.attributes}>
      {props.children}
    </h1>
  ),
  serialize(obj, children) {
    return (
      <h1>{children}</h1>
    )
  }
};