"use client";
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className='flex items-center md:w-2/4 w-full order-2 md:order-1'>
      <input type='text' placeholder='City'
        className='w-full bg-transparent border-b-2 placeholder-sky-200/70 outline-none text-sky-100'
        onKeyDown={handleSearch}
        onChange= {({target: {value}}) => setLocation(value)}
      />
      <div className='ml-[-25px] text-sky-200 cursor-pointer'>
        <AiOutlineSearch />
      </div>
    </form>
  )
}

export default Input;
