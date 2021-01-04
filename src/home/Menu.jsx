
    

export const Menu = [
  {
      name:"Home",
      fixMenu:true,
      path:"/dashboard",
   
  },
  {
      name:"Services",
      icon:"menu-icon fa fa-cogs",
      path:"",
      // fixMenu:false,
      childrens:[
          {
              name:"MOBILE APP DEVELOPMENT",
              a1:"Android App Development",
            //   a2:"iOS App Development",
            //   a3:"Hybrid App Development",
            //   a4:"Java Development",
              path:"",
              icon:"fa fa-puzzle-piece",
              
              
          },
          {
              name:"Create",
              path:"",
              icon:"fa fa-id-badge"
          },
      ]
  },
  {
    name:"Solution",
    icon:"menu-icon fa fa-cogs",
    path:"",
    // fixMenu:false,
    childrens:[
        {
            name:"List",
            path:"",
            icon:"fa fa-puzzle-piece"
        },
        {
            name:"Create",
            path:"",
            icon:"fa fa-id-badge"
        },
    ]
},
{
  name:"Product",
  icon:"menu-icon fa fa-cogs",
  path:"",
  // fixMenu:false,
  childrens:[
      {
          name:"List",
          path:"",
          icon:"fa fa-puzzle-piece"
      },
      {
          name:"Create",
          path:"",
          icon:"fa fa-id-badge"
      },
  ]
},
]
