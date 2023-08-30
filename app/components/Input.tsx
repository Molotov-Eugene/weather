"use client";
import { AiOutlineSearch } from 'react-icons/ai';

const Input = () => {
  return (
    <form className='flex items-center md:w-2/4 w-full order-2 md:order-1'>
      <input type='text' placeholder='City'
        className='w-full bg-transparent border-b-2 placeholder-sky-200/70 outline-none text-sky-100'
      />
      <div className='ml-[-25px] text-sky-200 cursor-pointer'>
        <AiOutlineSearch />
      </div>
    </form>
  )
}

export default Input;
