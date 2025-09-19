import { useEffect, useState } from "react";
const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress">
      <span>{percent.toFixed()}% </span>
      <div style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
