import React from "react";
import SkillsItem from "./SkillsItem";
import SkillLanguages from "./SkillLanguages";

const Skills = () => {
  return (
    <>
      <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
        <h1 className="heading">
          {" "}
          Education & <span className="text-yellow-400">Skills</span>
        </h1>

        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2  gap-[2rem] items-center">
          <div>
            <SkillsItem
              title="Enrolled In Governor Sindh Initiative"
              year="2024"
            />
            <SkillsItem title="MERN Stack Developer" year="2024" />

            <SkillLanguages
              skill1="HTML"
              skill2="Css"
              skill3="JavaScript"
              level1="w-[91%]"
              level2="w-[88%]"
              level3="w-[80%]"
            />
          </div>
          <div>
            <SkillsItem title="Next JS Developer" year="2023 - 2024" />
            <SkillsItem title="JavaScript Developer" year="2023 - 2024" />
            <SkillLanguages
              skill1="React"
              skill2="Next"
              skill3="TypeScript"
              level1="w-[81%]"
              level2="w-[78%]"
              level3="w-[60%]"
            />
          </div>

          {/* <div>
          <SkillsItem />
          <SkillsItem />
          <SkillLanguages />
        </div>
        <div>
          <SkillsItem />
          <SkillsItem />
          <SkillLanguages />
        </div>
        <div>
          <SkillsItem />
          <SkillsItem />
          <SkillLanguages />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Skills;
