import React, { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import TeacherForm from '../../components/TeacherForm'
import { Card, CardBody, CardHeader } from 'react-bootstrap';

function UpdateTeacherProfile() {
    const initialValues = {};
     // Fetch initial values for updating teacher
     const [img, setImg] = useState(''); // Initial image source

     const handleImageChange = (event) => {
       const file = event.target.files[0];
       if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
           setImg(reader.result);
         };
         reader.readAsDataURL(file);
       }
     };
        const handleSubmit = (formData) => {
            // Handle form submission for updating teacher
            console.log(formData);
        };

  return (
    <div>
      <PageTitle activeMenu={"Modifier mon profil "} motherMenu={"Profil"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">

           <Card>
            <CardHeader className="author-profile">
                <div className="author-media">
                    <img src={img} alt="" />
                    <div className="upload-link" title="Update" data-toggle="tooltip" data-placement="right" data-original-title="update">
                    <input type="file" className="update-flie" onChange={handleImageChange} />
                    <i className="fa fa-camera"></i>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
            <TeacherForm mode="update" initialValues={initialValues} onSubmit={handleSubmit} />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default UpdateTeacherProfile
