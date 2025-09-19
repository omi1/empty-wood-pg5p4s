import "./styles.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <div className="app">
      <ProgressBar value={value} />
    </div>
  );
}
