import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import Form from '../../components/userAIHForm';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


function UpdateHeadmaster() {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHeadmaster = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/headmasters/${id}`);
        setInitialValues(response.data);
      } catch (error) {
        console.error('Error fetching headmaster data:', error);
      }
    };

    fetchHeadmaster();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await axios.put(`http://localhost:5000/api/headmasters/update/${id}`, formData);
      navigate('/AllHeadmasters');
    } catch (error) {
      console.error('Error updating headmaster:', error);
    }
  };

  if (!initialValues) {
    return <p>Loading...</p>;
  }

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
            <Form mode="update" initialValues={initialValues} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateHeadmaster
