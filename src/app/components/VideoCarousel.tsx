import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { replayImg, playImg, pauseImg } from "../utils";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef<Array<HTMLVideoElement | null>>([]);
  const videoSpanRef = useRef<Array<HTMLSpanElement | null>>([]);
  const videoDivRef = useRef<(HTMLDivElement | null)[]>([]);
  const container = useRef<any>();
  const [loadedData, setLoadedData] = useState([{}]);
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastvideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isLastvideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause?.();
      } else {
        startPlay && videoRef.current[videoId]?.play?.();
      }
    } else if (videoRef.current[videoId]) {
      if (videoRef.current[videoId]) {
        videoRef.current[videoId]!.muted = true; // Ensure video is muted
      }
      videoRef.current[videoId].play().catch((err) => {
        console.error("Autoplay failed:", err);
      });
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    let currentProgress = 0;

    const span = videoSpanRef.current;
    if (span[videoId]) {
      //animate the progress of current video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress != currentProgress) {
            currentProgress = progress;
          }
          //set the width of the bar
          gsap.to(videoDivRef.current[videoId], {
            width:
              window.innerWidth < 760
                ? "10vw"
                : window.innerWidth < 1200
                ? "10vw"
                : "4vw",
          });

          //set the background color of the progress bar
          gsap.to(span[videoId], {
            width: `${currentProgress}%`,
            backgroundColor: "white",
          });
        },
        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          gsap.to(videoDivRef.current[videoId], {
            width: "12px",
          });
          gsap.to(span[videoId], {
            backgroundColor: "#afafaf",
          });
        },
      });

      if (videoId === 0) {
        anim.restart();
      }
      const updateAnim = () => {
        anim.progress(
          (videoRef.current[videoId]?.currentTime ?? 0) /
            (hightlightsSlides[videoId]?.videoDuration ?? 1)
        );
      };

      if (isPlaying) {
        gsap.ticker.add(updateAnim);
      } else {
        gsap.ticker.remove(updateAnim);
      }
    }
  }, [videoId, startPlay]);

  const handLoadedMetadata = (i: any, e: any) =>
    setLoadedData((prev: any) => [...prev, e]);

  useGSAP(() => {
    // slider animation to move the video out of the screen and bring the next video in
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut", // show visualizer https://gsap.com/docs/v3/Eases
    });

    // video animation to play the video when it is in the view
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animation to move the indicator
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get the progress of the video
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            // set the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw" // mobile
                  : window.innerWidth < 1200
                  ? "10vw" // tablet
                  : "4vw", // laptop
            });

            // set the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      // update the progress bar
      const animUpdate = () => {
        anim.progress(
          (videoRef.current[videoId]?.currentTime ?? 0) /
            (hightlightsSlides[videoId]?.videoDuration ?? 1)
        );
      };

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // vd id is the id for every video until id becomes number 3

  const handleProcess = (type: string, i: number) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLastvideo: true }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, isLastvideo: false, videoId: 0 }));
        break;
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      case "pause":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i: number, e: any) =>
    setLoadedData((pre: any) => [...pre, e]);
  return (
    <div>
      <div className="w-full  max-w-screen-xl mx-auto flex items-center">
        {hightlightsSlides.map((item, i) => (
          <div key={item.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div
                className="relative w-full h-full flex-center rounded-3xl overflow-hidden
                    bg-black"
              >
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  className={`${
                    item.id === 2 && "translate-x-44"
                  } pointer-events-none video`}
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last", i)
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {item.textLists.map((text) => (
                  <p
                    key={text}
                    className="md:text-2xl text-xl font-medium text-white"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-zinc-800 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 h-3 w-3 rounded-full cursor-pointer bg-gray-400 relative"
              ref={(el: any) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el: any) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
        <button className="control-btn ">
          <Image
            src={isLastvideo ? replayImg : !isPlaying ? playImg : pauseImg}
            width={16}
            height={16}
            alt={isLastvideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastvideo
                ? () => handleProcess("video-reset", 0)
                : !isPlaying
                ? () => handleProcess("play", 0)
                : () => handleProcess("pause", 0)
            }
          />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
