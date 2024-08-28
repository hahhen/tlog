'use client'

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import Draggable from "react-draggable"
import { cn } from "../../lib/utils"

export default function DesktopApp({slug, title, icon, size=50, children, notitlebg, className }) {
    return (
        <Dialog modal={false}>
            <DialogTrigger className={cn("flex gap-1 flex-col items-center", className)}>
                {icon && <Image alt="App" src={icon} width={size} height={size} />}
                <span className={notitlebg ? "": "bg-headerbg"}>
                    {title}
                </span>
            </DialogTrigger>
            <Draggable defaultPosition={{x: -192, y: -200}} handle={".header"+slug}>
                <DialogContent onPointerDownOutside={() => event.preventDefault()}>
                    <div className="bg-headerbg">
                        <header className={cn("appheader bg-headerbg relative flex justify-center", "header"+slug)}>
                            <span className="bg-headerbg z-50 px-4 flex items-center select-none">{title}</span>
                        </header>
                        {children}
                    </div>
                </DialogContent>
            </Draggable>
        </Dialog>
    )
}