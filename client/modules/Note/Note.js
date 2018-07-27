import React, { PropTypes } from 'react';
import styles from './Note.css';

// const Note = props =>
//   <li className={styles.Note}>{props.children}</li>;

export class Note extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    //const {connectDragSource, connectDropTarget, isDragging, editing, children} = this.props;
    return (
      <li className={styles.Note}>{props.children}</li>
    );

  }
}

Note.propTypes = {
  //children: PropTypes.any,
};

