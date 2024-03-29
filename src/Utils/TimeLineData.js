import { FaBriefcase, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const timelineItems = [
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2023 SEP - Present </span>,
    position: 'right',
    icon: <FaBriefcase />,
    title: 'Integrated Active Monitoring',
    subTitle: 'Software Developer',
    description: 'React JS, Redux Toolkit, Ant Design, FastAPI, Python, PSQL, MongoDB, Docker',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>2023 JAN - 2023 MAR</span>,
    position: 'left',
    icon: <FaBriefcase />,
    title: 'Mograsys Technologies',
    subTitle: 'Software Developer Intern',
    description: 'React JS, TypeScript, Tailwind CSS',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2022 - 2024 </span>,
    position: 'right',
    icon: <FaGraduationCap />,
    title: 'Savitribai Phule Pune University',
    subTitle: 'Master Of Science, Computer Science MSc(CS)',
    description: 'Post Graduation',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2019 - 2022 </span>,
    position: 'left',
    icon: <FaBuilding />,
    title: 'Savitribai Phule Pune University',
    subTitle: 'Bachelor Of Vocational, Software Development',
    description: 'Total CGPA: 9.56 (81.91%)',
  },
];


export default timelineItems