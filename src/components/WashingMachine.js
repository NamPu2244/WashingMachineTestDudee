import './WashingMachine.css';

function WashingMachine(props) {
  const { washingmachines, statusMachineClick } = props;

  const handleButtonClick = () => {
    if (washingmachines.status === "ว่าง") {
      washingmachines.status = "กำลังใช้งาน";
      statusMachineClick(washingmachines);
    }
  };

  return (
    <div className='washing-machine-items'>
      <img className='washing-machine-img' src={washingmachines.washingImg} onClick={() => statusMachineClick(washingmachines)} />
      <p className='washing-machine-name'>{washingmachines.name}</p>
      <div className='washing-machine-service'>
        <p className='status'>{washingmachines.status}</p>
        <button className='button' onClick={handleButtonClick}>ซักเลย!!!</button>
      </div>
    </div>
  );
}

export default WashingMachine;
