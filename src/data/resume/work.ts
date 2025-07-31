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
      'Integrate projects’ Theory of Change and equity considerations into the MEL frameworks',
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
    summary: `At FES, my work focussed on two pivotal projects, namely Integrated Forest Management System (IFMT) and Indian Biodiversity Information System (IBIS): `,
    highlights: [
      'IFMT: Indian Forest Management Tool is an app that FES developed to provide technical expertise and assistance to Forest departments of various Indian states in making the Working Plan of Territorial Forest Management. My work included training. I personally trained over 2500 forest staff in the aspects of data collection and principles of the working plan. As part of scaling operations, IFMT, which got adapted into VanApp, is today used by more than 7 states. VanApp is soon to be made mandatory by the Ministry of Environment, Forests, and Climate Change (MoEFCC). Here is a detailed write-up of on the IFMT app and its significance. ',
      'IBIS: is a biodiversity portal that FES developed in 2009; it provides information regarding flora and fauna of any region. I led a team in an initiative to revamp the portal and bring it to the current standards of data, citizen sciences, and technology. Built on a GIS engine, IBIS now provides information on all floral and faunal groups. The new portal is built on international data standards and taxonomy.',
      'Beyond the above two projects, while working with FES, I used the Species Distribution Modelling (SDM) tool to also conceptualize an eco-restoration tool, named Right Tree Right Place, which aims to help local communities in their efforts to promote native plant species.',
    ],
  },
  {
    name: 'Salim Ali Centre for Ornithology and Natural History (SACON)',
    position: 'Junior Research Biologist (GIS Analyst)',
    url: 'https://www.sacon.in/',
    startDate: '2017-12-01',
    endDate: '2019-12-31',
    summary: `I worked on a project titled “Assessment of Status, Distribution and Threats to the Population of Sarus Crane (Grus Antigone) in Gujarat, India”.`,
    highlights: [
      'Analysed GIS-based long-term data on land use and land cover changes in Sarus Crane habitats across Gujarat',
      'Processed satellite imagery to detect landscape-level changes over six decades',
      'Conducted ground-truthing efforts and integration of field data with spatial layers',
    ],
  },
  {
    name: 'Wildlife Institute of India (WII)',
    position: 'Project Biologist',
    url: 'https://wii.gov.in/',
    startDate: '2017-06-01',
    endDate: '2017-12-31',
    summary: `I worked on a project titled "Black Necked Crane Conservation & eFlow Assessment, Nyamjang Chu River (Zemithang Valley, Arunachal Pradesh)".`,
    highlights: [
      'Conducted field research in the Nyamjang Chhu river basin near Zemithang village, Tawang district, a key wintering site for the Black Necked Crane (Grus nigricollis)',
      'Surveyed crane habitat in dry riverbeds, stream edges, and riparian shrub zones, especially those dominated by Hippophae spp., in which cranes forage and roost',
      'Recorded hydrological data to help establish habitat suitability criteria related to water depth and flow velocity',
      'Supported the assessment of potential ecological impacts from a proposed 780 MW hydroelectric project by Bhilwara Energy Ltd, which could have submerged a large portion of the crane’s habitat',
      'Gathered findings from the study to suggest conservation recommendations, leading to the scrapping of the dam project subsequently, helping protect this critical habitat',
      'Gained valuable field experience in high-altitude Himalayan riverine ecosystems and species-habitat assessment',
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
      'Conducted an ecological study named “Assessing bird-habitat linkages at Khijadiya Wildlife Sanctuary and Gosabara Wetland, key biodiversity hotspots in Gujarat”',
      'Surveyed avian diversity, documented species-specific habitat dependencies, and identified critical conservation zones to inform wetland management strategies',
      'Analyzed ecological data to support evidence-based recommendations for protecting threatened species and their ecosystems',
      'Led the GIZ initiative on coastal and marine conservation by delivering actionable insights for sustainable habitat preservation',
    ],
  },
  {
    name: 'Rufford Small Grant',
    position: 'Independent Grant',
    url: 'https://www.rufford.org/projects/nikunj-jambu/avifaunal-conservation-through-research-awareness-and-generating-alternative-livelihood-options-in-purna-wildlife-sanctuary-gujarat/',
    startDate: '2015-07-01',
    endDate: '2016-07-01',
    summary: `This grant was part of the project titled "Avifaunal Conservation Through Research, Awareness and Generating Alternative Livelihood Options in Purna Wildlife Sanctuary, Gujarat". It had three parallel objectives:`,
    highlights: [
      'Research: 1) Estimate avifaunal diversity 2) Assess the socioeconomic condition of the indigenous farming tribes, especially post droughts 3) Gauge people’s awareness levels and ascertain extent of hunting',
      'Awareness: 1) Conduct nature workshops to sensitize school children, teachers and parentss 2) Lead nature trails to reshape perspectives of villagers about avifauna ',
      'Generation of alternative livelihoods: 1) Promote general awareness about Purna as a bird sanctuary 2) Coordinate with government departments to spread awareness 3) Train local youth as bird guides, fostering a sense of stewardship and ownership  4) Explore home stays and ecotourism as a revenue generating alternative',
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
      'Conducted field research in critical tiger landscapes, including Ranthambore (Rajasthan), Manas Tiger Reserve (Assam), and Kaziranga National Park (Assam)',
      'Collated and analysed ecological data on tigers, co-predators, prey populations, and habitat quality by using camera traps, line transects, sign surveys, and vegetation sampling',
      'Contributed to national tiger population assessments, supporting conservation strategies under India’s Tiger Monitoring Program',
      'Gained hands-on experience in wildlife monitoring, field data collection, and ecological survey techniques in diverse forest ecosystems',
    ],
  },
  {
    name: 'Nature Club Surat',
    position: 'Independent Grant',
    url: 'https://www.natureclubsurat.org/',
    startDate: '2012-07-01',
    endDate: '2013-06-30',
    summary:
      'The grant was part of the project titled “Documentation of Amphibian, Reptilian and Avian Diversity of Purna Wildlife Sanctuary, Dang District, Gujarat”.',
    highlights: [
      'Conducted biodiversity surveys using point transects, fixed-point counts (birds), and visual encounter surveys (VES) to assess species richness',
      'Performed extensive nocturnal surveys for amphibians and reptiles, contributing to baseline data in an understudied forest ecosystem',
      'Submitted findings to Nature Club, Surat and the Gujarat Forest Department, supporting conservation planning',
      'Data utilized for M.Sc. Dissertation (Dept. of Zoology, MSU Vadodara), enhancing academic and field research integration',
    ],
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
      'Conducted field surveys across protected areas in Gujarat to collect data on vegetation, soil, and land use/land cover for satellite image validation',
      'Laid out standardized vegetation plots (31.62 × 31.62 m, 10 × 10 m, and 1 × 1 m) as per National Remote Sensing Centre protocols ',
      'Collected and identified plant specimens, contributing to herbarium preparation and species documentation',
      'Gained valuable experience in integrating ground-based biodiversity data with remote sensing outputs for landscape-level ecological assessment',
    ],
  },
];

export default work;
