import { useForm } from 'react-hook-form'
import Modal from '../ui/Modal'
import { Select } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/features/tasks/tasksSlice';


function AddTaskModal({ isOpen, setIsOpen }) {

  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm()

  
  const onCancle = () => {
    reset();
    setIsOpen(false)
 
  }

  const onSubmit = (data) => {
    dispatch(addTask(data))
    onCancle();
    
  }

  return (
    <>
      
      <Modal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              title="Programming Hero"
            >
       <form onSubmit={handleSubmit(onSubmit)}>
               
        <div className='flex flex-col gap-1'>
          <label htmlFor="title">Title</label>
                <input
                   type='text'
                   className='rounded-md  text-sm'
                  id="title"
                    {...register("title", { required: true })} /> 
                    {errors.title && <span className='text-red-500 font-normal'>This field is required</span>} 
          </div>
          
          {/* description */}
          <div className='flex flex-col gap-1 mt-3'>
          <label htmlFor="title">Description</label>
                <textarea
                   type='text'
              className='rounded-md  text-sm'
            name='Description'
                    {...register("description", { required: true })} /> 
                    {errors.description && <span className='text-red-500 font-normal'>This field is required</span>} 
          </div>
          
          <div className='flex flex-col gap-1 mt-3'>
          <label htmlFor="title">Deadline</label>
                <input
                   type='date'
                   className='rounded-md  text-sm'
                    {...register("date", { required: true })} /> 
                    {errors.date && <span className='text-red-500 font-normal'>This field is required</span>} 
          </div>
          
          <div className='flex flex-col gap-1 mt-3'>
          <label htmlFor="title">Assign To</label>
            <Select name="Assign" aria-label="Project status" className="rounded-md  text-sm"
              {...register("assign", { required: true })}

            >
              <option value="Al Mamud Bijoy">Al Mamud Bijoy</option>
              <option value="Mir Hossain">Mir Hossain</option>
              <option value="Jhankar Mahbub">Jhankar Mahbub</option>
              <option value="Shakeebul Islam">Shakeebul Islam</option>
              
            </Select>

          </div>
          
          <div className='flex flex-col gap-1 mt-3'>
          <label htmlFor="title">Priority</label>
            <Select name = "Priority" aria-label="Project status" className="rounded-md text-sm"
              {...register("priority", { required: true })}
            >
              <option value="Low">Normal</option>
              <option value="Medium">High</option>
              <option value="High">Argent</option>
            </Select>

                </div>

          <div className='flex items-center justify-end gap-3'>
            <button type='Cancle' onClick={()=>onCancle()} className='btn  bg-red-500 text-white mt-4 '>Cancle</button>
            <button type='submit' className='btn bg-blue-700 text-white mt-4  '>Submit</button>
            
          </div>          
      </form>
            </Modal>

    </>
  )
}

export default AddTaskModal;
