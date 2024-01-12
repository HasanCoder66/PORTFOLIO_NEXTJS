import React from 'react'
import SkillsItem from './SkillsItem';
import SkillLanguages from './SkillLanguages';

const Skills = () => {
  return (
      <>
      <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
        <h1 className="heading"> Education & <span className="text-yellow-400">Skills</span></h1>
      </div><div className="pt-[4rem] md:pt-[8rem] mx-auto h-[88%] grid grid-cols-1 md:grid-cols-2  gap-[2rem]items-center ">
        <div>
          <SkillsItem />
          <SkillsItem />
          <SkillsItem />
          <SkillsItem />
          <SkillLanguages />
        </div>
        <div>
          <SkillsItem />
          <SkillsItem />
          <SkillLanguages />
        </div>
      </div></>
  );
}

export default Skills