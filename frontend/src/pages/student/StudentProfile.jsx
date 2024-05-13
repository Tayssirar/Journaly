import React from 'react';
import PageTitle from '../../components/PageTitle';
import Profil from '../../components/Profil';

function StudentProfile() {
  const profileType = 'élève'; 
  return (
    <div>
      <PageTitle activeMenu={"Profile de " + profileType} motherMenu={"Profile"} />
      <Profil profileType={profileType} />
    </div>
  );
}

export default StudentProfile;