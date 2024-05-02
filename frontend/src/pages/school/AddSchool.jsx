import React from 'react'
import PageTitle from '../../components/PageTitle'
import SchoolForm from '../../components/SchoolForm';


function AddSchool() {
  
  const handleSubmit = (formData) => {
    // Handle form submission for adding School
    console.log(formData);
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter une école"} motherMenu={"École"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'une école</h5>
            </div>
            <div className='card-body'>
            <SchoolForm mode="add" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSchool
