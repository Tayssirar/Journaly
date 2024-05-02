import React from 'react'
import PageTitle from '../../components/PageTitle'
import SchoolForm from '../../components/SchoolForm';

function UpdateSchool() {
  const initialValues = {}; // Fetch initial values for updating School

    const handleSubmit = (formData) => {
        // Handle form submission for updating School
        console.log(formData);
    };
  return (
    <div>
      <PageTitle activeMenu={"Modifier une école"} motherMenu={"École"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'une école</h5>
            </div>
            <div className='card-body'>
            <SchoolForm mode="update" initialValues={initialValues} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateSchool
