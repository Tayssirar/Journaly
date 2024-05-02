import React from 'react'
import PageTitle from '../../components/PageTitle'
import StudentForm from '../../components/StudentForm';


function AddStudent() {
  
  const handleSubmit = (formData) => {
    // Handle form submission for adding Student
    console.log(formData);
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un élève"} motherMenu={"Élève"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'un élève</h5>
            </div>
            <div className='card-body'>
            <StudentForm mode="add" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
