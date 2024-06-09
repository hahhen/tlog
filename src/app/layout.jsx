import { VT323 } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { cookies } from "next/headers";
import { createClient } from '@/utils/supabase/server'

const VT323f = VT323({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "ArthurOS",
  description: "Arthur's, aka Hahhen, personal website and portfolio.",
};

const cookieStore = cookies()
export const supabase = createClient(cookieStore)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(VT323f.className, 'bg-black overflow-hidden')}>{children}</body>
    </html>
  );
}
