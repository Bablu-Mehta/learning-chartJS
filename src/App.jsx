import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["red", "green", "blue", "yellow", "grey"],
        borderColor: 'black',
        borderWidth: 2
      },
    ],
  });

  return (
    <>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
    </>
  );
}

export default App;
