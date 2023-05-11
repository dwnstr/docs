import React, { useState, useEffect } from 'react'

const Video = ({url}) => {

  const [embedUrl, setEmbedUrl] = useState(url)

  function getYouTubeEmbedUrl(url) {
    var embedString = 'https://www.youtube.com/embed/';
    
    // Check if the URL is already an embed link
    if (url.startsWith(embedString)) {
      return url;
    }
    
    var videoId = url.split('v=')[1];
    var ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    
    console.log("Youtube URL parsed to: ", embedString + videoId)
    return embedString + videoId;
  }
  
  useEffect(() => {
    setEmbedUrl(getYouTubeEmbedUrl(url))
  }, [url])

  return (
    <iframe 
      className="nx-w-full nx-rounded-xl nx-aspect-video nx-mt-4"
      src={getYouTubeEmbedUrl(url)}
      allowFullScreen
      title='video'
    />
  )
}

export default Video