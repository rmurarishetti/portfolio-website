import { geoMercator, geoPath } from 'd3-geo';
import { useState, useEffect } from 'react';

export function useGeoJson(url) {
    const [geoJsonData, setGeoJsonData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const projection = geoMercator().fitSize([800, 600], data);
                const pathGenerator = geoPath().projection(projection);
                setGeoJsonData({
                    data: data,
                    pathGenerator: pathGenerator
                });
            })
            .catch((error) => console.log(error));
    }, [url]);

    return geoJsonData;
}