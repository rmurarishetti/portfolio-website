export const projectsData = [
    {
        id: "ebike-frame",
        name: "eBike Frame",
        subtitle: "Yr3 Design Project",
        start: new Date(2020, 8),
        end: new Date(2021, 6),
        featured: true,
        type: "Engineering",
        tags: ["Ansys", "SolidWorks", "BikeCAD", "CES Selector", "Manufacturing"],
        thumbnail: {
            href: "/images/projects/EBike/thumbnail.jpg",
            alt: "eBike Render"
        },
        media: [
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
                    href: "/images/projects/EBike/render1.jpg",
                    alt: "eBike Render 1"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/render2.jpg",
                    alt: "eBike Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/render3.jpg",
                    alt: "eBike Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/EBike/render4.jpg",
                    alt: "eBike Render 4"
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
                name: "Theo Hales",
                linkedin: "https://www.linkedin.com/in/theo-hales-a80132141/"
            },
            {
                name: "Mingquan Cheng",
                linkedin: "https://www.linkedin.com/in/mingquan-melvin-c-39957313b/"
            },
            {
                name: "Rohhil Chhabra",
                linkedin: "https://www.linkedin.com/in/rohhil-chhabra/"
            },
            {
                name: "Zhongtian Huang",
                linkedin: "https://www.linkedin.com/in/zhongtian-huang-808a61180/"
            },
        ],
        documents: [
            {
                type: "Poster",
                href: ""
            },
            {
                type: "Design Report",
                href: ""
            },
            {
                type: "Testing & Analysis Report",
                href: ""
            },
            {
                type: "Seminar Presentation",
                href: ""
            }
        ],
        description: [
            "Worked with a group of third year mechanical engineering students to design, make, and test an urban electric bike from the ground up. Was specifically responsible for the engineering design, validation, manufacturing, and testing of the frame in a 5-member subgroup. ",
            "The bespoke geometry is designed around human anthropometrics under urban commuting conditions. In the most basic form, the frame is dual triangular in structure with silver brazed steel tubing. The cold-drawn, low-carbon Omnicom tubes provide high tensile strength, fatigue resistance and transition temperature. Each tube is butted for added thermal resistance near braze joints while saving material weight elsewhere.",
            "To be compatible with disc brake callipers while having a chain-tensioning mechanism, custom sliding rear dropouts were designed. The three-piece design allows the entire rear wheel assembly to move horizontally without conflicting with other parts. Furthermore, motor and battery integrations were achieved through a square-sectioned seat tube and downtube for increased easier manufacturing.",
            "Extensive Finite Elements analysis and incremental load tests using strain gauges were used to iterate and validate the design."
        ]
    },
    {
        id: "mine-rescue-buggy",
        name: "Mine Rescue Buggy",
        subtitle: "Yr3 Embedded C for Microcontrollers Project",
        start: new Date(2021, 2),
        end: new Date(2021, 3),
        featured: true,
        type: "Hardware",
        tags: ["C", "PIC Microcontroller"],
        thumbnail: {
            href: "/images/projects/Buggy/buggy_thumbnail.jpg",
            alt: "Mine Rescue Buggy"
        },
        media: [
            {
                image: {
                    href: "/images/projects/Buggy/1_buggy_functionality.jpg",
                    alt: "Mine Rescue Buggy 1"
                }
            },
            {
                image: {
                    href: "/images/projects/Buggy/2_buggy_colourmap.jpg",
                    alt: "Mine Rescue Buggy 2"
                }
            },
            {
                image: {
                    href: "/images/projects/Buggy/3_buggy_colourlogic.jpg",
                    alt: "Mine Rescue Buggy 3"
                }
            },
            {
                type: "video",
                href: "/images/projects/Buggy/4_buggy_colourcalib.mp4",
                alt: "Mine Rescue Buggy Video 1"
            },
            {
                type: "video",
                href: "/images/projects/Buggy/5_buggy_turning_calib.mp4",
                alt: "Mine Rescue Buggy Video 2"
            },
            {
                type: "video",
                href: "/images/projects/Buggy/6_buggy_demo.mp4",
                alt: "Mine Rescue Buggy Video 3"
            },
            {
                type: "video",
                href: "/images/projects/Buggy/7_buggy_demo.mp4",
                alt: "Mine Rescue Buggy Video 4"
            },
        ],
        people: [
            {
                name: "Frederik Masure",
                linkedin: "https://www.linkedin.com/in/frederik-masure-a97415173/"
            },
        ],
        documents: [
            {
                type: "Repository",
                href: ""
            },
        ],
        description: [
            "As part of the final project of the Embedded-C for Microcontrollers module, we developed an autonomous mine rescue robot. The buggy can navigate a conceptual mine using a set of instructions coded in coloured cards and return to its starting position - simulating a scenario of determining the location of trapped miners.",
            "Enjoy exploring the set of slides which explain the key functionalities and features of the buggy. Slides 4 onwards have calibration demos before a full demo run on the final slide.",
            "Hardware: PIC18F67K40 microchip, Clicker-2 PCB, Tricolour LED, TCS3471 Colour Light-to-digital convertor, 3.7V 2000mA LiPo battery, DRV833RTY differential motor drivers.",
            "Six core functions: movement, colour-detection, lighting, memory, calibration, and a set of fail-safes."
        ]
    },
    {
        id: "mobula-ray",
        name: "Mobula Ray",
        subtitle: "Yr2 Design Week Project",
        start: new Date(2020, 1),
        end: new Date(2020, 1),
        featured: true,
        type: "Engineering",
        tags: ["SolidWorks", "CES Selector"],
        thumbnail: {
            href: "/images/projects/MobulaRay/render1.jpg",
            alt: "Mobula Ray Render 1"
        },
        media: [
            {
                image: {
                    href: "/images/projects/MobulaRay/render2.jpg",
                    alt: "Mobula Ray Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/render3.jpg",
                    alt: "Mobula Ray Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/render4.jpg",
                    alt: "Mobula Ray Render 4"
                }
            },
            {
                image: {
                    href: "/images/projects/MobulaRay/render5.jpg",
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
                name: "Diederik Evanson",
                linkedin: "https://www.linkedin.com/in/diederik-e-348376129/"
            },
            {
                name: "Marie Obrowski Aguirre",
                linkedin: "https://www.linkedin.com/in/marie-obrowski-1112b6191/"
            },
            {
                name: "Iñigo Maruri Aldaz",
                linkedin: "https://www.linkedin.com/in/inigomaruri/"
            },
        ],
        documents: [
            {
                type: "Poster",
                href: ""
            },
        ],
        description: [
            "Mobula ray is a personal underwater propulsion device rated for a depth of 15m. Powered by a dual-motor drive train and lithium-ion batteries, it is designed to have a battery life of 2hrs for an average speed of 2 kph.",
            "I worked with a highly talented team to complete the entire design process in one week, from the initial idea to the final engineering delivery. See our final pitching poster below."
        ]
    },
    {
        id: "heat-diff-model",
        name: "2D Heat Diffusion Model",
        subtitle: "Yr2 Computing Project",
        start: new Date(2020, 1),
        end: new Date(2020, 1),
        featured: true,
        type: "Computing",
        tags: ["Python"],
        thumbnail: {
            href: "/images/projects/HeatDiffusion/heatmodel_thumbnail.jpg",
            alt: "2D Heat Diffusion Graph"
        },
        media: [
            {
                type: "video",
                href: "/images/projects/HeatDiffusion/heatmodel.mp4",
                alt: "2D Heat Diffusion Graph Animation"
            },
        ],
        people: [
            {
                name: "Frederik Masure",
                linkedin: "https://www.linkedin.com/in/frederik-masure-a97415173/"
            },
        ],
        documents: [
            {
                type: "Report",
                href: ""
            },
        ],
        description: [
            "Worked as a pair to perform a heat transfer analysis of a hot long rectangular rod being quenched in a cold fluid. Using python, we modelled the temperature distribution through the rod in the x - y directions, as it changes with time.",
            "A mixed composition of brick and steel (AISI 1010) was chosen for the rod, although this could be modified to fit any composition. The rod was long enough that the heat transfer along the longest length could be neglected, hence was modelled in two space dimensions, and time.",
            "The location and area of the secondary material was chosen to be a small rectangle, slightly offset from the centre, however, could easily be adjusted to model different problems.",
            "We assumed each section of the rod to have uniform density, uniform specific heat, and no internal heat generation. Overall, the model was described by a 3rd order parabolic partial derivative equation."
        ]
    },
    {
        id: "sonic",
        name: "SONIC",
        subtitle: "Yr2 Design & Manufacture Project",
        start: new Date(2019, 9),
        end: new Date(2019, 11),
        featured: true,
        type: "Engineering",
        tags: ["SolidWorks", "Manufacturing"],
        thumbnail: {
            href: "/images/projects/Sonic/render1.jpg",
            alt: "SONIC Render"
        },
        media: [
            {
                image: {
                    href: "/images/projects/Sonic/render1.jpg",
                    alt: "SONIC Render 1",
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/render2.jpg",
                    alt: "SONIC Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/render3.jpg",
                    alt: "SONIC Render 3"
                }
            },
            {
                image: {
                    href: "/images/projects/Sonic/render4.jpg",
                    alt: "SONIC Render 4"
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
                name: "James Lum",
                linkedin: "https://www.linkedin.com/in/james-lum-kh/"
            },
            {
                name: "Ionas Alexopoulos",
                linkedin: "https://www.linkedin.com/in/ionas-alexopoulos-8504b020b/"
            },
            {
                name: "Brindhiini Perera",
                linkedin: ""
            },
            {
                name: "Yilong Huang",
                linkedin: "https://www.linkedin.com/in/yilong-huang-6137281a7/"
            },
        ],
        documents: [
            {
                type: "Design Report",
                href: ""
            },
        ],
        description: [
            "As part of a 5-member team, we designed, manufactured and tested a miniature motorised car to race against 30 other teams in the cohort. Sonic is an ultra light, rear-wheel-drive car featuring an all plastic spur gear drive transmission.",
            "Design elements were carefully considered to maximise the ease of manufacturing, reduce the race completion time and many other criteria. Find out more about the complete design and manufacturing journey down below."
        ]
    },
    {
        id: "lift-door",
        name: "Lift Door Transmission",
        subtitle: "Yr1 Drive Tranimission Project",
        start: new Date(2019, 0),
        end: new Date(2019, 2),
        featured: false,
        type: "Engineering",
        tags: ["SolidWorks"],
        thumbnail: {
            href: "/images/projects/LiftDoor/1_liftdoor.jpg",
            alt: "Lift Door Tranmission Render"
        },
        media: [
            {
                image: {
                    href: "/images/projects/LiftDoor/1_liftdoor.jpg",
                    alt: "Lift Door Tranmission Render 1"
                }
            },
            {
                image: {
                    href: "/images/projects/LiftDoor/2_liftdoor.jpg",
                    alt: "Lift Door Tranmission Render 2"
                }
            },
            {
                image: {
                    href: "/images/projects/LiftDoor/3_liftdoor.jpg",
                    alt: "Lift Door Tranmission Render 3"
                }
            }
        ],
        people: [],
        documents: [
            {
                type: "Design Review Presentation",
                href: ""
            },
        ],
        description: [
            "An individual project to design a drive transmission for a lift door, including the complete CAD assembly and engineering drawings.",
            "The design features a two-step speed increase and converts rotary motor motion to double-acting linear motion."
        ]
    },
]