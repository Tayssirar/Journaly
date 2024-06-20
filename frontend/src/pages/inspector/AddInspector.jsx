import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import InspectorForm from '../../components/InspectorForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddInspector() {
  const navigate = useNavigate();
  const [schoolOptions, setSchoolOptions] = useState([]);

  useEffect(() => {
      const fetchSchoolOptions = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/schools');
              setSchoolOptions(response.data.map(school => ({ value: school._id, label: school.name })));
          } catch (error) {
              console.error('Error fetching school options:', error);
          }
      };

      fetchSchoolOptions();
  }, []);

  const handleSubmit = async (formData) => {
      try {
          await axios.post('http://localhost:5000/api/inspectors/add', formData);
          navigate('/AllInspectors');
      } catch (error) {
          console.error('Error adding inspector:', error);
      }
  };

  return (
      <div>
          <PageTitle activeMenu={"Ajouter un inspecteur"} motherMenu={"Inspecteur"} />
          <div className='row'>
              <div className="col-xl-12 col-xxl-12 col-sm-12">
                  <div className='card'>
                      <div className="card-header">
                          <h5 className="card-title">Les informations d'un inspecteur</h5>
                      </div>
                      <div className='card-body'>
                          <InspectorForm 
                              mode="add" 
                              onSubmit={handleSubmit} 
                              schoolOptions={schoolOptions} 
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default AddInspector;
