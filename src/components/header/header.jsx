'use client'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
    MenubarSubTrigger,
    MenubarSubContent,
    MenubarSub,
} from "@/components/ui/menubar"
import Logo from "@/components/gen/logo"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Header() {
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const getTime = () => {
        const currentDate = new Date();
        if (currentDate.getHours() < 12) {
            setTime(currentDate.getHours() + ":" + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes() + "AM")
        } else {
            setTime((currentDate.getHours() - 12) + ":" + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes() + "PM")
        }
        setDate(currentDate.toDateString())
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getTime();
        }, 2000);
        return () => clearInterval(interval)
    }, [time])

    return (
        <Menubar className='px-4 justify-between'>
            <div className="left flex">
                <MenubarMenu>
                    <MenubarTrigger className="py-1.5"><Logo size={15} /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>About</MenubarItem>
                        <MenubarSub>
                            <MenubarSubTrigger>Language</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>English</MenubarItem>
                                <MenubarItem>Português</MenubarItem>
                                <MenubarItem>日本語</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarItem>Restart</MenubarItem>
                        <div className="px-2 text-xs flex flex-col text-muted-foreground">
                            <span>System information</span>
                            <span>OS: ArthurOS 1.0</span>
                            <span>Build number: 20070212AMP</span>
                        </div>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarItem>Share</MenubarItem>
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger>Open</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem><Link target="_blank" href={"https://www.linkedin.com/in/o-arthur"}>LinkedIn</Link></MenubarItem>
                        <MenubarItem><Link target="_blank" href={"https://www.github.com/hahhen"}>GitHub</Link></MenubarItem>
                        <MenubarItem>Share</MenubarItem>
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </div>
            <div className="right text-xl select-none flex">
                <span>{time}</span><span className="hidden sm:block">&nbsp;-&nbsp;{date}</span>
            </div>
        </Menubar>
    )
}