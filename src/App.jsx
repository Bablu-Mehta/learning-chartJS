import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./data";
import LineChart from "./components/LineChart";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["red", "green", "blue", "yellow", "grey"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div style={{ width: 500, display: "inline-block", margin: "2rem" }}>
        <BarChart chartData={userData} />
      </div>

      <div style={{ width: 500, display: "inline-block", margin: "2rem" }}>
        <LineChart chartData={userData} />
      </div>
    </>
  );
}

export default App;
