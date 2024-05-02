import React from 'react'
import PageTitle from '../../components/PageTitle'
import AssistantForm from '../../components/AssistantForm';


function AddAssistant() {
  
  const handleSubmit = (formData) => {
    // Handle form submission for adding Assistant
    console.log(formData);
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un assistant"} motherMenu={"Assistant"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'un assistant</h5>
            </div>
            <div className='card-body'>
            <AssistantForm mode="add" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAssistant
