import React from 'react'
import PageTitle from '../../components/PageTitle'
import InspectorForm from '../../components/InspectorForm';


function AddInspector() {
  
  const handleSubmit = (formData) => {
    // Handle form submission for adding Inspector
    console.log(formData);
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un inspecteur"} motherMenu={"Inspecteur"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'un inspecteur</h5>
            </div>
            <div className='card-body'>
            <InspectorForm mode="add" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddInspector
