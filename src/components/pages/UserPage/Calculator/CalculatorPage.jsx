 import {FormReq} from '../../Home/FormRequest';
import {SummaryPage} from './SummaryPage'; 

const CalculatorPage = () => { 
  return (  
    <div className="flex-xl-row flex-xs-column d-flex flex-wrap overflow-hidden"> 
     <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 pb-5"> <FormReq/> </div> 
     <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2 mt-3 justify-content-center align-content-center"><SummaryPage/></div> 
  </div> 
  );
};

export default CalculatorPage;

