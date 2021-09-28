import { v4 as uuidv4 } from 'uuid';
import moba from '../images/moba.png';
import Paytrixx from '../images/paytrixx.png';
import proessayhelp from '../images/proessayhelp.png';
import aptofa from '../images/aptofa.png';
import tapme from '../images/tapme.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Paytrixx',
    desc:
      // 'A Cross-Platform Digital Wallet Cashless Mobile Financial Application',
      'A Cross-Platform Digital Wallet Cashless Mobile Financial Application',
    img: Paytrixx,
  },
  {
    id: uuidv4(),
    name: 'ProessayHelper',
    desc:
      // 'An app to help people to get an overview of how they can make the city beautiful.',
      'Website Platform For Essay Writers To Help Students and Professionals',
    img: proessayhelp,
  },
  {
    id: uuidv4(),
    name: 'Aptofa',
    desc:
      // 'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
      'A Cross Platform Mobile Application For People Who Have Social Anxiety To Interact With Each Other And Help Each Other',
    img: aptofa,
  },
  {
    id: uuidv4(),
    name: 'TapMeTapYou',
    desc:
      // 'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
      'Cross-Platform Dating Application Just Like Tinder Built in Flutter',
    img: tapme,
  },
  {
    id: uuidv4(),
    name: 'Luminous Glory',
    desc:
      // 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
      'A Personal MOBA Project Built in Unity3d  Will Integrate Block-chain on the Game Soon.',
    img: moba,
  },
];

export default projects;
