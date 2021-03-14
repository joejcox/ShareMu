import React, { useRef, useEffect, useState } from "react";
import styles from "./SoundContainer.module.scss";
import WaveSurfer from "wavesurfer.js";
import PlayButton from "../Controls/PlayButton";
import PauseButton from "../Controls/PauseButton";

const SoundContainer = ({ title, image, audio }) => {
  const [ws, setWs] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(null);
  const waveForm = useRef(null);

  useEffect(() => {
    if (!waveForm.current) return false;

    setWs(
      WaveSurfer.create({
        container: waveForm.current,
        waveColor: "rgb(100, 48, 184)",
        progressColor: "rgb(37, 18, 68)",
        cursorWidth: 0,
        height: 80,
      })
    );
  }, []);

  useEffect(() => {
    if (ws) {
      ws.load(audio);
    }
  }, [ws, audio]);

  const getDuration = () => {
    const songDuration = Math.floor(ws.getDuration());
    const minutes = Math.floor(songDuration / 60);
    const seconds = Math.floor(((songDuration - minutes) * 60) / 1000);
    const durationFormatted = `${minutes}:${seconds}`;
    setDuration(durationFormatted);
  };

  const getTime = () => {
    const songCurrentTime = Math.floor(ws.getCurrentTime());
    if (songCurrentTime < 60)
      return `0:${
        songCurrentTime < 10 ? `0${songCurrentTime}` : songCurrentTime
      }`;
    const minutes = Math.floor(songCurrentTime / 60);
    const seconds = Math.floor(songCurrentTime % 60);
    const currentTimeFormatted = `${minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;

    return currentTimeFormatted;
  };

  const processAudio = () => {
    ws.on("audioprocess", () => {
      const currentTimeFormatted = getTime();
      setCurrentTime(currentTimeFormatted);
    });
  };

  const playAudio = () => {
    ws.play();
    processAudio();
    getDuration();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    ws.pause();
    setIsPlaying(false);
  };

  return (
    <section className={styles.sound_container}>
      <header className={styles.sound_header}>
        <div className={styles.sound_thumbnail}>
          <img src={image} alt="A meadow" />
        </div>
        <h3 className={`title is-3 ${styles.sound_title}`}>{title}</h3>
      </header>
      <div className="waveform" ref={waveForm}></div>
      <footer className={styles.sound_footer}>
        {isPlaying ? (
          <PauseButton click={pauseAudio} />
        ) : (
          <PlayButton click={playAudio} />
        )}
        <span className={styles.song_time}>
          {currentTime <= 0 ? null : currentTime}
        </span>
        <span className={styles.song_duration}>{duration}</span>
      </footer>
    </section>
  );
};

export default SoundContainer;
