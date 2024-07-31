import React from 'react'

interface props {
  title : string,
  year : string
}

const SkillsItem = ({title, year}:props) => {
 
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[10px] border-[2px] border-[#55e6a5]'> {year}</span>
      <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] sm:text-[25px] md:text-[30px] text-white'>
        {title}
      </h1>
      <p className="font-normal text-[#aaaaaa] w-[88%] text-[17px] opacity-80">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi consequuntur sint assumenda praesentium eaque, voluptatibus doloribus ipsa totam vel, dolore ex possimus voluptates quae accusamus?
      </p>
    </div>
  )
}

export default SkillsItem