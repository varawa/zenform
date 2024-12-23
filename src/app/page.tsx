import { ThemeColorToggle } from "@/components/color-mode-toggle";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/lib/utils";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-between p-24">
      <BackgroundBeams/>
      <div className="z-10 w-full max-w-5xl items-right justify-between font-mono text-sm lg:flex">
        <p
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300
          bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl
          dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static
          lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-primary text-xl"
        >
          Fill the form to register
        </p>
        <div
          className="fixed bottom-0 left-0 flex h-48 w-full items-left justify-center bg-gradient-to-t
            from-white via-white dark:from-black dark:via-black lg:static lg:size-auto
            lg:bg-none gap-x-1"
        >
          <ThemeColorToggle />
          <ThemeModeToggle />
        </div>
      </div>  
    </main>
  );
}