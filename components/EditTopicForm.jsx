import React from 'react'

const EditTopicForm = () => {
  return (
    <div className='h-[75.1vh]'>
        <h2 className='text-center mb-10 w-max bg-secondary mx-auto p-5 text-2xl'>ADD TOPIC PAGE [CREATE]</h2>
        <form action="" className='flex flex-col gap-3 border-4 border-primary py-10 w-[20%] mx-auto'>
        <input type="text" placeholder="Type here Name" className="input input-bordered w-full max-w-xs mx-auto" />

        <textarea placeholder="Type here Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs mx-auto" ></textarea>

        <button className="btn btn-success w-max mx-auto mt-5">ADD Topic</button>
        </form>
    </div>
  )
}

export default EditTopicForm