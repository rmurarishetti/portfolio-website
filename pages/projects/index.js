import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/Projects.module.scss'
import { ProjectCard } from '../../components/cards';
import { projectsData } from '../../data/projectsData';
import { FilterPane } from '../../components/layout';

function Projects() {
    // Get all unique tags and types and store them in objects as filtered=false state
    let inititialTagsFilter = {};
    let inititialTypesFilter = {};
    projectsData.forEach(project => {
        if (!inititialTypesFilter[project.type]) { inititialTypesFilter[project.type] = false };
        project.tags.forEach(tag => {
            if (!inititialTagsFilter[tag]) { inititialTagsFilter[tag] = false }
        });
    })


    const [filteredProjects, setFilteredProjects] = useState(projectsData)
    const [searchFilter, setSearchFilter] = useState(false)
    const [typeFilter, setTypeFilter] = useState(inititialTypesFilter)
    const [tagsFilter, setTagsFilter] = useState(inititialTagsFilter)
    const [visibleProjects, setVisibleProjects] = useState(new Set)
    const [filterCount, setFilterCount] = useState(false)


    useEffect(() => {
        setVisibleProjects(new Set(filteredProjects.map((project) => project.id)))
    }, [filteredProjects]);

    useEffect(() => {
        let count = searchFilter ? 1 : 0;
        for (const type in typeFilter) {
            if (typeFilter[type]) {
                count++
            }
        }
        for (const tag in tagsFilter) {
            if (tagsFilter[tag]) {
                count++
            }
        }
        setFilterCount(count)
    }, [searchFilter, typeFilter, tagsFilter]);

    const softSearchFilter = (searchTerm) => {
        const search = searchTerm.toLowerCase()
        setFilteredProjects((projects) => projects.filter(projectData => {
            return projectData.name.toLowerCase().includes(searchTerm) || projectData.subtitle.toLowerCase().includes(searchTerm)
        }))
    }

    const softTagFilter = () => {
        for (const tag in tagsFilter) {
            if (tagsFilter[tag]) {
                setFilteredProjects((projects) => projects.filter(projectData => projectData.tags.includes(tag)))
            }
        }
    }

    const filterProjects = ({ searchPhrase = null, type = null, tag = null, clear = null }) => {
        if (clear) {
            setFilteredProjects(projectsData)
            setSearchFilter(false)
            setTypeFilter(inititialTypesFilter)
            setTagsFilter(inititialTagsFilter)
            setVisibleProjects(new Set())
            return
        }
        if (searchPhrase) {
            setSearchFilter(searchPhrase)
            softSearchFilter(searchPhrase)
        }

        if (!searchPhrase && !tag && !type) {
            setSearchFilter(false)
            setFilteredProjects(projectsData)
            for (const tag in tagsFilter) {
                if (tagsFilter[tag]) {
                    setFilteredProjects((projects) => projects.filter(projectData => projectData.tags.includes(tag)))
                }
            }
            for (const type in typeFilter) {
                if (typeFilter[type]) {
                    setFilteredProjects((projects) => projects.filter(projectData => projectData.type === type))
                }
            }
        }

        if (type) {
            let newTypeFilter = {}
            newTypeFilter[type] = !typeFilter[type];
            setTypeFilter(prevTypesFilterState => ({
                ...prevTypesFilterState,
                ...newTypeFilter,
            }))
            if (!typeFilter[type]) {
                setFilteredProjects((projects) => projects.filter(projectData => projectData.type === type))
            }
            else {
                setFilteredProjects(projectsData);
                if (searchFilter) { softSearchFilter(searchFilter) }
                for (const tag in tagsFilter) {
                    if (tagsFilter[tag]) {
                        setFilteredProjects((projects) => projects.filter(projectData => projectData.tags.includes(tag)))
                    }
                }
                for (const typeFilter in typeFilter) {
                    if (typeFilter[typeFilter] && type != typeFilter) {
                        setFilteredProjects((projects) => projects.filter(projectData => projectData.type === typeFilter))
                    }
                }
            }
        }
        if (tag) {
            let newTagFilter = {}
            newTagFilter[tag] = !tagsFilter[tag];
            setTagsFilter(prevTagsFilterState => ({
                ...prevTagsFilterState,
                ...newTagFilter,
            }))
            if (!tagsFilter[tag]) {
                setFilteredProjects((projects) => projects.filter(projectData => projectData.tags.includes(tag)))
            }
            else {
                setFilteredProjects(projectsData);
                if (searchFilter) { softSearchFilter(searchFilter) }
                for (const type in typeFilter) {
                    if (typeFilter[type]) {
                        setFilteredProjects((projects) => projects.filter(projectData => projectData.type === type))
                    }
                }
                for (const tagFilter in tagsFilter) {
                    if (tagsFilter[tagFilter] && tag != tagFilter) {
                        setFilteredProjects((projects) => projects.filter(projectData => projectData.tags.includes(tagFilter)))
                    }
                }
            }
        }
    }


    return (
        <>
            <Head>
                <title>Rohit Nag | Projects</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
                <link rel="icon" type="image/png" href="/favicon.ico" />
            </Head>
            <div className={styles.projectPage}>
                <div className={styles.header}>
                    <h1>🚀 Projects</h1>
                    <p>A collection of my major projects.</p>
                </div>
                <div className={styles.filterPane}>
                    <FilterPane count={filterCount} name={'projects'} filterFunction={filterProjects} typeFilterState={typeFilter} tagsFilterState={tagsFilter} />
                </div>
                <div className={styles.grid}>
                    {projectsData.map((projectData) => {
                        return (
                            <div className={styles.cardContainer} key={projectData.id} style={{ display: !visibleProjects.has(projectData.id) ? 'none' : 'flex' }}>
                                <ProjectCard {...projectData} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Projects;