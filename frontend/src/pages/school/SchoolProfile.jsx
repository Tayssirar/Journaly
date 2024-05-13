import React from 'react';
import PageTitle from '../../components/PageTitle';
import Profil from '../../components/Profil';

function SchoolProfile() {
  const profileType = 'école'; 
  return (
    <div>
      <PageTitle activeMenu={"Profile de " + profileType} motherMenu={"Profile"} />
      <Profil profileType={profileType} />
    </div>
  );
}

export default SchoolProfile;