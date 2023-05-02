import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Notify } from 'notiflix';
import Loader from 'components/Loader';
import { load, save } from 'services/localStorage/storage';

interface VideoPlayerProps {
  URL: string;
  muted: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ URL, muted }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const playerRef = useRef({} as ReactPlayer);

  useEffect(() => {
    const handleKeyDown = function (event: KeyboardEvent) {
      if (event.ctrlKey && event.code === 'KeyS') {
        if (event.shiftKey) {
          // Increase playback speed with Ctrl + Shift + S
          setPlaybackRate(Math.min(playbackRate + 0.25, 4));
        } else {
          // Decrease playback speed with Ctrl + S
          setPlaybackRate(Math.max(playbackRate - 0.25, 0.5));
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const getVideoProgress = () => {
    const videoProgress = load('videoProgress');
    if (!videoProgress) return 0;
    if (Object.keys(videoProgress).indexOf(URL) === -1) {
      return 0;
    }
    return parseFloat(videoProgress[URL]);
  };

  const handleProgress = (state: { playedSeconds: number }) => {
    const videoProgress = load('videoProgress') || {};
    videoProgress[URL] = state.playedSeconds;
    save('videoProgress', videoProgress);
  };

  const handleVideoEnd = () => {
    save('videoProgress', { [URL]: 0 });
  };

  const handlePlayerError = (e: any) => {
    if (e?.target?.error?.code) {
      switch (e.target.error.code) {
        case 1:
          Notify.warning('The video is not found or has been removed');
          break;
        case 2:
          Notify.warning('The video is not playable in the current browser');
          break;
        case 3:
          Notify.warning('The video has an invalid source');
          break;
        case 4:
          Notify.info('To continue your lesson, please click play button');
          break;
        case 5:
          Notify.warning('The video is too long');
          break;
        case 6:
          Notify.warning('The video is not supported');
          break;
        default:
          Notify.warning('An unknown error occurred while playing the video');
      }
    } else {
      Notify.warning(
        'An unknown error occurred while playing the video. Please, reload the page if needed'
      );
    }
  };

  const setVideoProgress = () => {
    if (!playerRef) return;
    if (!playerRef.current) return;
    playerRef.current.seekTo(getVideoProgress());
    setIsVideoLoading(false);
  };

  return (
    <>
      {isVideoLoading && <Loader />}

      <ReactPlayer
        url={URL}
        width="100%"
        height="100%"
        playing
        loop
        muted={muted}
        controls={true}
        onProgress={handleProgress}
        onReady={setVideoProgress}
        onEnded={handleVideoEnd}
        onError={handlePlayerError}
        ref={playerRef}
        playbackRate={playbackRate}
      />
    </>
  );
};

export default VideoPlayer;
