import Image from "next/image";
import { useState } from "react";

const RatioImage = ({ src, alt, width }) => {
    const [ratio, setRatio] = useState(16 / 9); // this value can be anything by default, could be 1 if you want a square
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={width / ratio}
            layout="fixed"
            onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                setRatio(naturalWidth / naturalHeight);
            }}
        />
    );
};
export default RatioImage;