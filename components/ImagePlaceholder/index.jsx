"use client";
import React from 'react';
import Image from "next/image";

const Index = ({ src, alt, width, height, style, priority, fill }) => {
    return (
        <Image
            fill={fill ? fill : false}
            src={src}
            alt={alt ? alt : src}
            width={width}
            height={height}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
            priority={priority ? priority : undefined}
            style={style ? style : null}
        />
    );
};

export default Index;