// import React from 'react'

function GoalBars(props) {
  // eslint-disable-next-line react/prop-types
  const { rpic, lpic, text, color } = props;
  return (
    <div className="b2 min-h-[80px] rounded-xl flex items-center">
      <div className="wb2 max-h-[50px] max-w-[50px] rounded-lg p-3 mx-4">
        <img src={rpic} className="w-7 h-7" />
      </div>
      <p className="text-white text-xl font-semibold mr-auto">{text}</p>
      <div
        className="max-h-[50px] max-w-[50px] rounded-xl p-3 mr-5"
        style={{ backgroundColor: color }}
      >
        <img src={lpic} className="w-5 h-5" />
      </div>
    </div>
  );
}

export default GoalBars;
