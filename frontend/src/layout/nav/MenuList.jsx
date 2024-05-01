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
            title: 'Voir les Évènements',
            to: 'AllEvents',					
        },
        {
          title: 'Ajouter un Évènement',
          to: 'AddEvent',
      },
      {
          title: 'Modifier un Évènement',
          to: 'UpdateEvent',
      },
      {
        title: 'Supprimer un Évènement',
        to: 'DeleteEvent',
    }, 
  ]
  },
  {
    title: "École",
    classsChange: "mm-collapse",
    iconStyle: <i className="la la-building" />,
    content: [
      {
        title: "Voir Les Écoles",
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
        title: "Supprimer une École",
        to: "DeleteSchool",
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
            title: 'Supprimer un Inspecteur',
            to: 'DeleteInspector',
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
              title: 'Ajouter un Assistant',
              to: 'AddAssistant',
          },
          {
              title: 'Modifier un Assistant',
              to: 'UpdateAssistant',
          },
          {
            title: 'Supprimer un Assistant',
            to: 'DeleteAssistant',
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
            title: 'Ajouter un directeurs',
            to: 'AddHeadmaster',
        },
        {
            title: 'Modifier un directeurs',
            to: 'UpdateHeadmaster',
        },
        {
          title: 'Supprimer un directeurs',
          to: 'DeleteHeadmaster',
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
        to: 'Calendar',

      },
      //Management
      {
        title: "Gestion d'événements",	        
        iconStyle: <i className="la la-calendar-plus-o" />,   
        content: [
          {
            title: 'Voir les Évènements',
            to: 'AllEvents',					
        },
        {
          title: 'Ajouter un Évènement',
          to: 'AddEvent',
      },
      {
          title: 'Modifier un Évènement',
          to: 'UpdateEvent',
      },
      {
        title: 'Supprimer un Évènement',
        to: 'DeleteEvent',
    }, 
  ]
  },
  {
    title: "École",
    classsChange: "mm-collapse",
    iconStyle: <i className="la la-building" />,
    content: [
      {
        title: "Voir Les Écoles",
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
            title: "Voir Mon Profil",
            to: "InspectorProfile",
          },
          {
            title: "Modifier Mon Profil",
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
              title: 'Voir les Évènements',
              to: 'AllEvents',					
          },
          {
            title: 'Ajouter un Évènement',
            to: 'AddEvent',
        },
        {
            title: 'Modifier un Évènement',
            to: 'UpdateEvent',
        },
        {
          title: 'Supprimer un Évènement',
          to: 'DeleteEvent',
      }, 
      ]
      },
      {
        title: "École",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-building" />,
        content: [
          {
            title: "Voir Les Écoles",
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
              title: 'Ajouter un Assistant',
              to: 'AddAssistant',
          },
          {
              title: 'Modifier un Assistant',
              to: 'UpdateAssistant',
          },
          {
            title: 'Supprimer un Assistant',
            to: 'DeleteAssistant',
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
            title: 'Supprimer un Rapport',
            to: 'DeleteRapport',
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
            title: "Voir Mon Profil",
            to: "AssistantProfile",
          },
          {
            title: "Modifier Mon Profil",
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
                title: 'Voir les Évènements',
                to: 'AllEvents',					
            },
            {
              title: 'Ajouter un Évènement',
              to: 'AddEvent',
          },
          {
              title: 'Modifier un Évènement',
              to: 'UpdateEvent',
          },
          {
            title: 'Supprimer un Évènement',
            to: 'DeleteEvent',
        }, 
      ]
      },
      {
        title: "École",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-building" />,
        content: [
          {
            title: "Voir Les Écoles",
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
            title: 'Supprimer un Rapport',
            to: 'DeleteRapport',
        },   
        ]
      }
    ],
  };
  