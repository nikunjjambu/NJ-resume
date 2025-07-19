export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'Amazon Web Services',
    competency: 1,
    category: ['Databases', 'Tools'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'ArcGIS Pro',
    competency: 5,
    category: ['Tools', 'Geospatial', 'Cartography'],
  },
  {
    title: 'QGIS',
    competency: 4,
    category: ['Tools', 'Geospatial', 'Cartography'],
  },
  {
    title: 'ERDAS',
    competency: 3,
    category: ['Tools', 'Geospatial', 'Image Classification'],
  },
  {
    title: 'ArcGIS Online',
    competency: 4,
    category: ['Geospatial', 'Tools', 'Cartography'],
  },
  {
    title: 'ArcGIS StoryMaps',
    competency: 4,
    category: ['Tools', 'Data Visualization', 'Geospatial'],
  },
  {
    title: 'ArcGIS Dashboards',
    competency: 5,
    category: ['Tools', 'Data Visualization', 'Geospatial'],
  },
  {
    title: 'ArcGIS experience builder',
    competency: 2,
    category: ['Tools', 'Data Visualization', 'Geospatial'],
  },
  {
    title: 'ArcGIS Survey123',
    competency: 5,
    category: ['Tools', 'Data Collection', 'Geospatial'],
  },
  {
    title: 'ArcGIS Field Maps',
    competency: 4,
    category: ['Tools', 'Data Collection', 'Geospatial'],
  },
  {
    title: 'Qfield',
    competency: 4,
    category: ['Tools', 'Data Collection', 'Geospatial'],
  },
  {
    title: 'Google Earth Engine',
    competency: 2,
    category: ['Data Science', 'Geospatial', 'Image Classification'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Data Visualization', 'Tools', 'Data Science'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Power BI',
    competency: 3,
    category: ['Data Visualization', 'Tools', 'Data Science'],
  },
  {
    title: 'Kobotoolbox',
    competency: 4,
    category: ['Tools', 'Data Collection', 'Geospatial'],
  },
  {
    title: 'EpiCollect',
    competency: 5,
    category: ['Tools', 'Data Collection', 'Geospatial'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Data Science', 'Languages'],
  },
  {
    title: 'PostGIS',
    competency: 3,
    category: ['Geospatial', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 1,
    category: ['Python'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Python', 'Data Science', 'Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
