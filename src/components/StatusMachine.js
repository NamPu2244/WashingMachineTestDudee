import './StatusMachine.css';

function StatusMachine(props){

    const {statusmachine , statusMachineCloseClick} = props;
    return(
        <div className='bg-status' onClick={statusMachineCloseClick}>
            <div className='contrainer-status'>
                <p className='machine-name'>{statusmachine.name}</p>
                <img src={statusmachine.washingImg} />
                <div className='status-all'>
                    <p className='status-process'>{statusmachine.status}</p>
                    <p className='status-time'>{statusmachine.time}</p>
                </div>
            </div>

        </div>
    )

}

export default StatusMachine;