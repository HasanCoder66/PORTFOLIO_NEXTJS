import React from 'react'

interface props {
  title : string,
  year : string
}

const SkillsItem = ({title, year}:props) => {
 
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[10px] border-[2px] border-[#55e6a5]'> {year}</span>
    </div>
  )
}

export default SkillsItem