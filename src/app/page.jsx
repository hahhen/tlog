import Header from "@/components/header/header";
import Desktop from "@/components/desktop/desktop";

export default function Home() {
  return (
    <main className="flex w-full h-[100dvh] justify-center items-center">
      <div className="screen flex flex-col max-w-[800px] overflow-hidden rounded-xl w-full h-[600px] bg-main bg-repeat max-h-[100dvh]">
        <Header />
        <Desktop />
      </div>
    </main>
  );
}
