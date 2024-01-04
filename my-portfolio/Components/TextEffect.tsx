import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Mern Stack Developer',
        1500,
        'Web Developer',
        1500,
        'Frontend Developer',
        1500,
        'React Developer',
        1500,
        'Javscript Developer',
        1500,
        'Backend Developer',
        1500,
        'Nodejs Developer',
        1500,
        'Programmer'
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;