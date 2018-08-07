import React, { PropTypes } from 'react';
import styles from './Note.css';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const {children} = this.props;
    return (
      <li className={styles.Note}>{children}</li>
    );

  }
}

Note.propTypes = {
  //children: PropTypes.any,
};

