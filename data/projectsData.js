export const projectsData = [
    
    {
        id: "robot",
        name: "HexaLimb",
        subtitle: "Design and simulation of a 6DOF multi-application robotic manipulator.",
        start: new Date(2023, 2),
        end: new Date(2023, 4),
        featured: true,
        type: "Hardware",
        tags: ["Uni", "CAD", "Python",],
        link: {
            name: "Github Repo",
            href: "https://github.com/RohitNag11/RobotKin"
        },
        thumbnail: {
            href: "/images/projects/RobotArm/render.png",
            alt: "Robot Arm Render"
        },
        media: [
            // {
            //     image: {
            //         href: "/images/projects/RobotArm/render.png",
            //         alt: "Robot Arm Render"
            //     }
            // },
        ],
        people: [],
        documents: [],
        description: [
            "Any object can be manipulated freely in space through 6 degrees of freedom (6DOF). This framework encompasses three translational movements along the primary Cartesian axes, in conjunction with three rotational movements about these axes. HexaLimb is a 6DOF robotic manipulator designed to replicate this range of spatial manipulation using six revolute joints. The end-effector of HexaLimb has a modular design, allowing adaptability for various applications, such as integrating a gripper, tooltip, or a camera. The robotic arm has a spherical operational area with a 1-meter radius, positioned above the ground. Additionally, the arm can be attached to a mobile base to extend its range of motion.",
            "The position and orientation of the end-effector are managed by six angular-encoded servo motors, controlled by a microcontroller. Each motor determines the joint angle for one revolute joint, with successive joints being connected by a rigid link. Using forward kinematics, the position and rotation of the end-effector can be determined based on the joint angles. Conversely, inverse kinematics allows for determining joint angles based on a desired end-effector position and rotation. Solving inverse kinematics is particularly challenging for 6DOF manipulators due to the potential for multiple solutions for a specific end-effector state. Furthermore the process can be analytically unsolvable for certain manipulator configurations. HexaLimb is designed to address this with an analytically solvable configuration, ensuring it can be used in real-time scenarios with moving targets.",
            "A standalone Python library, RobotKin, has been developed for kinematic simulations of serial-link manipulators and mobile robots that follow the Denavit-Hartenberg convention. This tool can calculate forward and inverse kinematics, joint velocities, and accelerations, and includes path planning algorithms.",
            "The model below demonstrates the kinematic behaviors of HexaLimb using Python logic ported to JavaScript.",
            // "The following report details the calculations of HexaLimb mounted on a two-wheeled differential-drive mobile robot. A hypothetical navigation task through South Kensington, ending in the spatial adjustment of an object at the end point is simulated using image processing on a Google Maps image."
        ]
    },
    {
        id: "cheat-sheet",
        name: "CheatSheet",
        subtitle: "A global shortcuts helper Windows application.",
        start: new Date(2022, 6),
        end: new Date(2022, 7),
        featured: true,
        type: "UI/UX",
        tags: ["WinUI3", "XAML", "C#", "Hackathon"],
        link: {
            name: "Github Repo",
            href: "https://github.com/RohitNag11/CheatSheet"
        },
        thumbnail: {
            href: "/images/projects/CheatSheet/mockup.png",
            alt: "CheatSheet Mockup"
        },
        media: [
            {
                image: {
                    href: "/images/projects/CheatSheet/screenshot1.jpg",
                    alt: "CheatSheet Screenshot 1"
                }
            },
            {
                image: {
                    href: "/images/projects/CheatSheet/screenshot2.jpg",
                    alt: "CheatSheet Screenshot 2"
                }
            },
            {
                image: {
                    href: "/images/projects/CheatSheet/screenshot3.jpg",
                    alt: "CheatSheet Screenshot 3"
                }
            },
            {
                image: {
                    href: "/images/projects/CheatSheet/screenshot4.jpg",
                    alt: "CheatSheet Screenshot 4"
                }
            }
        ],
        people: [
            {
                gender: 'male',
                name: "Baron Khan",
                linkedin: "https://www.linkedin.com/in/baron-khan/"
            },
        ],
        documents: [],
        description: [
            "Keyboard shortcuts are a great way to increase productivity. Unfortunately, they are hard to remember when you need them. That is why I created CheatSheet, a global shortcuts-helper overlay app for Windows.",
            "I pitched the idea in the Microsoft EMEA Innovation Challenge Hackathon 2022, winning 1st place. The application was then later developed with the help of my manager at Microsft for Microsoft's 2022 Global Hackathon.",
            "The overlay can be activated with a key press, displaying recommended and recently used shortcuts for the foreground application. Development is in beta with functionalities including automatic foreground app detection, complete UI functionality and data fetching. The next milestone is automatic data retrieval from apps without relying on hard-corded data.",
            "The app was developed using WinUI 3, a C#/XAML UI kit that ships with the Windows App SDK."
        ]
    },
    {
        id: "ebike-frame",
        name: "eBike",
        subtitle: "Design and manufacturing of a custom, purpose-built ebike.",
        start: new Date(2020, 8),
        end: new Date(2021, 6),
        featured: true,
        type: "Engineering",
        tags: ["Ansys", "SolidWorks", "CES", "Manufacturing", "Uni"],
        link: {},
        thumbnail: {
            href: "/images/projects/EBike/render5.png",
            alt: "eBike Render"
        },
        model: {
            href: '/3d/ebike.draco.glb',
            fov: 30,
            aspectRatio: 1.5,
            maxDistance: 3.5,
            minDistance: 0.1,
            lightProps: {
                lightDirectionalIntensity: 2,
                lightAmbientIntensity: 1,
                darkAmbientIntensity: 0.2,
                darkDirectionalIntensity: 1,
            }
        },
        media: [
            {
                image: {
                    href: "/images/projects/EBike/render1.png",
                    alt: "eBike Render 1"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/render2.png",
                    alt: "eBike Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/render3.png",
                    alt: "eBike Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/render4.png",
                    alt: "eBike Render 4"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/render5.png",
                    alt: "eBike Render 4"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/concept.jpg",
                    alt: "eBike Concept"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/materials.jpg",
                    alt: "eBike Materials Choice"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/ed1.jpg",
                    alt: "eBike Engineering Drawing 1"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/ed2.jpg",
                    alt: "eBike Engineering Drawing 2"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/ed3.jpg",
                    alt: "eBike Engineering Drawing 3"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/testing1.jpg",
                    alt: "eBike Strain Gauge Testing"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/testing2.jpg",
                    alt: "eBike Stress Testing"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/testing3.jpg",
                    alt: "eBike Strain Gauge Testing 2"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/results.jpg",
                    alt: "eBike Strain Gauge Results"
                }
            }
        ],
        people: [
            {
                gender: 'male',
                name: "Theo Hales",
                linkedin: "https://www.linkedin.com/in/theo-hales-a80132141/"
            },
            {
                gender: 'male',
                name: "Mingquan Cheng",
                linkedin: "https://www.linkedin.com/in/mingquan-melvin-c-39957313b/"
            },
            {
                gender: 'male',
                name: "Rohhil Chhabra",
                linkedin: "https://www.linkedin.com/in/rohhil-chhabra/"
            },
            {
                gender: 'male',
                name: "Zhongtian Huang",
                linkedin: "https://www.linkedin.com/in/zhongtian-huang-808a61180/"
            },
        ],
        documents: [
            {
                name: "Design Report",
                href: "/documents/projects/EBike/designReport.pdf"
            },
            {
                name: "Testing & Analysis Report",
                href: "/documents/projects/EBike/testingReport.pdf"
            },
        ],
        description: [
            "As part of a group of third-year mechanical engineering students, we designed, made, and tested an urban electric bike from the ground up.  Specifically, our 5-member subgroup was responsible for the engineering design, validation, manufacturing, and testing of the bike frame.",
            "The bespoke geometry is designed around human anthropometrics under urban commuting conditions. In the most basic form, the frame is dual triangular in structure with silver brazed steel tubing. The cold-drawn, low-carbon Omnicom tubes provide high tensile strength, fatigue resistance and transition temperature. Each tube is butted for added thermal resistance near braze joints while saving material weight elsewhere.",
            "A challenge was designing a bike with disc brake callipers while having a chain-tensioning mechanism. For this, novel sliding rear dropouts were designed. The three-piece design allows the entire rear wheel assembly to move horizontally without conflicting with moving components. Furthermore, motor and battery integrations were achieved through a square-sectioned seat tube and downtube for increased easier manufacturing.",
            "Extensive Finite Elements analysis and incremental load tests using strain gauges were used to iterate and validate the design."
        ]
    },
    {
        id: "mine-rescue-buggy",
        name: "Mine Rescue Buggy",
        subtitle: "A robot to follow paths and return autonomously.",
        start: new Date(2021, 2),
        end: new Date(2021, 3),
        featured: true,
        type: "Hardware",
        tags: ["C", "Microcontroller", "Uni"],
        link: {},
        thumbnail: {
            href: "/images/projects/Buggy/buggy3.jpg",
            alt: "Mine Rescue Buggy"
        },
        media: [
            {
                image: {
                    href: "/images/projects/Buggy/buggy1.jpg",
                    alt: "Mine Rescue Buggy 1"
                }
            },
            {
                image: {
                    href: "/images/projects/Buggy/buggy2.jpg",
                    alt: "Mine Rescue Buggy 2"
                }
            },
            {
                image: {
                    href: "/images/projects/Buggy/buggy_slide1.jpg",
                    alt: "Mine Rescue Buggy Functionality"
                }
            },
            {
                image: {
                    href: "/images/projects/Buggy/buggy_slide2.jpg",
                    alt: "Mine Rescue Buggy Colour Mapping"
                }
            },
            {
                image: {
                    href: "/images/projects/Buggy/buggy_slide3.jpg",
                    alt: "Mine Rescue Buggy Colour Identification"
                }
            },
            {
                image: {
                    href: "/images/projects/Buggy/buggy_slide4.gif",
                    alt: "Mine Rescue Buggy Colour Calibration"
                }
            },
            {
                image: {
                    href: "/images/projects/Buggy/buggy_slide5.gif",
                    alt: "Mine Rescue Buggy Turning Calibration"
                }
            },
            {
                video: {
                    href: "https://vimeo.com/794470923",
                    alt: "Mine Rescue Buggy Video",
                    aspectRatio: 16 / 9
                }
            },
        ],
        people: [
            {
                gender: 'male',
                name: "Frederik Masure",
                linkedin: "https://www.linkedin.com/in/frederik-masure-a97415173/"
            },
        ],
        documents: [],
        description: [
            "For the final project of the Embedded-C for Microcontrollers module, we developed an autonomous mine rescue robot. The buggy can navigate a conceptual mine using a set of instructions coded in coloured cards and return to its starting position - simulating a scenario of determining the location of trapped miners.",
            "This was a great learning experience for C microcontroller programming and hardware interfacing. Combining mechatronics concepts such as motor control and computational algorithms was challenging but rewarding. Colour identification for varying lighting environments and achieving precise turning capabilities with strictly forward-driven wheels were some of the key challenges. A series of colour channel segmentation algorithms were developed for real-time detection. This was paired with motion and lighting calibration methods to achieve the desired flexibility.",
            "Specifications:",
            "Hardware: PIC18F67K40 microchip, Clicker-2 PCB, Tricolour LED, TCS3471 Colour Light-to-digital convertor, 3.7V 2000mA LiPo battery, DRV833RTY differential motor drivers.",
            "Functionality: movement, colour-detection, lighting, memory, calibration, and a set of fail-safes."
        ]
    },
    {
        id: "mobula-ray",
        name: "Mobula Ray",
        subtitle: "Design of a personal underwater propulsive device.",
        start: new Date(2020, 1),
        end: null,
        featured: false,
        type: "Engineering",
        tags: ["SolidWorks", "CES", "Uni"],
        link: {},
        thumbnail: {
            href: "/images/projects/MobulaRay/render1.png",
            alt: "Mobula Ray Render 1"
        },
        model: {
            href: '/3d/mobularay.draco.glb',
            fov: 40,
            aspectRatio: 2,
            maxDistance: 2,
            minDistance: 0.1,
            lightProps: {
                lightDirectionalIntensity: 2,
                lightAmbientIntensity: 2,
                darkAmbientIntensity: 0.2,
                darkDirectionalIntensity: 1,
            }
        },
        media: [
            {
                image: {
                    href: "/images/projects/MobulaRay/render3.png",
                    alt: "Mobula Ray Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/render6.png",
                    alt: "Mobula Ray Render 6"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/render7.png",
                    alt: "Mobula Ray Render 7"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/render4.png",
                    alt: "Mobula Ray Render 4"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/render2.png",
                    alt: "Mobula Ray Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/render5.png",
                    alt: "Mobula Ray Render 5"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/ed1.jpg",
                    alt: "Mobula Ray Engineering Drawing 1"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/ed2.jpg",
                    alt: "Mobula Ray Engineering Drawing 2"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/ed3.jpg",
                    alt: "Mobula Ray Engineering Drawing 3"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/ed4.jpg",
                    alt: "Mobula Ray Engineering Drawing 4"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/group.jpg",
                    alt: "Mobula Ray Group Photo"
                }
            },
        ],
        people: [
            {
                gender: 'male',
                name: "Diederik Evanson",
                linkedin: "https://www.linkedin.com/in/diederik-e-348376129/"
            },
            {
                gender: 'female',
                name: "Marie Obrowski Aguirre",
                linkedin: "https://www.linkedin.com/in/marie-obrowski-aguirre-1112b6191/"
            },
            {
                gender: 'male',
                name: "Iñigo Maruri Aldaz",
                linkedin: "https://www.linkedin.com/in/inigomaruri/"
            },
        ],
        documents: [],
        description: [
            "Mobula ray is a personal underwater propulsion device rated for a depth of 15m. Powered by a dual-motor drive train and lithium-ion batteries, it is designed to have a battery life of 2hrs for an average speed of 2 kph. It features a fully-integrated injection moulded outer casing. The casing houses the internal drive drain, propellers, and batteries. Components are sealed using rubber o-rings. In the case of a failure, the modular design allows for quick disassembly and accommodates self-reparability.",
            "Propellor design, motor selection and material selection were some of the key design decisions for achieving a balance between weight reduction and suitable propulsion power.",
            "I worked with a team of Mechanical Engineering students to complete the entire design process in one week, from the initial idea to the final engineering delivery."
        ]
    },
    {
        id: "heat-diff-model",
        name: "2D Heat Diffusion Model",
        subtitle: "Dynamic transient heat transfer model of multi-material blocks.",
        start: new Date(2020, 1),
        end: null,
        featured: false,
        type: "Computing",
        tags: ["Python", "Uni"],
        link: {},
        thumbnail: {
            href: "/images/projects/HeatDiffusion/heatmodel.png",
            alt: "2D Heat Diffusion Graph"
        },
        media: [
            {
                image: {
                    href: "/images/projects/HeatDiffusion/heatmodel.gif",
                    alt: "2D Heat Diffusion Graph Animation"
                }
            },
        ],
        people: [
            {
                gender: 'male',
                name: "Frederik Masure",
                linkedin: "https://www.linkedin.com/in/frederik-masure-a97415173/"
            },
        ],
        documents: [
            {
                name: "Coursework Summary",
                href: "/documents/projects/HeatDiffusion/cwSummary.pdf"
            },
        ],
        description: [
            "Worked as a pair to perform a heat transfer analysis of the quenching process of a hot, rectangular rod. Using Python, we modelled the transient temperature distribution through the rod in the cross-sectional plane.",
            "A mixed composition of brick and steel (AISI 1010) was chosen for the rod, although this could be modified to fit any composition. The rod was assumed long enough that the heat transfer along the longest length could be neglected. Thus, the problem was modelled in 2D space space and time.",
            "The location and area of the secondary material was chosen to be a small rectangle, slightly offset from the centre. The composition can however, be adjusted for different conditions.",
            "Uniform density, uniform specific heat, and no internal heat generation were the compositional assumptions. The overal model was a 3rd order parabolic partial derivative equation."
        ]
    },
    {
        id: "sonic",
        name: "SONIC",
        subtitle: "Design and manufacturing of a miniature electric drag race car.",
        start: new Date(2019, 9),
        end: new Date(2019, 11),
        featured: true,
        type: "Engineering",
        tags: ["SolidWorks", "Manufacturing", "Uni"],
        link: {},
        thumbnail: {
            href: "/images/projects/Sonic/render1.png",
            alt: "SONIC Render"
        },
        model: {
            href: '/3d/sonic.draco.glb',
            fov: 27,
            aspectRatio: 2,
            minDistance: 0.1,
            maxDistance: 0.7,
            lightProps: {
                lightDirectionalIntensity: 2,
                darkAmbientIntensity: 0.2,
                darkDirectionalIntensity: 1,
            }
        },
        media: [
            {
                image: {
                    href: "/images/projects/Sonic/render1.png",
                    alt: "SONIC Render 1",
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/render2.png",
                    alt: "SONIC Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/render3.png",
                    alt: "SONIC Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/render4.png",
                    alt: "SONIC Render 4"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/render5.png",
                    alt: "SONIC Render 5"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/render6.png",
                    alt: "SONIC Render 6"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/ed1.jpg",
                    alt: "SONIC Engineering Drawing 1"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/ed2.jpg",
                    alt: "SONIC Engineering Drawing 2"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/ed3.jpg",
                    alt: "SONIC Engineering Drawing 3"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/ed4.jpg",
                    alt: "SONIC Engineering Drawing 4"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/ed5.jpg",
                    alt: "SONIC Engineering Drawing 5"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/ed6.jpg",
                    alt: "SONIC Engineering Drawing 6"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/ed7.jpg",
                    alt: "SONIC Engineering Drawing 7"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/real1.jpg",
                    alt: "SONIC Manufactured 1"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/real2.jpg",
                    alt: "SONIC Manufactured 2"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/real3.jpg",
                    alt: "SONIC Manufactured 3"
                }
            },
            {
                type: "video",
                href: "/images/projects/Sonic/sonic_run.mp4",
                alt: "SONIC Demo"
            },
        ],
        people: [
            {
                gender: 'male',
                name: "James Lum",
                linkedin: "https://www.linkedin.com/in/james-lum-kh/"
            },
            {
                gender: 'male',
                name: "Ionas Alexopoulos",
                linkedin: "https://www.linkedin.com/in/ionas-alexopoulos-8504b020b/"
            },
            {
                gender: 'female',
                name: "Brindhiini Perera",
                linkedin: ""
            },
            {
                gender: 'male',
                name: "Yilong Huang",
                linkedin: "https://www.linkedin.com/in/yilong-huang-6137281a7/"
            },
        ],
        documents: [
            {
                name: "Design Report",
                href: "/documents/projects/Sonic/designReport.pdf"
            },
        ],
        description: [
            "As part of a 5-member team, we designed, manufactured and tested a miniature motorised car to race against 30 other teams in the cohort.", "Sonic is an ultra-light, rear-wheel-drive car featuring an all plastic spur gear drive transmission.",
            "Design elements were carefully considered to maximise the ease of manufacturing, reduce the race completion time and many other criteria. Extensive stress analysis and motor control analysis were done to maximise performance."
        ]
    },
    {
        id: "lift-door",
        name: "Lift Door Transmission",
        subtitle: "Design of a bi-directional mechanical transmission.",
        start: new Date(2019, 0),
        end: new Date(2019, 2),
        featured: false,
        type: "Engineering",
        tags: ["SolidWorks", "Uni"],
        link: {},
        thumbnail: {
            href: "/images/projects/LiftDoor/render1.png",
            alt: "Lift Door Transmission Render 1"
        },
        model: {
            href: '/3d/liftdoor.draco.glb',
            aspectRatio: 2,
            maxDistance: 3,
            minDistance: 0.1,
        },
        media: [
            {
                image: {
                    href: "/images/projects/LiftDoor/render2.png",
                    alt: "Lift Door Transmission Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/LiftDoor/render3.png",
                    alt: "Lift Door Transmission Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/LiftDoor/render4.png",
                    alt: "Lift Door Transmission Render 4"
                }
            },
            {
                image: {
                    href: "/images/projects/LiftDoor/render1.png",
                    alt: "Lift Door Transmission Render 1"
                }
            },
            {
                image: {
                    href: "/images/projects/LiftDoor/ed1.jpg",
                    alt: "Lift Door Transmission Engineering Drawing 1"
                }
            },
            {
                image: {
                    href: "/images/projects/LiftDoor/ed2.jpg",
                    alt: "Lift Door Transmission Engineering Drawing 2"
                }
            },
            {
                image: {
                    href: "/images/projects/LiftDoor/ed3.jpg",
                    alt: "Lift Door Transmission Engineering Drawing 3"
                }
            },
            {
                image: {
                    href: "/images/projects/LiftDoor/ed4.jpg",
                    alt: "Lift Door Transmission Engineering Drawing 4"
                }
            }
        ],
        people: [],
        documents: [],
        description: [
            "A lift-door transmission was designed as an individual Mechanical Engineering first-year individual project. The design features a two-step speed increase and converts rotary motor motion to double-acting linear motion.",
            "This was my first experience of making a complete CAD assembly and a full set of engineering drawings."
        ]
    },
    {
        id: "data-open",
        name: "Article Headlines Effect on User Clickrate",
        subtitle: "An NLP-based data-analysis of article headlines.",
        start: new Date(2021, 8, 7),
        end: null,
        featured: true,
        type: "Computing",
        tags: ["Python", "Data-Analysis", "Hackathon", "NLP", "ML"],
        link: {},
        thumbnail: {
            href: "/images/projects/DataOpen/thumbnail.png",
            alt: "Muti-variate Plot"
        },
        media: [
            {
                image: {
                    href: "/images/projects/DataOpen/plot1.png",
                    alt: "Plot 1"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot2.png",
                    alt: "Plot 2"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot3.png",
                    alt: "Plot 3"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot4.png",
                    alt: "Plot 4"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot5.png",
                    alt: "Plot 5"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot6.png",
                    alt: "Plot 6"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot7.png",
                    alt: "Plot 7"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot8.png",
                    alt: "Plot 8"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot9.png",
                    alt: "Plot 9"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot10.png",
                    alt: "Plot 10"
                }
            },
            {
                image: {
                    href: "/images/projects/DataOpen/plot11.jpg",
                    alt: "Plot 11"
                }
            },
        ],
        people: [
            {
                gender: 'female',
                name: "Maria Julia Maristany",
                linkedin: "https://www.linkedin.com/in/maria-julia-maristany-51777915a/"
            },
            {
                gender: 'male',
                name: "Ludwig Jonsson",
                linkedin: "https://www.linkedin.com/in/ludwigaj/"
            },
            {
                gender: 'male',
                name: "Manith Adikari",
                linkedin: "https://www.linkedin.com/in/manith-adikari/"
            }
        ],
        documents: [
            {
                name: "Analysis Report",
                href: "/documents/projects/DataOpen/report.pdf"
            },
        ],
        description: [
            "I was selected to compete in Citadel's 2021 week-long Europe Regional Datathon with the challenge of solving a data-analysis problem. As a group of 4 Imperial and Cambridge students, we focused on identifying the key parameters in online articles which affect user click rates before the article is read. ",
            "In the last two decades, with the advent of social networks, most firms have grown an increasingly strong presence online. Whether we are talking about technology, marketing, media, retail, politics, health or activism, engagement has become the standard metric to measure impact, and therefore, success, of products, campaigns or media content.",
            "The aim was to identify trends in user behaviours, namely click rates. This would enable us not only to gain insight into which type of A/B test is more effective to increase engagement, but also a first look into what the collection of available data can tell us about the interaction dynamics between the population analysed with online content.",
        ]
    },
    {
        id: "lunar-deployer",
        name: "Lunar Rover Deployer",
        subtitle: "Concept device to deploy Spacebit's Asagumo rover on the lunar surface.",
        start: new Date(2021, 1),
        end: null,
        featured: false,
        type: "Engineering",
        tags: ["SolidWorks", "Fusion360", "Hackathon"],
        link: {},
        thumbnail: {
            href: "/images/projects/LunarDeployer/render3.png",
            alt: "Lunar Deployer Render 3"
        },
        model: {
            href: '/3d/winch.glb',
            maxDistance: 0.6,
            minDistance: 0.1,
        },
        media: [
            {
                image: {
                    href: "/images/projects/LunarDeployer/render1.png",
                    alt: "Lunar Deployer Render 1"
                }
            },
            {
                image: {
                    href: "/images/projects/LunarDeployer/render2.png",
                    alt: "Lunar Deployer Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/LunarDeployer/render3.png",
                    alt: "Lunar Deployer Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/LunarDeployer/render4.png",
                    alt: "Lunar Deployer Render 4"
                }
            },
            {
                image: {
                    href: "/images/projects/LunarDeployer/render5.png",
                    alt: "Lunar Deployer Render 5"
                }
            },
            {
                image: {
                    href: "/images/projects/LunarDeployer/render6.png",
                    alt: "Lunar Deployer Render 6"
                }
            },
            {
                video: {
                    href: "https://www.youtube.com/watch?v=R4yxMDOaoE4",
                    alt: "Lunar Deployer",
                    aspectRatio: 16 / 9
                }
            },
        ],
        people: [
            {
                gender: 'male',
                name: "João Matias",
                linkedin: "https://www.linkedin.com/in/joao-matias/"
            },
            {
                gender: 'male',
                name: "Ming Jie See",
                linkedin: "https://www.linkedin.com/in/mj-see/"
            },
            {
                gender: 'male',
                name: "Manith Adikari",
                linkedin: "https://www.linkedin.com/in/manith-adikari/"
            },
            {
                gender: 'male',
                name: "Andrew Chen Siyuan",
                linkedin: "https://www.linkedin.com/in/andrew-chen-siyuan-13025913a/"
            },
            {
                gender: 'male',
                name: "Wang Jiale",
                linkedin: "https://www.linkedin.com/in/jiale-wang-sg/"
            }
        ],
        documents: [],
        description: [
            "I participated in 2021's Making for the Moon Hackathon with a group of five inter-university and cross-disciplinary students. The challenge was to design a solution to deploy SpaceBit's Asagumo rover from a height of 1m on the moon. Our proposed solution relied on a simple winch and hook mechanism to deploy and retrieve the rover. I was responsible for designing the mechanical actuation system, CAD, and rendering.",
            "The actuation subsystem houses a 1W DC motor, a 1:30 Planetary reduction gearbox, the spool-shaft assembly and the control system for motor control and sensors. Additionally, the unit was designed to meet Asagumo rover's specifications and Astrobotic Tech's Peregrine lunar lander's payload dimension/weight specifications.",
            "The slotted and sealed casing design also featured methods of minimising loads: sine-vibrational, random vibrational, acoustic and shock. The casing and internal components was designed for a nominal temperature range of -120°C to 100°C.",
            "The grasping subsystem featured a self-orientating magnetic hook and clamp mechanism for attachment and detachment. This enables the dual functionality of deployment and recovery of the rover."
        ]
    },
    {
        id: "bi-space",
        name: "BiSpace",
        subtitle: "Design of a compact vertical bike storage solution.",
        start: new Date(2020, 9),
        end: new Date(2020, 11),
        featured: true,
        type: "Design",
        tags: ["SolidWorks", "Prototyping"],
        link: {
            name: "Product Website",
            href: "https://dac2020.wixsite.com/group4"
        },
        thumbnail: {
            href: "/images/projects/BiSpace/render1.png",
            alt: "BiSpace Render 1"
        },
        media: [
            {
                image: {
                    href: "/images/projects/BiSpace/render2.png",
                    alt: "BiSpace Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/BiSpace/render3.png",
                    alt: "BiSpace Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/BiSpace/render4.png",
                    alt: "BiSpace Render 4"
                }
            },
            {
                image: {
                    href: "/images/projects/BiSpace/render5.png",
                    alt: "BiSpace Render 5"
                }
            },
            {
                image: {
                    href: "/images/projects/BiSpace/render6.png",
                    alt: "BiSpace Render 6"
                }
            },
            {
                image: {
                    href: "/images/projects/BiSpace/render7.png",
                    alt: "BiSpace Render 7"
                }
            },
            {
                image: {
                    href: "/images/projects/BiSpace/render8.png",
                    alt: "BiSpace Render 8"
                }
            },
            {
                image: {
                    href: "/images/projects/BiSpace/assembly.gif",
                    alt: "BiSpace Assembly Process"
                }
            },
            {
                image: {
                    href: "/images/projects/BiSpace/prototype1.gif",
                    alt: "BiSpace Compatibility"
                }
            },
            {
                image: {
                    href: "/images/projects/BiSpace/prototype2.gif",
                    alt: "BiSpace Demo"
                }
            },
        ],
        people: [
            {
                gender: 'male',
                name: "Thomas Watson",
                linkedin: "https://www.linkedin.com/in/thomasjswatson/"
            },
            {
                gender: 'male',
                name: "Frederik Masure",
                linkedin: "https://www.linkedin.com/in/frederik-masure-a97415173/"
            },
            {
                gender: 'male',
                name: "Luke Walters",
                linkedin: "https://www.linkedin.com/in/luke-walters-184238208/"
            },
        ],
        documents: [],
        description: [
            "Bispace is a compact bike storage, focusing on increased functionality and aesthetics compared to existing market solutions. The stand is compatible with 95% of bikes of varying frame dimensions and wheel sizes - based off testing and analysis of bikes in London.",
            "The 3-part design constitutes a beech platform, ABS centre piece and ABS side panels. The wooden platform provides a low CG for added lateral stability has an inbuilt back plate to act as the rear wheel pivot for effortless mounting. The centrepiece has an integrated wheel slot to avoid slippage while the material choice allows for customer preference colouring. The side panels feature locking slot pins and auto-retracting tension hooks for added mounting security. Additionally, the outward tapering top maximises compatibility of varying bike frame geometries.",
            "It was designed by a group of four Imperial mechanical engineering students. A prototype made of MDF was developed as a proof of concept. I was responsible for the overall design, CAD, rendering and core website.",
        ]
    },
    {
        id: "checkapp",
        name: "CheckApp",
        subtitle: "Concept app for informed prescriptions and medical decisions.",
        start: new Date(2020, 6),
        end: null,
        featured: false,
        type: "UI/UX",
        tags: ["AdobeXD", "Hackathon"],
        link: {},
        thumbnail: {
            href: "/images/projects/CheckApp/mockup1.png",
            alt: "CheckApp Mockup 1"
        },
        media: [
            {
                image: {
                    href: "/images/projects/CheckApp/mockup2.png",
                    alt: "CheckApp Mockup 2"
                }
            },
            {
                image: {
                    href: "/images/projects/CheckApp/mockup3.gif",
                    alt: "CheckApp Mockup 3"
                }
            },
            {
                image: {
                    href: "/images/projects/CheckApp/mockup4.gif",
                    alt: "CheckApp Mockup 4"
                }
            },
        ],
        people: [
            {
                gender: 'male',
                name: "Josh Cheng",
                linkedin: "https://www.linkedin.com/in/josh-cheng-633311140/"
            },
            {
                gender: 'male',
                name: "Frederik Masure",
                linkedin: "https://www.linkedin.com/in/frederik-masure-a97415173/"
            },
            {
                gender: 'male',
                name: "Manith Adikari",
                linkedin: "https://www.linkedin.com/in/manith-adikari/"
            },
        ],
        documents: [],
        description: [
            "As a group of four, second-year mechanical engineering students, we participated in the annual five-day hackathon hosted by Imperial College Business School. The competition involved finding a sustainable health-tech solution to tackle the global non-communicable disease epidemic.",
            "We proposed an app to improve medical data collection and accessibility, which would, in turn, allow for more informed medical and lifestyle decisions for both users and healthcare providers.",
            "Currently, healthcare systems are out of date and there exists an information imbalance between patients and doctors, leading to less accurate advice. With an improved database of information and a deep learning model that considers family medical history, we can provide personalized assessments of a user's health risks, reducing the strain on healthcare systems.",
        ]
    },
    {
        id: "rail-guide",
        name: "Fly-away Rail Guides",
        subtitle: "Design of automatic launch device for a supersonic rocket.",
        start: new Date(2019, 9),
        end: new Date(2020, 2),
        featured: false,
        type: "Engineering",
        tags: ["SolidWorks", "Competition"],
        link: {},
        thumbnail: {
            href: "/images/projects/RailGuide/render1.jpg",
            alt: "Fly-away Rail Guide Render 1"
        },
        model: {
            href: '/3d/rocket.draco.glb',
            fov: 50,
            aspectRatio: 1,
            maxDistance: 4,
            minDistance: 0.3,
        },
        media: [
            {
                image: {
                    href: "/images/projects/RailGuide/render2.jpg",
                    alt: "Fly-away Rail Guide Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/RailGuide/render3.jpg",
                    alt: "Fly-away Rail Guide Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/RailGuide/render4.jpg",
                    alt: "Fly-away Rail Guide Render 4"
                }
            },
            {
                image: {
                    href: "/images/projects/RailGuide/render1.jpg",
                    alt: "Fly-away Rail Guide Render 1"
                }
            },
        ],
        people: [
            {
                gender: 'male',
                name: "Nikhil Dawda",
                linkedin: "https://www.linkedin.com/in/nikhil-dawda-a11a431a5/"
            },
            {
                gender: 'male',
                name: "Kai Wilkinson",
                linkedin: null
            },
        ],
        documents: [],
        description: [
            "Designed two bespoke fly-away rail guides for two Imperial College SpaceSoc supersonic rockets, participating in the UKSEDS National Rocketry Competition 2020. ",
            "The fly-away rail guide securely attaches the rocket body to the aluminium rail and ensures a vertical take-off. They are designed to automatically detach from the rocket body without needing any external electronic feedback.",
        ]
    },
    {
        id: "daedalus",
        name: "Project Daedalus",
        subtitle: "Concept design of cockpit overhaul for 6th-gen fighter jets.",
        start: new Date(2019, 11),
        end: new Date(2020, 1),
        featured: false,
        type: "Design",
        tags: ["ProCreate", "Competition"],
        link: {},
        thumbnail: {
            href: "/images/projects/ProjectDaedalus/concept1.jpg",
            alt: "Project Daedalus Concept 1"
        },
        media: [
            {
                image: {
                    href: "/images/projects/ProjectDaedalus/concept2.png",
                    alt: "Project Daedalus Concept 2"
                }
            },
        ],
        people: [
            {
                gender: 'male',
                name: "George Ge",
                linkedin: "https://www.linkedin.com/in/george-ge-a8b334163/"
            },
        ],
        documents: [],
        description: [
            "Project Daedulus is a cockpit overhaul concept for 6th gen jet fighters. This concept provides improvements over current HOTAS systems in areas such as reaction time, programmability, functionality and intuitiveness. It was designed as part of the 2020 STEM Awards Defence Technology Awards challenge hosted by The Telegraph and BAE Systems.",
            "The design features a calibrated cueing system to eye movements. This is done by the integrated iris trackers on the edges of the helmet visor. The reticle will be able to interact with:",
            "-Onboard targeting systems such as air-to-air radar, FLIR and others to designate singular or multiple targets.",
            "-The front panel of the aircraft, with the reticle acting as a 'mouse cursor.'",
            "-Controls on the throttle will simplify to two buttons, equivalent to left and right mouse buttons.",
            "Navigation can be done using the sight-controlled reticle, and alternatively through voice commands. Similarly, the control stick will only have buttons for countermeasures, triggers and weapon release, with a multi-axis hat for trimming. These changes allow pilots to achieve at least 80% of the aircraft's combat and logistical functions without removing their hands from the throttle or control stick."
        ]
    },
    {
        id: "spiderman",
        name: "SPIDERMAN",
        subtitle: "Design proposal for capturing dead satellites from the low-Earth orbit",
        start: new Date(2019, 10),
        end: null,
        featured: true,
        type: "Design",
        tags: ["MATLAB", "SolidWorks", "Hackathon"],
        link: {},
        thumbnail: {
            href: "/images/projects/Spiderman/render1.png",
            alt: "Spiderman Render 1"
        },
        model: {
            href: '/3d/boostermodule.glb',
        },
        media: [
            {
                image: {
                    href: "/images/projects/Spiderman/render2.png",
                    alt: "Spiderman Render 1"
                }
            },
            {
                image: {
                    href: "/images/projects/Spiderman/render3.png",
                    alt: "Spiderman Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/Spiderman/render1.png",
                    alt: "Spiderman Render 1"
                }
            },
            {
                image: {
                    href: "/images/projects/Spiderman/controlroom.jpg",
                    alt: "OneWeb Control Room"
                }
            },
            {
                image: {
                    href: "/images/projects/Spiderman/satellite.jpg",
                    alt: "OneWeb Satellite"
                }
            },
            {
                image: {
                    href: "/images/projects/Spiderman/group.jpg",
                    alt: "OneWeb Group Photo"
                }
            },
        ],
        people: [
            {
                gender: 'female',
                name: "Maha Khamlichi",
                linkedin: "https://www.linkedin.com/in/maha-khamlichi-5284ba186/"
            },
            {
                gender: 'male',
                name: "Ben Foster",
                linkedin: "https://www.linkedin.com/in/benjaminfoster1/"
            },
            {
                gender: 'male',
                name: "Manith Adikari",
                linkedin: "https://www.linkedin.com/in/manith-adikari/"
            },
            {
                gender: 'male',
                name: "João Matias",
                linkedin: "https://www.linkedin.com/in/joao-matias-68656c6c6f/"
            },
        ],
        documents: [],
        description: [
            "2019's SpackHack hosted by OneWeb tasked us with finding a solution to the ever-growing low-Earth orbit space debris problem. As a group of 6 aeronautical and mechanical engineering students, we proposed implementing optimally positioned nodes in the current satellite network. Each node would house a booster module containing a deployable net mechanism to capture 'dead' satellites which have malfunctioned in the process of self-deorbiting at the end of their life-cycle.",
            "A soft capture is ensured with our net proposal and is important to reduce the risk of space debris impacts. Once captured, the booster module could accelerate the dead satellite into an exaggerated elliptical orbit, forcing disintegration on re-entry at a much faster pace than current procedures.",
            "It was a thoroughly enjoyable experience coming together as a team and was ecstatic to be awarded 1st place out of 40 teams for our idea. Furthermore, we were invited to OneWeb's head office in London for the official launch event of 34 of their satellites."
        ]
    },
    {
        id: "bioreactor",
        name: "Fluorescent Biorector",
        subtitle: "Prototype of a cell-growth monitoring device.",
        start: new Date(2019, 0),
        end: new Date(2019, 1),
        featured: false,
        type: "Hardware",
        tags: ["Arduino", "C"],
        link: {},
        thumbnail: {
            href: "/images/projects/Bioreactor/prototype1.jpg",
            alt: "Bioreactor Prototype 1"
        },
        media: [
            {
                image: {
                    href: "/images/projects/Bioreactor/prototype1.jpg",
                    alt: "Bioreactor Prototype 1"
                }
            },
            {
                image: {
                    href: "/images/projects/Bioreactor/prototype2.jpg",
                    alt: "Bioreactor Prototype 2"
                }
            },
            {
                image: {
                    href: "/images/projects/Bioreactor/prototype3.jpg",
                    alt: "Bioreactor Prototype 3"
                }
            },
        ],
        people: [
            {
                gender: 'male',
                name: "Manith Adikari",
                linkedin: "https://www.linkedin.com/in/manith-adikari/"
            },
            {
                gender: 'female',
                name: "Yoonseo Lim",
                linkedin: "https://www.linkedin.com/in/yoonseo-lim-115561173/"
            },
        ],
        documents: [],
        description: [
            "As part of the Imperial Horizons, Making and Prototyping course, the final project required a device to be manufactured to actively detect cell growth and count. This project proved to be particularly challenging for our team of three, which comprised of students with no bio-related backgrounds.",
            "Our design involved the detection of fluorescent proteins produced by the GM bacteria culture used. A servo motor-based pump system was implemented to introduce a chemical inducer into the sample to start this process.",
            "A photodiode was used to measure the intensity of light from an LED after passing through the fluorescent sample. As the light intensity was proportional to the cell count, an Arduino code was composed to translate the voltage output of the photodiode to a meaningful cell count reading."
        ]
    },
]