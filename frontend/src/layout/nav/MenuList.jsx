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
            to: "headmaster-profile",
          },
          {
            title: "Modifier Mon Profil",
            to: "edit-headmaster-profile",
          },
        ],
      },
      //Calendar 
      {
        title: 'Calendrier',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="la la-calendar" />,
        to: 'app-calender'

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
            to: "school-profile",
          },
          {
            title: "Modifier Mon École",
            to: "edit-school-profile",
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
            to: "teacher-list",
          },
          {
            title: "Modifier Un Enseignant",
            to: "edit-teacher",
          },
          {
            title: "Ajouter Un Enseignant",
            to: "add-teacher",
          },
          {
            title: "Supprimer Un Enseignant",
            to: "delete-teacher",
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
            to: "students-list",
          },
          {
            title: "Modifier Un Élève",
            to: "edit-student",
          },
          {
            title: "Ajouter Un Élève",
            to: "add-student",
          },
          {
            title: "Supprimer Un Élève",
            to: "delete-student",
          },
        ],
      }
    ],
    teacher: [
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
            to: "teacher-profile",
          },
          {
            title: "Modifier Mon Profil",
            to: "edit-teacher-profile",
          },
        ],
      },
      //Calendar 
      {
        title: 'Calendrier',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="la la-calendar" />,
        to: 'app-calender'

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
            to: "school-profile",
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
            to: "students-list",
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
                to: 'all-plan',					
            },
            {
                title: 'Ajouter une Planification',
                to: 'add-plan',
            },
            {
                title: 'Modifier une Planification',
                to: 'edit-plan',
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
                to: 'all-journal',					
            },
            {
                title: 'Ajouter un Journal',
                to: 'add-journal',
            },
            {
                title: 'Modifier un Journal',
                to: 'edit-journal',
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
                to: 'all-journal',					
            },
            {
                title: 'Ajouter un examen',
                to: 'add-journal',
            },
            {
                title: 'Modifier un examen',
                to: 'edit-journal',
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
                    to: 'all-journal',					
                },
            ]
              }

    ],
    student: [
      {
        title: "Student Menu",
        classsChange: "menu-title",
        extraclass: "first",
      },
      {
        title: "Accueil",
        to: "dashboard",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-home" />,
      },
      {
        title: "Calendrier",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-users" />,
        to: "app-calender",
      },
      {
        title: "Journal",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-book" />,
        content: [
          {
            title: "Tous les Journals",
            to: "all-library",
          },
          {
            title: "Ajouter un Journal",
            to: "add-library",
          },
          {
            title: "Modifier un Journal",
            to: "edit-library",
          },
        ],
      },
    ],
  };
  