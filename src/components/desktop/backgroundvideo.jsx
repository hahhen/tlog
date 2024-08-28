'use client'
import React from "react";
import ReactPlayer from "react-player";

export var [stateBgVideo, setStateBgVideo] = "";

export default function BackgroundVideo() {
    [stateBgVideo, setStateBgVideo] = React.useState("");
    return(
        <video src={stateBgVideo+"#t=60"} autoPlay muted className="w-full -z-10 h-[100dvh] scale-125 overflow-hidden absolute left-0 top-0 right-0 bottom-0 pointer-events-none" />
    )
}