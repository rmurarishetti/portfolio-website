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
    },
    {
        id:"hsclass",
        name:"Hate Speech Classification",
        subtitle:"Applying machine learning approaches to perform hate speech classification.",
        start:new Date(2022, 4),
        end:new Date(2022, 8),
        featured: true,
        type:"Machine Learning",
        tags:["Python", "SVM", "Ensemble Methods"],
        link:{
            name:"Github Repo",
            href:"https://github.com/rmurarishetti/hate-speech-classification"
        },
        thumbnail:{
            href:"/images/projects/ddw/thumbnail.png",
            alt:"ML Thumbnail"
        },
        media:[],
        description:[
            "Online hate speech is an important issue that breaks the cohesiveness of online social communities and even raises public safety concerns in our societies. Motivated by this rising issue, researchers have developed many traditional machine learning and deep learning methods to detect hate speech on online social platforms automatically."
        ],
        documents:[{
            name:"Output Report",
            href:"/documents/projects/50.007 Machine Learning_ Project - Skynet.pdf"
        }],
        people:[]
    },
    {
        id:"esc",
        name:"Paypal Digital Identity Verification",
        subtitle:"My team and I worked with PayPal to develop a mobile first Digital Identity Verification Application for bringing greater access to financial products for Immigrant Populations.",
        start:new Date(2022, 4),
        end:new Date(2022, 8),
        featured: true,
        type:"Software",
        tags:["Java", "Android", "Software Engineering", "Full Stack"],
        link:{
            name:"Github Repo",
            href:"https://github.com/rmurarishetti/ESC_C5G7"
        },
        thumbnail:{
            href:"/images/projects/esc/thumbnail.jpeg",
            alt:"ESC Thumbnail"
        },
        media:[],
        description:[
            "As part of our coursework for the module 50.003 Elements of Software Construction, my team and I worked with PayPal to develop a mobile first Digital Identity Verification Application for bringing greater access to financial products for Immigrant Populations."
        ],
        documents:[{
            name:"Project Presentation",
            href:"/documents/projects/Final Presentation Slide Deck.pdf"
        }],
        people:[]
    },
    {
        id:"bytewallet",
        name:"ByteWallet",
        subtitle:"Every byte counts. Money for your content delivered straight.",
        start:new Date(2023, 8),
        end:new Date(),
        featured: true,
        type:"Software",
        tags:["Full Stack", "Web", "P2P Wallet", "Hackathon"],
        link:{
            name:"Github Repo",
            href:"https://github.com/rmurarishetti/digitalWallet"
        },
        thumbnail:{
            href:"/images/bytewallet/thumbnail.png",
            alt:"ByteWallet Thumbnail"
        },
        media:[
            {
                video:{
                    href:"https://youtu.be/dSsw4EdOUb0?feature=shared",
                    alt: "ByteWallet Demo Video",
                    aspectRatio: 16/9
                }
            }
        ],
        description:[
            "ByteWallet is a comprehensive digital wallet solution that combines the simplicity of Next.js for frontend development, robust authentication mechanisms for security, Node.js Express for backend functionality, and Stripe for easy and secure top-ups. Here's what ByteWallet can do:",

            "User Registration and Authentication: ByteWallet allows users to register securely and authenticate themselves. We take user security seriously, and our authentication system ensures that their money is safe.",
            
            "Top-Up with Stripe: Users can top up their ByteWallet accounts seamlessly using Stripe, one of the most trusted payment gateways. This feature provides a quick and reliable way for users to add funds to their wallets.",
            
            "Peer-to-Peer Transactions: ByteWallet enables users to send money to and receive money from each other.",
            
            "Transaction History: The platform includes a transaction history page where users can view all their past transactions. This feature offers transparency and helps users keep track of their financial activities."
        ],
        documents:[],
        people:[]
    },
    {
        id:"nlp",
        name:"Prompt Engineering Adversarial Questions",
        subtitle:"Engineered adversarial questions targeting topics that are not excessively written or heard about in western media, content or datasets using popular techniques that are used to trick question answering systems.",
        start:new Date(2023, 0),
        end:new Date(2023, 4),
        featured: true,
        type:"Machine Learning",
        tags:["LLMs", "Natural Language Processing", "Prompt Engineering", "ChatGPT"],
        link:{
            name:"Final Report",
            href:"https://docs.google.com/document/d/1kjd1jLhX6eTq1aDB7qsE8EBDFRb1IqApI_n9ZNSp9gk/edit?usp=sharing"
        },
        thumbnail:{
            href:"/images/projects/nlp/thumbnail.png",
            alt:"NLP Thumbnail"
        },
        media:[],
        description:[
            "In our proposal, we aimed to write 50 adversarial questions targeting topics that are not excessively written or heard about in western media, content or datasets. Through this agenda we wanted to make sure that the large datasets that our models are trained against are inclusive of information that represent people around the world better through more diverse information that are used to train question answering models.",
             "We evaluated all the questions we've written using today's most popular large language models, like ChatGPT, YouAI, and Bard by Google. We believe these models are trained extensively on massive datasets and are built around question-answering. These models are hard to be trained on our local machines, so we thought that testing against these models would let us gauge the performance of our questions and understand how they would generalize against other models that do not have such a large parameter base or exposure to extensively large datasets.",
             "Our findings show us that these models have gotten extremely good in question answering and its only going to get harder to write questions which can effectively stump computers. We’ve been successful in stumping computers with a good chunk of our questions but the computers do manage to answer a good portion of the questions despite their difficulty due to the fact that they’re continuously learning and have been exposed to extremely large datasets."
        ],
        documents:[{
            name:"Project Report",
            href:"/documents/projects/Final_Project_NLP.pdf"
        }],
        people:[]
    },
    {
        id:"chord",
        name:"Chord: Distributed Hash Table",
        subtitle:"The Chord DHT protocol is a distributed hash table (DHT) protocol that was first proposed in 2001. It is a scalable and efficient way to store and retrieve data in a distributed network.",
        start:new Date(2023, 3),
        end:new Date(2023, 4),
        featured: true,
        type:"Software",
        tags:["Networks", "Decentralised Storage", "Distributed Systems"],
        link:{
            name:"Github Repo",
            href:"https://github.com/rmurarishetti/Chord-DHT"
        },
        thumbnail:{
            href:"/images/projects/chord/thumbnail.jpeg",
            alt:"Chord Thumbnail"
        },
        media:[],
        description:[
            "The Chord DHT protocol is a distributed hash table (DHT) protocol that was first proposed in 2001. It is a scalable and efficient way to store and retrieve data in a distributed network. Chord uses a ring topology to organize nodes, and each node maintains a small routing table that allows it to quickly locate other nodes in the ring.",
            "Each node in a Chord DHT network is assigned a unique identifier (ID), which is a hash of the node's IP address and port number. The nodes are then arranged in a logical ring, with each node's predecessor and successor being the two nodes with the closest IDs.",

            "Each node also maintains a finger table, which is a list of pointers to other nodes in the ring. The finger table is used to quickly locate nodes that are responsible for storing specific data keys."
        ],
        documents:[],
        people:[]
    },
    {
        id:"btclient",
        name:"BitTorrent Client: Decentralised File Share",
        subtitle:"BitTorrent is a peer-to-peer (P2P) file sharing protocol that allows users to distribute data and electronic files over the Internet in a decentralized manner. ",
        start:new Date(2023, 2),
        end:new Date(2023, 4),
        featured: true,
        type:"Software",
        tags:["Networks", "Decentralised Storage", "Distributed Systems"],
        link:{
            name:"Github Repo",
            href:"https://github.com/rmurarishetti/BTClient"
        },
        thumbnail:{
            href:"/images/projects/btclient/thumbnail.png",
            alt:"BTClient Thumbnail"
        },
        media:[],
        description:[
            "A BitTorrent client is a computer program that implements the BitTorrent protocol. BitTorrent clients are available for a variety of computing platforms and operating systems. Some popular BitTorrent clients include:",

            "μTorrent qBittorrent Deluge Vuze Transmission To use a BitTorrent client, you first need to find a torrent file for the file that you want to download. Torrent files contain information about the file that you want to download, such as its name, size, and hash. Once you have found a torrent file, you can open it in your BitTorrent client to start the download process.",
            
            "BitTorrent clients are very efficient at transferring large files. They are able to do this by using a number of techniques, such as:",
            
            "Chunking: BitTorrent divides files into small pieces called chunks. This makes it easier to download the file from multiple users simultaneously. Seeding: BitTorrent users who have already downloaded a file can choose to seed the file. This makes the file available to other users to download. Pipelining: BitTorrent clients can download multiple chunks of a file simultaneously. This speeds up the download process."
        ],
        documents:[],
        people:[]
    },
]