export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'The Maharaja Sayajirao University of Baroda',
    degree: 'Masters of Science in Zoology (Specialization in Wildlife Biology)',
    link: 'https://msubaroda.ac.in/',
    year: 2013,
  },
  {
    school: 'The Maharaja Sayajirao University of Baroda',
    degree: 'Bachelor of Science in Zoology (Honors)',
    link: 'https://msubaroda.ac.in/',
    year: 2011,
  },
  {
    school: 'The Maharaja Sayajirao University of Baroda',
    degree: 'Bachelor of Science in Botany',
    link: 'https://msubaroda.ac.in/',
    year: 2009,
  },
];

export default degrees;
