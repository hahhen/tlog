import Folder from '@/components/app/folder'
import Link from 'next/link'
import Image from 'next/image'
import DesktopApp from '@/components/app/desktopapp'
import { cookies } from "next/headers";
import { createClient } from '@/utils/supabase/server'

export default async function Desktop() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    let { data: album, error1 } = await supabase
        .from('album')
        .select('id, title, cover, slug, video')
    let { data: song, error2 } = await supabase
        .from('song')
        .select('id, title, albumid, url, track_number')
        .order('track_number', { ascending: true })
    return (
        <div className="w-full p-2 flex justify-end">
            <div className="grid grid-rows-3 z-10 grid-flow-col gap-4">
                {album.map((album) => (
                    <Folder key={album.id} video={album.video} slug={album.slug} icon="/folder.png" cover={album.cover} items={song.filter(song => song.albumid == album.id)} title={album.title} />
                ))}
            </div>
        </div>
    )
}