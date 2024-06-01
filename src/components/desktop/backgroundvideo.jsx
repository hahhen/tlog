'use client'
import React from "react";

export var [stateBgVideo, setStateBgVideo] = "";

export default function BackgroundVideo() {
    [stateBgVideo, setStateBgVideo] = React.useState("");
    return(
        <iframe src={stateBgVideo} className="w-full -z-10 h-[100dvh] scale-125 fixed left-0 top-0 right-0 bottom-0 pointer-events-none" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}