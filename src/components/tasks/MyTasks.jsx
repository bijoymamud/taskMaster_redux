import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { updateState, userTasks } from '../../redux/features/tasks/tasksSlice';
import { useEffect } from 'react';

const MyTasks = () => {

  const { tasks } = useSelector((state) => state.tasksSlice);
  console.log('from mytasks', tasks)

  const { name: userName } = useSelector((state) => state.usersSlice);

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(userTasks(userName))
 } ,[userName, dispatch])
  
  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        <div
          key={tasks.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{tasks.title}</h1>
          <div className="flex gap-3">
            <button className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={()=> dispatch(updateState({id:tasks.id}))}
              className="grid place-content-center" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
