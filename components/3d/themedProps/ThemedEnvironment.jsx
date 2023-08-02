import { useEffect, useState } from 'react';
import { Environment } from '@react-three/drei';

function getThemePath(theme) {
    return theme === 'light' ?
        '/3d/venice_sunset_1k.hdr' :
        '/3d/dikhololo_night_1k.hdr';
}

function ThemedEnvironment({ theme }) {

    const [path, setPath] = useState(getThemePath(theme))

    useEffect(() => {
        setPath(getThemePath(theme))
    }, [theme])


    return (
        <Environment
            background={false}
            files={path}
        />
    )
}

export default ThemedEnvironment;