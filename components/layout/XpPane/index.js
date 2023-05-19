import { useState, useEffect, useRef } from "react";
import styles from './XpPane.module.scss'
import { IconButton } from "../../buttons";
import { DateDiv } from "../../badges";
import { Tag } from "../../badges";
import { useAOS } from "../../../helpers/hooks";

function XpPane({ xpData }) {
    useAOS()
    const data = xpData.sort((a, b) => b.roles[0].start - a.roles[0].start)
    const [selectedId, setSelectedId] = useState(data[0].id)
    const selectedXp = data.filter(project => project.id == selectedId)[0]

    return (
        <div className={styles.xpPane}>
            <div className={styles.logosContainer}>
                {data.map((xp, i) => {
                    return (
                        <IconButton
                            key={xp.id}
                            id={xp.id}
                            iconPath={xp.logo}
                            active={selectedId == xp.id}
                            handleSelected={setSelectedId}
                            animationDelay={i * 100} />
                    )
                })}
            </div>
            <div className={styles.xpDescription}>
                <div className={styles.overview}>
                    <a
                        href={selectedXp.link}
                        target={'_blank'}
                        rel={'noreferrer'}
                        className={styles.company}>
                        {`@${selectedXp.company}`}
                    </a>
                    <div className={styles.location}>
                        {selectedXp.location}
                    </div>
                </div>
                {selectedXp.roles.map((role, i) => {
                    return (
                        <div key={i} className={styles.role}>
                            <DateDiv start={role.start} end={role.end} duration longDate></DateDiv>
                            <div className={styles.position}>{role.position}</div>
                            <div className={styles.description}>
                                {typeof role.description === 'string' && <div className={styles.text}>{role.description}</div>}
                                {Array.isArray(role.description) && <div className={styles.text}>
                                    {role.description.map((paragraph, i) => {
                                        const splitText = paragraph.split(':')
                                        return (
                                            splitText.length > 1 ? <p key={i}><span className={styles.type}>{splitText[0]}:</span> {splitText[1]}</p> :
                                                <p key={i}>{paragraph}</p>
                                        )
                                    })}
                                </div>}
                                {role.skills && <div className={styles.tags}>
                                    {role.skills.map((skill) => {
                                        return (
                                            <Tag key={skill}>{skill}</Tag>
                                        )
                                    })}
                                </div>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default XpPane;