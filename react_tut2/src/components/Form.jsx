import React from 'react'

const Form = ({setValue,handleSubmit,value}) => {

    const handleChange=(e)=>{
        setValue(e.target.value);
      }

  return (
    <div >
        <form  onSubmit={handleSubmit} className='flex'>
        <input type="text" placeholder='새로 할 일을 입력하세요' name='value' onChange={handleChange} 
        value={value} className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"/> 
        <input type="submit" className="border-blue-500 text-blue-600 p-2 rounded border"
        value="입력"  />
        </form>
    </div>
  )
}

export default Form