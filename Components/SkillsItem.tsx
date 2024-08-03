import React from 'react'

interface props {
  title : string,
  year : string,
}

const SkillsItem = ({title, year, }:props) => {
 
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[10px] border-[2px] border-[#55e6a5]'> {year}</span>
      <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] sm:text-[25px] md:text-[30px] text-white'>
        {title}
      </h1>
      <p className="font-normal text-[#aaaaaa] w-[88%] text-[17px] opacity-80">
      Currently enrolled in the Governor Sindh Initiative, learning Web 3 and advanced web development technologies
      </p>
    </div>
  )
}

export default SkillsItem