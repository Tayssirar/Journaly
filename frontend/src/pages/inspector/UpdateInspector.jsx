import React from 'react'
import PageTitle from '../../components/PageTitle'
import InspectorForm from '../../components/InspectorForm';

function UpdateInspector() {
  const initialValues = {}; // Fetch initial values for updating Inspector

    const handleSubmit = (formData) => {
        // Handle form submission for updating Inspector
        console.log(formData);
    };
  return (
    <div>
      <PageTitle activeMenu={"Modifier un inspecteur"} motherMenu={"Inspecteur"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'un inspecteur</h5>
            </div>
            <div className='card-body'>
            <InspectorForm mode="update" initialValues={initialValues} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateInspector
