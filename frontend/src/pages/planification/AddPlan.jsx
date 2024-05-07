import React,{useState, useEffect} from 'react'
import PageTitle from '../../components/PageTitle'
import Select from 'react-select';
import { Nav, Pagination} from "react-bootstrap";
import {ClasseOption, education_a_Option} from '../../data/OptionData'
import PlanSection from '../../components/PlanSection';
import { Link } from 'react-router-dom';
import JournePagination from '../../components/JournePagination';
const AddPlan = () => {
    const [classe, setClasse]= useState('');
    const [theme, setTheme] = useState('');
    const [subTheme, setSubTheme] = useState('');
    const [education_a, setEducation_a] = useState('');
    const [activePage, setActivePage] = useState(1);

    // Simulated API call when classe changes
    //useEffect(() => {
    //if (classe) {
   //   fetchDataForClass(classe).then((data) => {
        // Update state variables with fetched data
    //    setTheme(data.theme);
    //    setSubTheme(data.subTheme);
    //    setEducation_a(data.education_a);
        // You can also update other relevant state variables based on fetched data
   //   });
 //   }
//  }, [classe]);
   // Only re-run the effect if classe changes


    const handleClasseChange=(e) =>{
        setClasse(e.target.value)
    };
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleSubThemeChange = (e) => {
    setSubTheme(e.target.value);
  };

  const handleEducationAChange = (e) => {
    setEducation_a(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  return (
<>
      <PageTitle activeMenu={'Ajouter une Planification'} motherMenu={'Planification'} />
      <div className='doc-container'>
        <div className='text-area'>
          <div className='col-xl-12'>
            <div className='card'>
              <div className='card-body'>
                <form className='needs-validation' noValidate=''>
                  <div className='row'>
                    {/*classe*/}
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='classe'>classe:</label>
                      <Select
                        isSearchable={false}
                        options={ClasseOption}
                        className='custom-react-select'
                        value={ClasseOption.find((opt) => opt.value === classe)}
                        onChange={handleClasseChange}
                      />
                      <div className='invalid-feedback'>Vous devez entrer la classe.</div>
                    </div>
                    {/*theme*/}
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='theme'>thème de l'unité</label>
                      <input
                        type='text'
                        className='form-control'
                        id='theme'
                        placeholder=''
                        value={theme}
                        onChange={handleThemeChange}
                        required
                      />
                      <div className='invalid-feedback'>Vous devez enter le theme.</div>
                    </div>
                    {/*soustheme*/}
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='sous-theme'>sous-thème du module</label>
                      <input
                        type='text'
                        className='form-control'
                        id='subTheme'
                        placeholder=''
                        value={subTheme}
                        onChange={handleSubThemeChange}
                        required
                      />
                      <div className='invalid-feedback'>Vous devez enter le sous-theme.</div>
                    </div>
                    {/*education a*/}
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='education_a'>éducation à</label>
                      <Select
                        isSearchable={false}
                        options={education_a_Option}
                        className='custom-react-select'
                        value={education_a_Option.find((opt) => opt.value === education_a)}
                        onChange={handleEducationAChange}
                      />
                    </div>
                    <hr />
                      <JournePagination activePage={activePage} handlePageChange={handlePageChange} />
                    <PlanSection/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='document-preview'>
    c
        </div>
        
      </div>
    </>
  );
};

export default AddPlan;
