import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/Projects.module.scss'
import { ProjectCard } from '../../components/cards';
import { projectsData } from '../../data/projectsData';
import { FilterPane, DatePane } from '../../components/layout';
import { isDateInRange } from '../../helpers/date';

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
    const [selectableTags, setSelectableTags] = useState(new Set)
    const [selectableTypes, setSelectableTypes] = useState(new Set)


    useEffect(() => {
        filteredProjects.sort((a, b) => b.start - a.start)
        setVisibleProjects(new Set(filteredProjects.map((project) => project.id)))
        // setSelectableTags(new Set(filteredProjects.map((project) => project.tags)))
    }, [filteredProjects]);

    useEffect(() => {
        const tagsSet = new Set();
        const typesSet = new Set();
        filteredProjects.forEach((project) => {
            project.tags.forEach((tag) => {
                tagsSet.add(tag);
            });
            typesSet.add(project.type);
        });
        setSelectableTags(tagsSet);
        setSelectableTypes(typesSet);
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

    const filterHelper = (query, type) => {
        if (!query) {
            return
        }
        switch (type) {
            case 'search':
                query = query.toLowerCase()
                const nameMatch = (projectData) => projectData.name.toLowerCase().includes(query)
                const subtitleMatch = (projectData) => projectData.subtitle.toLowerCase().includes(query)
                const typeMatch = (projectData) => projectData.type.toLowerCase().includes(query)
                const tagMatch = (projectData) => projectData.tags.some(tag => tag.toLowerCase().includes(query))
                const dateMatch = (projectData) => isDateInRange(projectData.start, projectData.end, query)
                setFilteredProjects((projects) => projects.filter(projectData => {
                    return nameMatch(projectData) || subtitleMatch(projectData) || typeMatch(projectData) || tagMatch(projectData) || dateMatch(projectData)
                }))
                break;
            case 'tag':
                setFilteredProjects((projects) => projects.filter(projectData => projectData.tags.includes(query)))
                break;
            case 'type':
                setFilteredProjects((projects) => projects.filter(projectData => projectData.type === query))
        }
        return
    }

    const softFilterAllBySearch = (searchTerm) => {
        filterHelper(searchTerm, 'search')
    }

    const softFilterAllbyTags = (enabledTag = null) => {
        for (const tag in tagsFilter) {
            if (tagsFilter[tag] && tag !== enabledTag) {
                filterHelper(tag, 'tag')
            }
        }
    }

    const softFilterAllByTypes = (enabledTag = null) => {
        for (const type in typeFilter) {
            if (typeFilter[type] && type !== enabledTag) {
                filterHelper(type, 'type');
            };
        };
    };

    const filterProjects = ({ searchPhrase = null, type = null, tag = null, clear = null }) => {
        if (clear) {
            setFilteredProjects(projectsData);
            setSearchFilter(false);
            setTypeFilter(inititialTypesFilter);
            setTagsFilter(inititialTagsFilter);
            setVisibleProjects(new Set());
            return
        };

        if (searchPhrase) {
            setSearchFilter(searchPhrase);
            setFilteredProjects(projectsData);
            softFilterAllbyTags();
            softFilterAllByTypes();
            softFilterAllBySearch(searchPhrase);
            return
        };

        // searched term cleared but there are existing tag and type filters...
        if (!searchPhrase && !tag && !type) {
            setSearchFilter(false);
            setFilteredProjects(projectsData);
            softFilterAllbyTags();
            softFilterAllByTypes();
            return
        };

        if (type) {
            let newTypeFilter = {};
            newTypeFilter[type] = !typeFilter[type];
            setTypeFilter(prevTypesFilterState => ({
                ...prevTypesFilterState,
                ...newTypeFilter,
            }));
            // type is disabled...
            if (!typeFilter[type]) {
                filterHelper(type, 'type');
            }
            // type is enabled...
            else {
                setFilteredProjects(projectsData);
                softFilterAllBySearch(searchFilter);
                softFilterAllbyTags();
                softFilterAllByTypes(type);
            };
            return
        };

        if (tag) {
            let newTagFilter = {};
            newTagFilter[tag] = !tagsFilter[tag];
            setTagsFilter(prevTagsFilterState => ({
                ...prevTagsFilterState,
                ...newTagFilter,
            }));
            // tag is disabled...
            if (!tagsFilter[tag]) {
                filterHelper(tag, 'tag');
            }
            // tag is enabled...
            else {
                setFilteredProjects(projectsData);
                softFilterAllBySearch(searchFilter);
                softFilterAllByTypes();
                softFilterAllbyTags(tag);
            };
            return
        }
    }


    return (
        <>
            <Head>
                <title>Rohit Murarishetti | Projects</title>
                <meta name="description" content="A collection of my engineering, hardware, ui/ux, design, and computing projects." />
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
            </Head>
            <div className={styles.projectPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {/* <div className={styles.emoji}>🚀</div> */}
                        <div className={styles.text}>Projects</div>
                    </div>
                    <p>A collection of my major projects.</p>
                </div>
                <div className={styles.filterPaneContainer}>
                    <FilterPane
                        count={filterCount}
                        name={'projects'}
                        filterFunction={filterProjects}
                        typeFilterState={typeFilter}
                        tagsFilterState={tagsFilter}
                        selectableTags={selectableTags}
                        selectableTypes={selectableTypes} />
                </div>
                <div className={styles.datePaneContainer}>
                    <DatePane
                        start={filteredProjects[0] ? filteredProjects[0].end : ''}
                        end={filteredProjects[0] ? filteredProjects[filteredProjects.length - 1].start : ''}
                        cardCount={filteredProjects[0] ? filteredProjects.length : 1} />
                </div>
                {filteredProjects[0] && <div className={styles.grid}>
                    {projectsData.map((projectData) => {
                        return (
                            <div
                                className={styles.cardContainer}
                                key={projectData.id}
                                style={{ display: !visibleProjects.has(projectData.id) ? 'none' : 'flex' }}>
                                <ProjectCard {...projectData} />
                            </div>
                        )
                    })}
                </div>}
                {filteredProjects.length === 0 && <div className={styles.noProjects}>
                    {console.log('no projects')}
                    <div className={styles.emoji}>😔</div>
                    <div className={styles.text}>No projects found.</div>
                    <div className={styles.description}>Please try a different search query.</div>
                </div>}
            </div>
        </>
    );
}

export default Projects;