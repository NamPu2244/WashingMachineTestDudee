import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import WashingMachine from "./components/WashingMachine";
import washings from "./data/MachinesAll";
import StatusMachine from "./components/StatusMachine";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [selectMachine, setSelectMachine] = useState(null);
  function statusMachineOpen(Status) {
    setSelectMachine(Status);
  }

  function statusMachineClose() {
    setSelectMachine(null);
  }


  const washingElements = washings.map((washingmachines, index) => {
    return (
      <WashingMachine
        key={index}
        washingmachines={washingmachines}
        statusMachineClick={statusMachineOpen}
      />
    );
  });

  let statusMachine = null;
  if (!!selectMachine) {
    statusMachine = (
      <StatusMachine statusmachine={selectMachine} statusMachineCloseClick={statusMachineClose}/>
    );
  }

  return (
    <div className="App">
      <NavBar />
      {statusMachine}
      <div className="washing-machines-grid">{washingElements}</div>

      <Footer />
    </div>
  );
}

export default App;
