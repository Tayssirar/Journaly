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
            title: "Ajouter un enseignant",
            to: "AddTeacher",
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
            title: "Ajouter un élève",
            to: "AddStudent",
          },
          {
            title: "Performance des élèves",  // New item
            to: "StudentPerformance",
          },
        ],
      },
{  /*    {
        title: "Programmes officiels",
        classsChange: "mm-collapse",
        iconStyle: <i class="las la-book-reader"></i>,
        content: [
          {
            title: "Voir les programmes",
            to: "AllProgram",
          },
          {
            title: "Ajouter un programme",
            to: "AddProgram",
          },
        ],
      }*/}
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
  ]
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
        title: "Enseignants",
        classsChange: "mm-collapse",
        iconStyle: <i className="la la-users" />,
        content: [
          {
            title: "Voir les enseignants",
            to: "AllTeachers",
          },
          {
            title: "Ajouter un enseignant",
            to: "AddTeacher",
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
            title: "Ajouter un élève",
            to: "AddStudent",
          },
          {
            title: "Performance des élèves",  // New item
            to: "StudentPerformance",
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
            title: "Voir les événements",	        
            to:"AllEvents",
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
          {
            title: "Performance des élèves",  // New item
            to: "StudentPerformance",
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
        ],
    },
    //Note   
    {
      title: 'Notes',	
      classsChange: 'mm-collapse',		
      iconStyle: <i class="las la-graduation-cap"/>,
      content: [
          {
              title: 'Tous les notes',
              to: 'AllNotes',					
          },
          {
              title: 'Attribuer des notes',
              to: 'AddNote',
          }, 
          {
            title: 'Tableau de recensement et de classification des erreurs',
            to: 'ErrorClassification',
          } ,         
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
        to: 'Calendar'

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
        to: 'Calendar'

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
        ]
      }
    ],
  };
  