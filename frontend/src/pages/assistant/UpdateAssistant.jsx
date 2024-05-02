import React from 'react'
import PageTitle from '../../components/PageTitle'
import AssistantForm from '../../components/AssistantForm';

function UpdateAssistant() {
  const initialValues = {}; // Fetch initial values for updating Assistant

    const handleSubmit = (formData) => {
        // Handle form submission for updating Assistant
        console.log(formData);
    };
  return (
    <div>
      <PageTitle activeMenu={"Modifier un assistant"} motherMenu={"Assistant"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'un assistant</h5>
            </div>
            <div className='card-body'>
            <AssistantForm mode="update" initialValues={initialValues} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateAssistant
