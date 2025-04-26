import './components.css'
function Taskcard(props){
    return(
        <div className='task-list-modification' >
            <p>{props.title}</p>
            <p>{props.desc}</p>
            <button aria-label='delete-task-button' >delete</button>
            <button aria-label='update-task-button' >update</button>
        </div>
    );
}
export default Taskcard;