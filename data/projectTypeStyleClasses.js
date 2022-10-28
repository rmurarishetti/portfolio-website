export function projectTypeStyleClasses(styles, type) {
    const typesDict = {
        "Engineering": styles.engineering,
        "Hardware": styles.hardware,
        "Computing": styles.computing,
    }

    return typesDict[type];
}