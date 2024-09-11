import { useForm } from 'react-hook-form'
import Modal from '../ui/Modal'
import { Select } from '@headlessui/react'

function AddTaskModal({ isOpen, setIsOpen }) {
  
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm()


  const onSubmit = (data) => {
    console.log(data)
    reset()
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
                    {...register("name", { required: true })} /> 
                    {errors.name && <span className='text-red-500 font-normal'>This field is required</span>} 
          </div>
          
          {/* description */}
          <div className='flex flex-col gap-1 mt-3'>
          <label htmlFor="title">Description</label>
                <textarea
                   type='text'
                   className='rounded-md  text-sm'
                    {...register("name", { required: true })} /> 
                    {errors.name && <span className='text-red-500 font-normal'>This field is required</span>} 
          </div>
          
          <div className='flex flex-col gap-1 mt-3'>
          <label htmlFor="title">Deadline</label>
                <input
                   type='date'
                   className='rounded-md  text-sm'
                    {...register("name", { required: true })} /> 
                    {errors.name && <span className='text-red-500 font-normal'>This field is required</span>} 
          </div>
          
          <div className='flex flex-col gap-1 mt-3'>
          <label htmlFor="title">Assign To</label>
          <Select name="status" aria-label="Project status" className="rounded-md  text-sm">
              <option value="active">Al Mamud Bijoy</option>
              <option value="paused">Mir Hossain</option>
              <option value="delayed">Jhankar Mahbub</option>
              <option value="canceled">Shakeebul Islam</option>
          </Select>
          </div>
          
          <div className='flex flex-col gap-1 mt-3'>
          <label htmlFor="title">Priority</label>
          <Select name="status" aria-label="Project status" className="rounded-md text-sm">
              <option value="active">Normal</option>
              <option value="paused">High</option>
              <option value="delayed">Argent</option>
          </Select>
                </div>

          <div className='flex items-center justify-end gap-3'>
            <button type='Cancle' className='btn bg-red-500 text-white mt-4 '>Cancle</button>
            <button type='sumbit' className='btn bg-blue-700 text-white mt-4  '>Submit</button>
            
          </div>          
      </form>
            </Modal>

    </>
  )
}

export default AddTaskModal;
