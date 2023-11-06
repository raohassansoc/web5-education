import React from 'react';

const Level = ({ levelName, levelNumber, percentage, isLocked, onClick }) => {
  return (
    <div className={`level ${isLocked ? 'locked' : 'unlocked'}`} onClick={onClick}>
      <div className="level-header">
      
        <span style={{fontSize:'12px'}} >Level    {levelNumber}</span>
        <span>{isLocked ? '🔓︎' : `${percentage.toFixed()}%`}</span>
      </div>
      <div className="level-content">
        <h6 style={{fontSize:'12px'}}>{levelName}</h6>
      </div>
    </div>
  );
};

export default Level;
