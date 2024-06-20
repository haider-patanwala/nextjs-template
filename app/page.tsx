import Player from "@/components/vid-layouts/Player"

export default function Home(): React.ReactNode {
  return (
    <main className="flex min-h-screen max-w-5xl flex-col items-center justify-between p-24">
      <div className="relative flex aspect-video h-fit w-[30rem]">
        <Player />
      </div>
    </main>
  )
}
