import Mattel from '../Recursos/Legal Mattel-01.png';
import Barnum from '../Recursos/Legal Barnum-01.png';
import BarnumLink from '../Recursos/Legal Barnum Link-01.png';

const InfrmacionLegal = () => {
  return (
    <div className='informacion-legal-container'>
        <img src={Mattel} alt='Info legal Mattel' className='mattel'/>
        <img src={Barnum} alt='Info legal Barnum' className='barnum'/>
        <a href='https://www.barnum.cl'>
          <img src={BarnumLink} alt='Link Barnum' className='linkbarnum'/>
        </a>
      </div>
  );
};

export default InfrmacionLegal;