import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageTitle from '../../components/PageTitle';
import SchoolForm from '../../components/SchoolForm';

function UpdateSchool() {
  const { id } = useParams(); // Get the school ID from the URL parameters
  const [initialValues, setInitialValues] = useState(null); // State to hold the initial form values

  useEffect(() => {
    // Fetch initial values for updating School
    const fetchSchool = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/schools/${id}`);
        setInitialValues(response.data);
      } catch (error) {
        console.error('Error fetching school data:', error);
      }
    };

    fetchSchool();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/schools/${id}`, formData);
      console.log('School updated successfully:', response.data);
      // You can redirect or show a success message here
    } catch (error) {
      console.error('Error updating school:', error);
      // Handle error (e.g., show an error message)
    }
  };

  if (!initialValues) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PageTitle activeMenu={"Modifier une école"} motherMenu={"École"} />
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
  );
}

export default UpdateSchool;
