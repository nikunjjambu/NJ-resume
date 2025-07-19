/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'The Nature Conservancy',
    position: 'MEL Officer',
    url: 'https://www.tncindia.in/',
    startDate: '2023-05-01',
    summary: 'I work as an MEL Officer at The Nature Conservancy. My role involves:',
    highlights: [
      'Develop and implement Monitoring, Evaluation, and Learning (MEL) frameworks for projects focused on community conservation, agroforestry, and human-elephant conflict mitigation',
      'Translate field and spatial data into clear, actionable insights that support project teams and stakeholder communication',
      'Design custom Survey123 and XLSForm tools to enable scalable, structured field data collection',
      'Integrate biodiversity monitoring, spatial analysis, and local insights into MEL systems to inform adaptive strategies',
      'Manage spatial data workflows and build ArcGIS dashboards to track and communicate project outcomes across multiple geographies',
      'Spearhead a project as Technical Lead on indigenising a global Nature-Based Solutions (NbS) portal, adapting it to Indian ecological and cultural contexts',
    ],
  },
  {
    name: 'Foundation for Ecological Security (FES)',
    position: 'Senior Project Manager (Ecologist)',
    url: 'https://fes.org.in/',
    startDate: '2020-09-01',
    endDate: '2023-03-01',
    summary: `At FES, I was involved in two projects namely Integrated Forest Management System (IFMT) and Indian Biodiversity Information System (IBIS). More details follow: `,
    highlights: [
      'IFMT: This project dealt with providing technical expertise and assistance in preparation of the Working Plan of Territorial Forest Management of various forest Divisions. In its Native format, IFMT is used by entire Rajasthan Forest department. As part of the work, I have trained more than 2500 forest staff in the aspects of data collection and principles of working plan. As a part of Scaling operations, IFMT is adapted in form of VanApp and is used by more than 7 states and is going to be made mandatory by Ministry of Environment and Forests (MoEF).',
      'IBIS: is a biodiversity portal developed by FES in 2009 provided information regarding floral and faunal groups. I was leading a team to revamp the portal to bring it to current standards of citizen sciences and technology. The revamped portal is a built on a GIS engine and provides information on all floral and faunal groups. The new portal is built on international data standards and taxonomy.',
      'Apart from the above two projects, I was working on using Species Distribution Modelling (SDM) tool to conceptualize and develop an Eco-restoration tool which helps common people in plantation of Native local plant species.  ',
    ],
  },
  {
    name: 'Salim Ali Centre for Ornithology and Natural History (SACON)',
    position: 'Junior Research Biologist (GIS Analyst)',
    url: 'https://www.sacon.in/',
    startDate: '2018-01-01',
    endDate: '2019-12-31',
    summary: `I worked in a project titled "Assessment of status, distribution and threats to the population of threatened Sarus Crane (Grus antigone) in Gujarat, India"`,
    highlights: [
      'I was involved in the capacity of GIS Analyst responsible for carrying out landscape change detection for over 60 years.',
    ],
  },
  {
    name: 'Wildlife Institute of India (WII)',
    position: 'Project Biologist',
    url: 'https://wii.gov.in/',
    startDate: '2017-06-01',
    endDate: '2017-12-31',
    summary: `I worked in a project titled "Black-Necked Crane Conservation Project based in Arunachal Pradesh, India"`,
    highlights: [
      'This Project focused on understanding the Habitat requirements of the species in Nyamjang Chhu river basin near Zemithang village. This is a proposed site for a hydel power project to be undertaken by Noida based Bhilwara group.',
    ],
  },
  {
    name: 'Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH',
    position: 'Independent Grant',
    url: 'https://2023.snrd-asia.org/conservation-and-sustainable-management-of-coastal-and-marine-protected-areas-cmpa/',
    startDate: '2016-12-01',
    endDate: '2017-06-30',
    summary: `The grant was part of the project "Conservation and Sustainable Management of Coastal and Marine Protected Areas (CMPA) in India"`,
    highlights: [
      'The consultancy project titled "Avifaunal Survey to Understand Bird- Habitat Linkages at Khijadiya Wildlife Sanctuary and Gosabara Wetland in Gujarat" looked at habitat needs of various species at the two wetlands of Gujarat state among various ecological aspects. ',
    ],
  },
  {
    name: 'Rufford Small Grant',
    position: 'Independent Grant',
    url: 'https://www.rufford.org/projects/nikunj-jambu/avifaunal-conservation-through-research-awareness-and-generating-alternative-livelihood-options-in-purna-wildlife-sanctuary-gujarat/',
    startDate: '2015-07-01',
    endDate: '2016-07-01',
    summary: `The grant was part of the project "Avifaunal Conservation through Research, Awareness and Generating Alternative Livelihood Options in Purna Wildlife Sanctuary, Gujarat"`,
    highlights: [
      'Research: 1) Avifaunal diversity estimation 2) Socioeconomic condition of the indigenous farming tribes, especially in the wake of droughts 3) Gauge people’s awareness levels and ascertain extent of hunting',
      'Awareness: 1) Nature workshops to sensitise school children, teachers and parents 2) Nature trails to reshape the perspective of villagers about avifauna ',
      'Generation of alternative livelihoods, with help from the government departments: 1) Promote general awareness about Purna, particularly, as a bird sanctuary 2) Train local people as bird guides, fostering a sense of ownership 3) Explore home stays and ecotourism as a revenue generating alternative. ',
    ],
  },
  {
    name: 'Wildlife Institute of India (WII)',
    position: 'Research Biologist',
    url: 'https://wii.gov.in/',
    startDate: '2013-09-01',
    endDate: '2015-01-31',
    summary:
      'I worked in a project titled "Monitoring Tigers, Co-predators, Prey and their Habitat (All India Tiger Estimation)"',
    highlights: [
      'Field work in the forests of Ranthambore, Rajasthan, Manas Tiger Reserve, Assam and Kaziranga National Park, Assam.',
      'Field work involved collection of data on tiger, prey and habitat using camera traps, line transects, sign survey and vegetation sampling.',
    ],
  },
  {
    name: 'Nature Club Surat',
    position: 'Independent Grant',
    url: 'https://www.natureclubsurat.org/',
    startDate: '2012-07-01',
    endDate: '2013-06-30',
    summary:
      'The grant was provided to support my masters dissertation work on Avifaunal Diversity of Purna Widllife Sanctuary-Dangs region of Gujarat.',
  },
  {
    name: 'Indian Institute of Remote Sensing (IIRS)',
    position: 'Field Assistant',
    url: 'https://www.iirs.gov.in/',
    startDate: '2009-05-01',
    endDate: '2010-07-30',
    summary:
      'I was part of the project "Biodiversity Characterisation at landscape level in North-West India and Lakshadweep Islands using Satellite Remote Sensing and Geographic Information System"',
    highlights: [
      'Field work involved collection of data on vegetation, soil and land use/land cover using remote sensing techniques.',
      'Laying out plots of 31.62 X 31.62m, 10 X 10m, 1 X 1m in the sanctuaries, national parks and protected areas of Gujarat State ',
      'Collecting and documenting plant species and preparing an herbarium bank',
    ],
  },
];

export default work;
