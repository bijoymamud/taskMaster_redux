import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeTask, updateState } from '../../redux/features/tasks/tasksSlice';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  let updatedStatus;
  if (task.status === 'pending') {
    updatedStatus = 'running';
  } else if (task.status === 'running') {
    updatedStatus = 'done';
  } else {
    updatedStatus = 'archive';
  }

  let previousStatus;
  if (task.status === 'done') {
    previousStatus = 'running';
  } else if (task.status === 'running') {
    previousStatus = 'pending';
  } else {
    previousStatus = 'pending'; // Default to 'pending' if the task is 'archive' or not found
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === 'High' ? 'text-red-500' : ''
        } ${task.priority === 'Medium' ? 'text-yellow-500' : ''} ${
          task.priority === 'Low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm"><span className='font-semibold'>Assigned to : </span>{task?.assign}</p>
      <p className='text-sm mb-8'><span className='font-semibold'>Sumbittion Date : </span><span className='text-red-600 '>{task?.date}</span></p>

      <div className="flex justify-between mt-3">
        
        <p className='text-sm '><span className='font-semibold'>Priority :</span> { task.priority}</p>
        <div className="flex gap-3">
          {/* Conditionally render the ArrowLeftIcon when the task is not in the 'pending' state */}
          {task.status !== 'pending' && (
            <button
              title="Move to Previous Status"
              onClick={() => dispatch(updateState({ id: task.id, status: previousStatus }))}
            >
              <AiOutlineDoubleLeft
              className="h-5 w-5 text-black" />
            </button>
          )}

          <button title="Delete" onClick={() => dispatch(removeTask(task.id))}>
            <RiDeleteBin6Line className="h-5 w-5 text-red-500" />
          </button>

          <button
            title="Move to Next Status"
            onClick={() => dispatch(updateState({ id: task.id, status: updatedStatus }))}
          >
            <AiOutlineDoubleRight
            className="h-5 w-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
