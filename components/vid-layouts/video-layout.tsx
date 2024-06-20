import * as Tooltip from "@radix-ui/react-tooltip"
import { Controls, Gesture } from "@vidstack/react"

import * as Buttons from "./buttons"
import * as Sliders from "./sliders"
import * as Menus from "./menus"
import { TimeGroup } from "./timeGroup"

// Offset tooltips/menus/slider previews in the lower controls group so they're clearly visible.
const popupOffset = 30

export function VideoLayout() {
  return (
    <>
      <Gestures />
      <Controls.Root
        className="absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/50
          from-10% via-black/10 via-30% to-transparent to-100% opacity-0
          transition-opacity data-[visible]:opacity-100"
      >
        <Tooltip.Provider>
          <div className="flex-1" />
          <Controls.Group className="flex w-full items-center px-2">
            <Sliders.Time />
          </Controls.Group>
          <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2">
            <Buttons.Play
              tooltipAlign="start"
              tooltipOffset={popupOffset}
            />
            <Buttons.Mute tooltipOffset={popupOffset} />
            <Sliders.Volume />
            <div className="flex-1" />
            <TimeGroup />
            <Menus.Settings />
            <Buttons.Fullscreen
              tooltipAlign="end"
              tooltipOffset={popupOffset}
            />
          </Controls.Group>
        </Tooltip.Provider>
      </Controls.Root>
    </>
  )
}

function Gestures() {
  return (
    <>
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className="absolute left-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className="absolute right-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </>
  )
}
