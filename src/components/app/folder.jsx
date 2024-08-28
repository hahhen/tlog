'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import DesktopApp from "@/components/app/desktopapp";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"
import ReactAudioPlayer from 'react-audio-player';
import Draggable from "react-draggable"
import { cn } from "../../lib/utils";
import React from "react";
import { setStateBgVideo } from "@/components/desktop/backgroundvideo";
import ReactPlayer from "react-player";

export default function Folder({ video, id, slug, items, title, cover, icon }) {
    console.log(video)
    return (
        <DesktopApp id={id} slug={slug} title={title} icon={icon}>
            <ScrollArea className={"h-96 p-2"}>
                <div className="flex flex-col">
                    {video &&
                        <div className="aspect-video mb-2 rounded overflow-hidden">
                            <ReactPlayer controls={true} url={video} width="100%" height="100%" />
                        </div>
                    }
                    <div className="grid grid-cols-3 grid-flow-row gap-4">
                        {items.map((item, i) => (
                            <Dialog onOpenChange={(open) => {
                                open ? setStateBgVideo(video) : setStateBgVideo("")
                            }} key={i} modal={false}>
                                <DialogTrigger className={"flex flex-col items-center"}>
                                    <Image alt="Song" src={"/sound.png"} width={40} height={40} />
                                    <span className="bg-headerbg">
                                        {item.title}
                                    </span>
                                </DialogTrigger>
                                <Draggable defaultPosition={{ x: -192, y: -200 }} handle={".header" + slug + item.id}>
                                    <DialogContent onPointerDownOutside={() => event.preventDefault()}>
                                        <div>
                                            <header className={cn("bg-headerbg appheader relative flex justify-center", "header" + slug + item.id)}>
                                                <span className="bg-headerbg z-50 px-4 flex items-center select-none">{item.title}</span>
                                            </header>
                                            <div className="flex bg-headerbg p-3 flex-col items-center">
                                                {cover && <Image src={cover} width={400} height={400} />}
                                                <ReactAudioPlayer
                                                    src={item.url}
                                                    autoPlay
                                                    controls
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Draggable>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </ScrollArea>
        </DesktopApp>
    )
}