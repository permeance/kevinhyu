import React from "react"

const Video = ({ videoSrc, videoTitle }) => (
  <iframe
    src={videoSrc}
    class="w-full h-full"
    title={videoTitle}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
  />
)
export default Video