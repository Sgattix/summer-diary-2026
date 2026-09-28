"use client";

import { Audio, formatTime } from "@sina_byn/re-audio";
import {
  IconVolume,
  IconVolume2,
  IconPlayerSkipForwardFilled,
  IconPlayerTrackPrevFilled,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
} from "@tabler/icons-react";
import React, { FC } from "react";

interface IProps {
  playlist: Array<{
    name: string;
    writer: string;
    img: string;
    src: string;
    id: number;
  }>;
}

/**
 * @author
 * @function @AudioPlayer
 **/

export const AudioPlayer: FC<IProps> = ({ playlist }) => {
  return (
    <div className="bg-neutral-900/50 p-5 rounded-lg max-w-4xl my-5 ">
      <Audio playlist={playlist}>
        {({
          loading,
          trackIndex,
          playlist,
          playing,
          togglePlay,
          duration,
          currentTime,
          volume,
          setVolume,
          prevTrack,
          nextTrack,
          rewindTrack,
          forwardTrack,
          setCurrentTime,
        }) => (
          <div>
            <div className="flex">
              <div className="flex max-md:flex-col justify-between gap-4 w-full">
                <div className="flex items-center gap-4">
                  <div className="size-[60px] bg-[#c4c4c4] rounded" />

                  <div className="flex flex-col">
                    <span className="capitalize">
                      {/* @ts-ignore */}
                      {playlist[trackIndex].name.split(/-/).join(" ")}
                    </span>
                    <span>
                      {formatTime(currentTime)} - {formatTime(duration)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center max-md:justify-center gap-x-4">
                  <button type="button" onClick={rewindTrack.bind(null, 10)}>
                    <IconPlayerSkipForwardFilled
                      style={{ transform: "scaleX(-1)" }}
                    />
                  </button>

                  <button type="button" onClick={prevTrack}>
                    <IconPlayerTrackPrevFilled />
                  </button>

                  <button type="button" onClick={togglePlay}>
                    {playing ? (
                      <IconPlayerPauseFilled />
                    ) : (
                      <IconPlayerPlayFilled />
                    )}
                  </button>

                  <button type="button" onClick={nextTrack}>
                    <IconPlayerTrackNextFilled />
                  </button>

                  <button type="button" onClick={forwardTrack.bind(null, 10)}>
                    <IconPlayerSkipForwardFilled />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <input
                type="range"
                min="0"
                max={duration}
                step="1"
                className="w-full"
                value={currentTime}
                onChange={(e) => setCurrentTime(+e.currentTarget.value)}
              />
            </div>

            <div className="flex items-center justify-between gap-x-4">
              <div className="flex items-center gap-x-2 mt-4">
                <IconVolume2 />

                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full md:w-[150px]"
                  value={volume}
                  onChange={(e) => setVolume(+e.currentTarget.value)}
                />

                <IconVolume />
              </div>

              {loading && (
                <span className="max-lg:text-sm mt-2">loading...</span>
              )}
            </div>
          </div>
        )}
      </Audio>
    </div>
  );
};
