import React from 'react';
import PageTitle from '../../components/PageTitle';
import Profil from '../../components/Profil';

function TeacherProfile() {
  const profileType = 'enseignant'; 
  return (
    <div>
      <PageTitle activeMenu={"Profil de " + profileType} motherMenu={"Profil"} />
      <Profil profileType={profileType} />
    </div>
  );
}

export default TeacherProfile;