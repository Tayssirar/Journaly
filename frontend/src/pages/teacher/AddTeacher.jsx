import React from 'react';
import PageTitle from '../../components/PageTitle';
import TeacherForm from '../../components/TeacherForm';

function AddTeacher() {
  const handleSubmit = (formData) => {
    // Handle form submission for adding teacher
    console.log(formData);
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un enseignant"} motherMenu={"Enseignant"} />
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations de l'enseignant</h5>
            </div>
            <div className='card-body'>
              <TeacherForm mode="add" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeacher;
