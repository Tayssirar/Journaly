export const MenuList = {
    headmaster:[
      {
        title: "Accueil",
        to: "HeadmasterDashboard",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-home" />,
      },
      {
        title: "Profil",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-user" />,
        content: [
          {
            title: "Voir Mon Profil",
            to: "headmasterProfile",
          },
          {
            title: "Modifier Mon Profil",
            to: "UpdateHeadmasterProfile",
          },
        ],
      },
      //Calendar 
      {
        title: 'Calendrier',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="la la-calendar" />,
Cto: 'a'

      },
        //Management
        {
            title: "Gestion d'événements",	        
            to:"event-management",
            iconStyle: <i className="la la-calendar-plus-o" />,        
        },
      {
        title: "École",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-building" />,
        content: [
          {
            title: "Voir Mon École",
            to: "SchoolProfile",
          },
          {
            title: "Modifier Mon École",
            to: "UpdateSchoolProfile",
          },
        ],
      },
      {
        title: "Enseignants",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-users" />,
        content: [
          {
            title: "Voir les enseignants",
            to: "AllTeachers",
          },
          {
            title: "Modifier Un Enseignant",
            to: "UpdateTeacher",
          },
          {
            title: "Ajouter Un Enseignant",
            to: "AddTeacher",
          },
          {
            title: "Supprimer Un Enseignant",
            to: "DeleteTeacher",
          },
        ],
      },
      {
        title: "Élève",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-group" />,
        content: [
          {
            title: "Voir les élèves",
            to: "AllStudents",
          },
          {
            title: "Modifier Un Élève",
            to: "UpdateStudent",
          },
          {
            title: "Ajouter Un Élève",
            to: "AddStudent",
          },
          {
            title: "Supprimer Un Élève",
            to: "DeleteStudent",
          },
        ],
      }
    ],
    Teacher: [
      {
        title: "Accueil",
        to: "TeacherDashboard",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-home" />,
      },
      {
        title: "Profil",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-users" />,
        content: [
          {
            title: "Profil",
            to: "TeacherProfile",
          },
          {
            title: "Modifier Mon Profil",
            to: "UpdateTeacherProfile",
          },
        ],
      },
      //Calendar 
      {
        title: 'Calendrier',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="la la-calendar" />,
        to: 'Calendar',

      },
        //Management
        {
            title: "Gestion d'événements",	        
            to:"eventManagement",
            iconStyle: <i className="la la-calendar-plus-o" />,        
        },
      {
        title: "École",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-building" />,
        content: [
          {
            title: "Voir Mon École",
            to: "SchoolProfile",
          },
        ],
      },
      {
        title: "Élève",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-group" />,
        content: [
          {
            title: "Voir les élèves",
            to: "AllStudents ",
          },
        ],
      },
          //Planification    
      {
        title: 'Planification',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="la la-copy" />,
        content: [
            {
                title: 'Toutes Les Planification',
                to: 'AllPlan',					
            },
            {
                title: 'Ajouter une Planification',
                to: 'AddPlan',
            },
            {
                title: 'Modifier une Planification',
                to: 'UpdatePlan',
            },
          
        ],
    },
      //Journal   
      {
        title: 'Journal',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="la la-book" />,
        content: [
            {
                title: 'Tous les cahiers Journal',
                to: 'AllJournal',					
            },
            {
                title: 'Ajouter un Journal',
                to: 'AddJournal',
            },
            {
                title: 'Modifier un Journal',
                to: 'UpdateJournal',
            },            
        ],
    },
      //Exam   
      {
        title: 'Examen',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="la la-certificate" />,
        content: [
            {
                title: 'Tous les examens',
                to: 'AllExams',					
            },
            {
                title: 'Ajouter un examen',
                to: 'AddExam',
            },
            {
                title: 'Modifier un examen',
                to: 'UpdateExam',
            },            
        ],
    },
          //Rapport   
          {
            title: 'Rapport',	
            classsChange: 'mm-collapse',		
            iconStyle: <i className="la la-file-text" />,
            content: [
                {
                    title: 'Voir les rapports',
                    to: 'AllRapport',					
                },
            ]
              }

    ],
    Inspector: [
      {
        title: "Student Menu",
        classsChange: "menu-title",
        extraclass: "first",
      },
      {
        title: "Accueil",
        to: "InspectorDashboard",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-home" />,
      },
      {
        title: "Calendrier",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-users" />,
        to: "calendrier",
      },
      


    ],
  };
  