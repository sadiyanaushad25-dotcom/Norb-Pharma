import InfoBox from '../components/InfoBox/InfoBox'
import { infoSection1, infoSection2, infoSection3, infoSectionSpan } from '../constants/keywords';

const InfoSection = () => {
  return (
    <div>
        <InfoBox title="More about us">
            <p>{infoSection1}</p>
            <p>{infoSection2}</p>
            <p>{infoSection3}</p>
            <p style={{color:"rgb(238,224,122)", fontStyle:"italic"}}>{infoSectionSpan}</p>
        </InfoBox>
    </div>
  )
}

export default InfoSection;
