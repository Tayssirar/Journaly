export const MenuList = {
    admin: [
      {
        title: "Accueil",
        to: "AdminDashboard",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-home" />,
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
        iconStyle: <i className="la la-calendar-plus-o" />,   
        content: [
          {
            title: 'Voir les évènements',
            to: 'AllEvents',					
        },
        {
          title: 'Ajouter un évènement',
          to: 'AddEvent',
      },
      {
          title: 'Modifier un évènement',
          to: 'UpdateEvent',
      },
      {
        title: "Voir un évènement",
        to: 'Event',
    }, 
  ]
  },
  {
    title: "École",
    classsChange: "mm-collapse",
    iconStyle: <i className="la la-building" />,
    content: [
      {
        title: "Voir les écoles",
        to: "AllSchools",
      },
      {
        title: "Ajouter une École",
        to: "AddSchool",
      },

      {
        title: "Modifier une École",
        to: "UpdateSchool",
      },      
      {
        title: "Voir le profil d'une école",
        to: "SchoolProfile",
      },
    ],
  },
      {
        title: 'Inspecteur',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="las la-user-friends" />,
        content: [
            {
                title: 'Voir les Inspecteurs',
                to: 'AllInspectors',					
            },
            {
              title: 'Ajouter un Inspecteur',
              to: 'AddInspector',
          },
          {
              title: 'Modifier un Inspecteur',
              to: 'UpdateInspector',
          },
          {
            title: "Voir le profil d'un Inspecteur",
            to: 'InspectorProfile',
        }, 
      ]
    },
      {
        title: 'Assistant',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="las la-user-friends" />,
        content: [
            {
                title: 'Voir les Assistants',
                to: 'AllAssistants',					
            },
            {
              title: 'Ajouter un assistant',
              to: 'AddAssistant',
          },
          {
              title: 'Modifier un assistant',
              to: 'UpdateAssistant',
          },
          {
            title: "Voir le profil d'un assistant",
            to: 'AssistantProfile',
        }, 
      ]
    },
    {
      title: 'Directeur',	
      classsChange: 'mm-collapse',		
      iconStyle: <i className="las la-user-friends" />,
      content: [
          {
              title: 'Voir les directeurs',
              to: 'AllHeadmasters',					
          },
          {
            title: 'Ajouter un directeur',
            to: 'AddHeadmaster',
        },
        {
            title: 'Modifier un directeur',
            to: 'UpdateHeadmaster',
        },
        {
          title: "Voir le profil d'un directeur",
          to: 'HeadmasterProfile',
      }, 
    ]
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
            title: "Modifier un enseignant",
            to: "UpdateTeacher",
          },
          {
            title: "Ajouter un enseignant",
            to: "AddTeacher",
          },
          {
            title: "Voir le profil d'un enseignant",
            to: "TeacherProfile",
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
            title: "Modifier un élève",
            to: "UpdateStudent",
          },
          {
            title: "Ajouter un élève",
            to: "AddStudent",
          },
          {
            title: "Voir le profil d'un élève",
            to: "StudentProfile",
          },
        ],
      }
    ],
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
            title: "Voir mon profil",
            to: "HeadmasterProfile",
          },
          {
            title: "Modifier mon profil",
            to: "UpdateHeadmasterProfile",
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
        iconStyle: <i className="la la-calendar-plus-o" />,   
        content: [
          {
            title: 'Voir les évènements',
            to: 'AllEvents',					
        },
        {
          title: 'Ajouter un évènement',
          to: 'AddEvent',
      },
      {
          title: 'Modifier un évènement',
          to: 'UpdateEvent',
      },
      {
        title: "Voir un évènement",
        to: 'Event',
    }, 
  ]
  },
  {
    title: "École",
    classsChange: "mm-collapse",
    iconStyle: <i className="la la-building" />,
    content: [
      {
        title: "Voir les écoles",
        to: "AllSchools",
      },
    ],
  },
      {
        title: "École",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-building" />,
        content: [
          {
            title: "Voir mon école",
            to: "SchoolProfile",
          },
          {
            title: "Modifier mon école",
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
            title: "Modifier un enseignant",
            to: "UpdateTeacher",
          },
          {
            title: "Ajouter un enseignant",
            to: "AddTeacher",
          },
          {
            title: "Voir le profil d'un enseignant",
            to: "TeacherProfile",
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
            title: "Modifier un élève",
            to: "UpdateStudent",
          },
          {
            title: "Ajouter un élève",
            to: "AddStudent",
          },
          {
            title: "Voir le profil d'un élève",
            to: "StudentProfile",
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
            title: "Modifier mon profil",
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
            title: "Voir mon école",
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
                title: 'Toutes les planifications',
                to: 'AllPlan',					
            },
            {
                title: 'Ajouter une planification',
                to: 'AddPlan',
            },
            {
                title: 'Modifier une planification',
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
    inspector: [
      {
        title: "Accueil",
        to: "InspectorDashboard",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-home" />,
      },
      {
        title: "Profil",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-user" />,
        content: [
          {
            title: "Voir mon profil",
            to: "InspectorProfile",
          },
          {
            title: "Modifier mon profil",
            to: "UpdateInspectorProfile",
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
          iconStyle: <i className="la la-calendar-plus-o" />,   
          content: [
            {
              title: 'Voir les évènements',
              to: 'AllEvents',					
          },
          {
            title: 'Ajouter un évènement',
            to: 'AddEvent',
        },
        {
            title: 'Modifier un évènement',
            to: 'UpdateEvent',
        },
        {
          title: "Voir un évènement",
          to: 'Event',
      }, 
      ]
      },
      {
        title: "École",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-building" />,
        content: [
          {
            title: "Voir les écoles",
            to: "AllSchools",
          },
        ],
      },
      //Assistant   
      {
        title: 'Assistant',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="las la-user-friends" />,
        content: [
            {
                title: 'Voir les Assistants',
                to: 'AllAssistants',					
            },
            {
              title: 'Ajouter un assistant',
              to: 'AddAssistant',
          },
          {
              title: 'Modifier un assistant',
              to: 'UpdateAssistant',
          },
          {
            title: "Voir le profil d'un assistant",
            to: 'AssistantProfile',
        }, 
      ]
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
            {
              title: 'Ajouter un Rapport',
              to: 'AddRapport',
          },
          {
              title: 'Modifier un Rapport',
              to: 'UpdateRapport',
          },
          {
            title: "Voir un Rapport",
            to: 'Rapport',
        },   
        ]
      }
    ],
    assistant: [
      {
        title: "Accueil",
        to: "AssistantDashboard",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-home" />,
      },
      {
        title: "Profil",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-user" />,
        content: [
          {
            title: "Voir mon profil",
            to: "AssistantProfile",
          },
          {
            title: "Modifier mon profil",
            to: "UpdateAssistantProfile",
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
            iconStyle: <i className="la la-calendar-plus-o" />,   
            content: [
              {
                title: 'Voir les évènements',
                to: 'AllEvents',					
            },
            {
              title: 'Ajouter un évènement',
              to: 'AddEvent',
          },
          {
              title: 'Modifier un évènement',
              to: 'UpdateEvent',
          },
          {
            title: "Voir le profil d'un évènement",
            to: 'Event',
        }, 
      ]
      },
      {
        title: "École",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-building" />,
        content: [
          {
            title: "Voir les écoles",
            to: "AllSchools",
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
            {
              title: 'Ajouter un Rapport',
              to: 'AddRapport',
          },
          {
              title: 'Modifier un Rapport',
              to: 'UpdateRapport',
          },
          {
            title: 'Voir un Rapport',
            to: 'Rapport',
        },   
        ]
      }
    ],
  };
  