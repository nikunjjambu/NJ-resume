// src/data/resume/publications.ts

export interface Publication {
  title: string;
  journal: string;
  date: string; // format “YYYY-MM-DD”
  link: string; // full URL to the paper
}

const publications: Publication[] = [
  {
    title:
      'Sighting of Black-capped Kingfisher (Halcyon pileata) from  Charakla Salt pans, Devbhumi Dwarka',
    journal: 'Flamingo Gujarat',
    date: '2023-03-01',
    link: 'https://flamingogujarat.com/wp-content/uploads/2023/05/Sighting-of-Black-Capped-Kingfisher-Halcyon-pileate-from-Charakla-Salt-pans-Devbhumi-Dwarka.pdf',
  },
  {
    title:
      'Birds of Surat-Dangs: a consolidated checklist of 75 years (1944–2020) with special emphasis on noteworthy bird records and bird hotspots from northern Western Ghats of Gujarat, India',
    journal: 'Journal of Threatened Taxa',
    date: '2021-06-26',
    link: 'https://doi.org/10.11609/jott.6259.13.7.18752-18780',
  },
  {
    title:
      'Identification of Warbler species using Bioacoustics in Purna Wildlife Sanctuary, Gujarat, India',
    journal: 'Indian Forester',
    date: '2020-11-01',
    link: 'https://www.researchgate.net/publication/344402911_Identification_of_Warbler_species_using_Bioacoustics_in_Purna_Wildlife_Sanctuary_Gujarat_India',
  },
  {
    title: 'First record of erythrism in Eutropis cf macularia from Vadodara, Gujarat',
    journal: 'Zoos Print Journal',
    date: '2020-06-01',
    link: 'https://www.researchgate.net/publication/342349509_First_record_of_erythrism_in_Eutropis_cf_macularia_from_Vadodara_Gujarat',
  },
  {
    title:
      'Observatory note on territorial fight of Common Krait Bungarus caeruleus from Anaikatti Hills, Kerala, India',
    journal: 'Zoos Print Journal',
    date: '2019-12-21',
    link: 'https://zoosprint.org/index.php/zp/article/view/5623',
  },
  {
    title:
      'Note on first record of Asian Desert Warbler Sylvia nana at Mokarsagar Wetland Complex, Gujarat, India',
    journal: 'Zoos Print Journal',
    date: '2019-09-21',
    link: 'https://zoosprint.org/index.php/zp/article/view/5503',
  },
  {
    title:
      'Avifaunal Survey to Understand Bird- Habitat Linkages at Khijadiya Wildlife Sanctuary and Gosabara Wetland in Gujarat.',
    journal: 'Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH',
    date: '2017-08-01',
    link: 'https://indo-germanbiodiversity.com/pdf/publication/publication15-12-2017-1513310895.pdf',
  },
  {
    title:
      'Biodiversity Characterisation at landscape level in North-West India and Lakshadweep Islands using Satellite Remote Sensing and Geographic Information System',
    journal: 'Indian Institute of Remote Sensing',
    date: '2011-10-01',
    link: 'https://www.researchgate.net/publication/320443319_Biodiversity_Characterisation_at_landscape_level_in_North-West_India_and_Lakshadweep_Islands_using_Satellite_Remote_Sensing_and_Geographic_Information_System',
  },
  // …add more entries here
];

export default publications;
