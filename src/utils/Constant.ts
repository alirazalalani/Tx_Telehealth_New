import {Images} from '../constants';

export const diseases = [
  {
    id: '1',
    diseaseName: 'Sick Visits',
    diseaseTypes: [
      {
        name: 'Sinus infections',
        image: require('../assets/images/sinus_infection.png'),
      },
      {
        name: 'Bronchitis',
        image: require('../assets/images/bronchitis.png'),
      },

      {name: 'Covid-19', image: require('../assets/images/covid.png')},
      {
        name: 'Strep throat',
        image: require('../assets/images/strep_throat.png'),
      },
      {name: 'Pink eye', image: require('../assets/images/pink_eye.png')},
    ],
  },
  {
    id: '2',
    diseaseName: 'Skin Conditions',
    diseaseTypes: [
      {
        name: 'Infections',
        image: require('../assets/images/infection.png'),
      },
      {
        name: 'Rashes',
        image: require('../assets/images/rashes.png'),
      },
      {name: 'Acne', image: require('../assets/images/acne.png')},
      {
        name: 'Cold sores',
        image: require('../assets/images/cold_sores.png'),
      },
      {
        name: 'Ringworm',
        image: require('../assets/images/ring_worm.png'),
      },
    ],
  },
  {
    id: '3',
    diseaseName: `Women's Health`,
    diseaseTypes: [
      {name: 'UTI', image: require('../assets/images/womens.png')},
      {
        name: 'Yeast',
        image: require('../assets/images/womens.png'),
      },
      {name: 'BV', image: require('../assets/images/womens.png')},
      {
        name: 'Genital herpes',
        image: require('../assets/images/womens.png'),
      },
      {
        name: 'Birth control',
        image: require('../assets/images/womens.png'),
      },
    ],
  },
  {
    id: '4',
    diseaseName: `Mental Health`,
    diseaseTypes: [
      {
        name: 'Depression',
        image: require('../assets/images/depression.png'),
      },
      {
        name: 'Anxiety',
        image: require('../assets/images/anxiety.png'),
      },
      {
        name: 'Stress',
        image: require('../assets/images/stress.png'),
      },
      {
        name: 'Bipolar',
        image: require('../assets/images/bipolar.png'),
      },
    ],
  },
  {
    id: '5',
    diseaseName: `Allergies`,
    diseaseTypes: [
      {
        name: 'Seasonal',
        image: require('../assets/images/seasonal.png'),
      },
      {
        name: 'Sinusitis',
        image: require('../assets/images/sinus_infection.png'),
      },
      {name: 'Hives', image: require('../assets/images/hives.png')},
      {
        name: 'Eye Allergies',
        image: require('../assets/images/eye_allergy.png'),
      },
    ],
  },
  {
    id: '6',
    diseaseName: `Chronic Conditions`,
    diseaseTypes: [
      {
        name: 'Weight Loss',
        image: require('../assets/images/weight_loss.png'),
      },
      {
        name: 'Diabetes',
        image: require('../assets/images/diabetes.png'),
      },
      {
        name: 'High cholesterol',
        image: require('../assets/images/high_cholestrol.png'),
      },
      {
        name: 'Hypertension',
        image: require('../assets/images/hyper_tension.png'),
      },
      {
        name: 'Hypothyroid',
        image: require('../assets/images/hypo_thyroid.png'),
      },
    ],
  },
  {
    id: '7',
    diseaseName: `Stomach`,
    diseaseTypes: [
      {
        name: 'Nausea & vomiting',
        image: require('../assets/images/nausea.png'),
      },
      {name: 'Acid reflux', image: require('../assets/images/acid.png')},
      {name: 'Diarrhea', image: require('../assets/images/diarrhae.png')},
      {
        name: 'Constipation',
        image: require('../assets/images/consti.png'),
      },
    ],
  },
  {
    id: '8',
    diseaseName: `Pain`,
    diseaseTypes: [
      {name: 'Back pain', image: require('../assets/images/back_pain.png')},
      {name: 'Gout flare', image: require('../assets/images/gout.png')},
      {name: 'Arthritis', image: require('../assets/images/arthritis.png')},
      {name: 'Headaches', image: require('../assets/images/head.png')},
    ],
  },
];

export const profile = [
  {
    desc: 'txtelehealth.com',
    img: Images.GLOBE,
  },
  {
    desc: 'info@txtelehealth.com',
    img: Images.EMAIL,
  },
  {
    desc: '@txtelehalth',
    img: Images.FB,
  },
  {
    desc: '@txtelehalth',
    img: Images.YT,
  },
];

export const highlights = [
  'Same day appointments, within minutes.',
  'Doctor calls at the time you choose.',
  'Covered by insurance.',
  'Self pay only costs $49.',
  'Treatment for all ages.',
  'All of our doctors live in texas.',
  'Talk to the doctor from the comfort of your home, work, vehicle or anywhere convenient to you.',
];
