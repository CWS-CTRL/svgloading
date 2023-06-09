import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const CT01 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 0.1, dur = 1, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="25 35 50 50" ref={svgRef}>
        <g id={getExclusiveId("l")} fill={color} stroke={color} strokeWidth={stroke}>
            <circle id={getExclusiveId("c1")} cx="30" cy="50" r="1" />
            <circle id={getExclusiveId("c2")} cx="40" cy="50" r="1" />
            <circle id={getExclusiveId("c3")} cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c4")} cx="60" cy="50" r="1" />
            <circle id={getExclusiveId("c5")} cx="70" cy="50" r="1" />
            <animateTransform href={getExclusiveId("#c1")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 15;0 0" keyTimes="0;0.65;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c2")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 15;0 0" keyTimes="0;0.65;1" dur={dur} begin={1 * dur / 10} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c3")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 15;0 0" keyTimes="0;0.65;1" dur={dur} begin={2 * dur / 10} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c4")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 15;0 0" keyTimes="0;0.65;1" dur={dur} begin={3 * dur / 10} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c5")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 15;0 0" keyTimes="0;0.65;1" dur={dur} begin={4 * dur / 10} repeatCount="indefinite" />
        </g>
    </svg>
}

export default CT01;

