import { ArrowRightIcon} from '@heroicons/react/24/outline';
// import { Delete } from 'lucide';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeTask, updateState } from '../../redux/features/tasks/tasksSlice';


const TaskCard = ({task}) => {
  
const dispatch = useDispatch()

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === 'high' ? 'text-red-500' : ''
        } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${
          task.priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assign}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button title="Delete" onClick={()=>dispatch(removeTask(task.id))}>
            <RiDeleteBin6Line className="h-5 w-5 text-red-500"  /> 
          </button>

          <button title="Update Status" onClick={()=>dispatch(updateState(task.id))}>
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
