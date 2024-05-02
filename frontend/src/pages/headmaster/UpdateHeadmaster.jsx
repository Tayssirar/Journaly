import React from 'react'
import PageTitle from '../../components/PageTitle'
import HeadmasterForm from '../../components/HeadmasterForm';

function UpdateHeadmaster() {
  const initialValues = {}; // Fetch initial values for updating Headmaster

    const handleSubmit = (formData) => {
        // Handle form submission for updating Headmaster
        console.log(formData);
    };
  return (
    <div>
      <PageTitle activeMenu={"Modifier un directeur"} motherMenu={"Directeur"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations du directeur</h5>
            </div>
            <div className='card-body'>
            <HeadmasterForm mode="update" initialValues={initialValues} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateHeadmaster
