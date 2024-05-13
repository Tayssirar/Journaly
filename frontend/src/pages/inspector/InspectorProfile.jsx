import React from 'react';
import PageTitle from '../../components/PageTitle';
import Profil from '../../components/Profil';

function InspectorProfile() {
  const profileType = 'inspecteur'; 
  return (
    <div>
      <PageTitle activeMenu={"Profile de " + profileType} motherMenu={"Profile"} />
      <Profil profileType={profileType} />
    </div>
  );
}

export default InspectorProfile;