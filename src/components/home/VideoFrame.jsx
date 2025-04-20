import React, { useEffect, useRef } from 'react';

const VideoFrame = ({ height, src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          } else {
            videoElement.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  const videoStyle = {
    width: '100%',
    height: height || 'auto',
  };

  return (
    <div style={videoStyle}>
      <iframe
        ref={videoRef}
        src={`${src}?enablejsapi=1`}
        title="Video Frame"
        style={videoStyle}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoFrame;
