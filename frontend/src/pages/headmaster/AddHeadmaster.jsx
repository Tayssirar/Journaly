import React from 'react'
import PageTitle from '../../components/PageTitle'
import HeadmasterForm from '../../components/HeadmasterForm';


function AddHeadmaster() {
  
  const handleSubmit = (formData) => {
    // Handle form submission for adding Headmaster
    console.log(formData);
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un directeur"} motherMenu={"Directeur"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations du directeur</h5>
            </div>
            <div className='card-body'>
            <HeadmasterForm mode="add" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddHeadmaster
