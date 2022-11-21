import { MeshStandardMaterial } from "three";

export const xpData = [
    {
        logo: "/images/icons/logos/microsoft_logo.svg",
        id: 'ms',
        company: "Microsoft",
        roles: [
            {
                position: "Software Engineer Intern",
                start: new Date(2022, 6),
                end: new Date(2022, 8, 30),
                description: "Worked in the Microsoft Search Assistance & Intelligence (MSAI) team. Developed within the Windows OS code-base, specifically on the preprocessing of telemetry data for the training of File Explorer recommendations models.",
                skills: ["C++", "C#", "XAML", "React"]
            }
        ]
    },
    {
        logo: "/images/icons/logos/rr_logo.svg",
        id: 'rr',
        company: "Rolls-Royce",
        roles: [
            {
                position: "Systems Design Intern",
                start: new Date(2022, 0, 3),
                end: new Date(2022, 6, 3),
                description: "Worked on the Rolls-Royce led 11-partner R&T project, COLIBRI, to improve design automation within the aerospace industry through introducing ML and AI.",
                skills: ["C#", "Python", "MATLAB", "Siemens NX"]
            },
            {
                position: "Automation & Controls Intern",
                start: new Date(2021, 5, 4),
                end: new Date(2021, 11, 25),
                description: "Worked within the Artificial Chief Engineer (ACE) team, developing RR's new autonomous machinery control system for Naval vessels.",
                skills: ["HTML", "JavaScript", "CSS"]
            }
        ]
    },
    {
        logo: "/images/icons/logos/bp_logo.svg",
        id: 'bp',
        company: "BP",
        roles: [
            {
                position: "Spring Engineering Intern",
                start: new Date(2020, 3),
                end: new Date(2020, 8),
                description: "Exposure to BP’s upstream activities and strategies to meet future carbon emission goals.",
                skills: []
            },
        ]
    },
    {
        logo: "/images/icons/logos/beckett_logo.svg",
        id: 'br',
        company: "Beckett Rankine",
        roles: [
            {
                position: "Marine Civil Engineering Insight",
                start: new Date(2019, 2, 1),
                end: new Date(2019, 2, 10),
                description: "Explored different wave propagation prevention techniques used in ports.",
                skills: []
            },
        ]
    },
    {
        logo: "/images/icons/logos/shell_logo.svg",
        id: 'shell',
        company: "Shell",
        roles: [
            {
                position: "Well Engineering Insight",
                start: new Date(2016, 3, 1),
                end: new Date(2016, 3, 10),
                description: "Work shadow within Qatar Shell’s upstream division - insight into subsurface data gathering and general well design.",
                skills: []
            },
        ]
    }
]