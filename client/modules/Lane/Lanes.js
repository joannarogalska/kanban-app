import React, { PropTypes } from 'react';
import Lane from './LaneContainer.js';

// Import Style
import styles from './Lane.css';

const Lanes = ({ lanes }) => {
  return (
    <div className="lanes">{lanes.map((lane, index) =>
      <div key={index}>
        <Lane key={lane.id} lane={lane} />
        {(!((index+1) % 4)) && <div className={styles.clear}></div>}
      </div>
    )}</div>
  );
};

// Lanes.propTypes = {
//   lanes: PropTypes.array,
// };

export default Lanes;
