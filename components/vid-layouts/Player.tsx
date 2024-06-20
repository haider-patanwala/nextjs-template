"use client"
import { useRef, useState } from "react"

import {
  isYouTubeProvider,
  MediaPlayer,
  MediaProvider,
  PlayButton,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
} from "@vidstack/react"

import { VideoLayout } from "./video-layout"
import { CirclePlayIcon } from "lucide-react"
type playerProps = {
  video_src?: string
}

const Player: React.FC<playerProps> = ({ video_src }) => {
  const [started, setStarted] = useState<boolean>(false)
  //   const { setCompleted } = Video()

  let player = useRef<MediaPlayerInstance>(null)
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      provider.cookies = false
    }
  }

  return (
    <MediaPlayer
      playsInline
      title="Sprite Fight"
      src={video_src || "https://www.youtube.com/watch?v=gxc5kvzoddE"}
      className="ring-media-focus aspect-video w-full overflow-hidden rounded-md bg-slate-900
        font-sans text-white data-[focus]:ring-4"
      crossOrigin
      onProviderChange={onProviderChange}
      ref={player}
      onPlay={() => setStarted(true)}
      onEnded={() => {
        // setCompleted(true)
        setStarted(false)
      }}
    >
      <MediaProvider />
      {!started ? (
        <>
          <PlayButton className={"absolute z-10 h-full w-full bg-black"}>
            <CirclePlayIcon className="m-auto h-20 w-20 text-stone-100" />
          </PlayButton>
        </>
      ) : (
        <VideoLayout />
      )}
      <VideoLayout />
    </MediaPlayer>
  )
}
export default Player
