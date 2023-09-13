export const projectsData = [
    
    {
        id:"pacmine",
        name:"PacMine Game",
        subtitle: "Pacmine is a modified version of the popular retro game, Pacman. The objective of the game is to get the highest score possible through surviving for as long as possible.",
        start:new Date(2020, 8),
        end: new Date(2020, 11),
        featured:true,
        type:"Software",
        tags:["Python", "Game Development", "Object Oriented Programming"],
        link:{
            name: "Github Repo",
            href:"https://github.com/rmurarishetti/PacMine"
        },
        thumbnail:{
            alt:"Pacmine Thumbnail",
            href:"/images/projects/PacMine/thumbnail.jpeg"
        },
        media:[{
            video:{
                href:"https://youtu.be/q464SIDUPVQ",
                alt: "PacMine Gameplay",
                aspectRatio: 16/9
            }
        }],
        documents:[],
        people:[{
            gender: 'male',
            name: "Clement Loh",
            linkedin: "https://www.linkedin.com/in/clementlohck/"
        },
        {
            gender: 'male',
            name: "Jason Peng",
            linkedin: "https://www.linkedin.com/in/pengjingmingjason/"
        },
        {
            gender: 'female',
            name: "Athena Chua",
            linkedin: "https://www.linkedin.com/in/athena-chua"
        },
        ],
        description:[
            "Pacmine is a modified version of the popular retro game, Pacman.",
            "The objective of the game is to get the highest score possible through surviving for as long as possible.",
            "The player gets to control the yellow dot, Pacman, through the arrow keys. The arrow keys control the direction in which Pacman moves. Pacman must avoid the different hazards in the maze, one being the ghost that moves around the maze and the other being the randomly generated mines. These mines are randomly spawned every 5 seconds. The player is given a 1 second reaction time where he is invincible against the newly generated mines for 1 second. The game ends when Pacman touches any of these hazards. The score acquired is based on the amount of time the Player manages to survive in the maze."
        ]
    },
    {
        id:"mell",
        name:"Mell - Your Diabetes Whatsapp Pal",
        subtitle:"One stop solution for your diabetic medicine compliance.",
        start:new Date(2021, 4),
        end:new Date(2021, 6),
        featured: true,
        type:"Medtech",
        tags:["Health Tech", "Medical Compliance", "Hackathon"],
        link:{
            name:"Pitch Deck",
            href:"https://www.canva.com/design/DAElf8752RQ/CB3_S9LVMBlqOpjXoVEHdA/view"
        },
        thumbnail:{
            href:"/images/projects/BHH/thumbnail.png",
            alt:"BHH Thumbnail"
        },
        media:[{
            video:{
                href:"https://www.youtube.com/watch?v=DcCFBERpo9U",
                alt: "Mell Finals Pitch",
                aspectRatio: 16/9
            }
        }],
        documents:[],
        people:[],
        description:[
            "Our team tries to solve Medical Compliance in type 2 diabetes patients through Mell, your diabetes Whatsapp pal.",
            "Finalist for Beyond Health Hack, hosted by the National University of Singapore in 2021."
        ]
    },
    {
        id:"ddw",
        name:"Maximum Health Insurance Cover Prediction",
        subtitle:"Algorithm to predict maximum health insurance coverage for people based on various lifestyle choices like smoking, age, gender, and the number of dependents.",
        start:new Date(2021, 9),
        end:new Date(2021, 10),
        featured: true,
        type:"Machine Learning",
        tags:["Health Tech", "Machine Learning", "Prediction Algorithms"],
        link:{
            name:"Collab Notebook",
            href:"https://colab.research.google.com/drive/1lnjSLEV2_d-1D4lwNbJZmm7uMWS-3TTj#scrollTo=o7nw6xdPyPdY"
        },
        thumbnail:{
            href:"/images/projects/ddw/thumbnail.png",
            alt:"ddw Thumbnail"
        },
        media:[{
            video:{
                href:"https://www.youtube.com/watch?v=Vu6faRGTu4A",
                alt: "DDW Demo Video",
                aspectRatio: 16/9
            }
        }],
        documents:[],
        people:[{
            gender: 'male',
            name: "Sanat Khandekar",
            linkedin: "https://www.linkedin.com/in/sanatkhandekar"
        },
        {
            gender: 'male',
            name: "Ishan Monappa",
            linkedin: "https://www.linkedin.com/in/ishanmk"
        },
        {
            gender: 'female',
            name: "Ankita Parashar",
            linkedin: "https://www.linkedin.com/in/ankitaparashar01"
        },],
        description:[
            "Built a multiple linear regression algorithm to predict maximum health insurance coverage for people based on various lifestyle choices like smoking, age, gender, and the number of dependents."
        ]
    },
    {
        id:"des",
        name:"Wireless Charging Optimization",
        subtitle:"Optimised a regular slow wireless charger to charge 48% through improved thermals.",
        start:new Date(2021, 9),
        end:new Date(2021, 10),
        featured: true,
        type:"Engineering",
        tags:["Energy Systems", "Thermal Optimization", "Consumer Electronics"],
        link:{
            name:"Report",
            href:"https://docs.google.com/document/d/1mWVijypVRfqExAliA6o6BfZOiC8wzfu2OQhok4o5Hw8/edit?usp=sharing"
        },
        thumbnail:{
            href:"/images/projects/DES/thumbnail.png",
            alt:"DES Thumbnail"
        },
        media:[],
        people:[{
            gender: 'male',
            name: "Sanat Khandekar",
            linkedin: "https://www.linkedin.com/in/sanatkhandekar"
        },
        {
            gender: 'male',
            name: "Ishan Monappa",
            linkedin: "https://www.linkedin.com/in/ishanmk"
        },
        {
            gender: 'female',
            name: "Ankita Parashar",
            linkedin: "https://www.linkedin.com/in/ankitaparashar01"
        },],
        description:[
            "In the process of experimentation, it has been found that the forced convective methods have a profound effect on the temperatures of the wireless charger and battery. A temperature drop of almost 13 oC was recorded in the modified wireless charger with forced convection and a 5 oC was recorded in the modified charger without forced convection. The charging speed was increased by 48% in the charger with forced convection and 18% in the charger without forced convection. In conclusion, the experimentation has shown us that the efficiency of a wireless charger is improved upon better heat management like forced convection."
        ],
        documents:[]
    },
    {
        id:"fdm",
        name:"Finger Death Machine",
        subtitle:"Our game is a 2-player competitive showdown where both players compete against each other for the highest score..",
        start:new Date(2022, 0),
        end:new Date(2022, 4),
        featured: true,
        type:"Engineering",
        tags:["Computer Architechture", "Game Design", "System Design"],
        link:{
            name:"Github Repo",
            href:"https://github.com/rmurarishetti/50.002-Computation-Structures-1D-Project"
        },
        thumbnail:{
            href:"/images/projects/fdm/thumbnail.png",
            alt:"fdm Thumbnail"
        },
        media:[{
            video:{
                href:"https://youtu.be/K0dK1WSq2lk",
                alt: "FDM Demo Video",
                aspectRatio: 16/9
            }
        }],
        description:[
            "Our game is a 2-player competitive showdown where both players compete against each other for the highest score by completing a series of matrix patterns shown to them with a series of LEDs arranged in a 4 by 4 matrix. Each game is 60 seconds long beyond which users can reset the game.",

            "The game proceeds in mini rounds of 5 seconds and the overall winner will be the one who accumulates the greatest number of points at the end of 60 seconds. At each round, a random LED light-up is generated and players will have to press the buttons for a certain number of times corresponding to the LED light-up shown in the fastest possible time in order to win that round. If a player accidentally presses more than the required number of LEDs, they immediately lose the round and have to wait for their competitor until the mini round is over or the competitor also makes a mistake."
        ],
        documents:[],
        people:[]
    },
    {
        id:"heh",
        name:"Hungry Eh?",
        subtitle:"Our application aims to resolve the lack of a system to pre-order food in the SUTD canteen..",
        start:new Date(2022, 0),
        end:new Date(2022, 4),
        featured: true,
        type:"Software",
        tags:["Java", "Android", "Software Engineering"],
        link:{
            name:"Github Repo",
            href:"https://github.com/rmurarishetti/50.002-Computation-Structures-1D-Project"
        },
        thumbnail:{
            href:"/images/projects/heh/thumbnail.png",
            alt:"HungryEh Thumbnail"
        },
        media:[{
            video:{
                href:"https://youtu.be/o7z1c10pc3U",
                alt: "HungryEh Demo Video",
                aspectRatio: 9/16
            }
        }],
        description:[
            "Our application aims to resolve the lack of a system to pre-order food in the SUTD canteen as well as the inability to obtain food related information such as information regarding the allergens in the food items. Through HungryEh, we hope to help SUTD students make informed decisions about the type of food they buy, and make the process of ordering food from the SUTD canteen more convenient and less time-consuming. Our App allows SUTD students and faculty to filter food items according to dish name, stall name and its allergens, save favorites to their account, schedule an order from the canteen based on real time and allow payment using credit card/paylah."
        ],
        documents:[],
        people:[]
    }

]