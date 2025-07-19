export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Dangs Bird Festival',
    subtitle: 'Dangs, Gujarat, India',
    link: 'https://india.mongabay.com/2020/02/bird-festival-puts-spotlight-on-the-biodiversity-of-gujarats-dang-forests/',
    image: '/NJ-resume/images/projects/nearestdollar.jpg',
    date: '2016-01-01',
    desc:
      'The Dang Bird Festival was started in 2016 by two researchers, Nikunj Jambu and Kaushal Patel' +
      'with the support of the then Deputy Conservator of Forest (DCF) of the North Dang division, Anand Kumar., ' +
      'While the founders wanted to bring attention to the sanctuary and attract participants from different regions,' +
      'their main intention was to educate the local youth with knowledge about Dang’s biodiversity and the importance to conserve it.',
  },
  {
    title: '297 Bird species make Dang their home',
    subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
    link: 'https://timesofindia.indiatimes.com/city/surat/297-bird-species-make-dang-their-home/articleshow/85160088.cms',
    image: '/NJ-resume/images/projects/harvest.jpg',
    date: '2021-10-09',
    desc:
      'The paper has been co-authered by Nikunj Jambu and Kaushal Patel' +
      'The study was done in Puran Wildlife Sanctuary and Vansda Nationa park ' +
      'in Dangs district of South Gujarat.',
  },
  {
    title: 'Training forest department staff in Rajasthan',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: 'https://festhecommonpool.wordpress.com/2022/03/30/fes-supporting-the-forest-department-to-create-working-plan/',
    image: '/NJ-resume/images/projects/spacepotato.jpg',
    date: '2022-03-30',
    desc:
      'The training workshops, facilitated by Dr. Satish Sharma (retired ACF, Rajasthan Forest Department) and Nikunj Jambu,' +
      'are geared towards helping the forest personnel understand the importance and processes of identifying plants, ' +
      'along with how to collect data using the Forest Data Kit (FDK) app, and how to read that data.',
  },
];

export default data;
