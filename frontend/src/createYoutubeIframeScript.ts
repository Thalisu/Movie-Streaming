const createYoutubeIframeAPIScript = () => {
  if (document.getElementById("iframeAPI") === null) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.id = "iframeAPI";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag.parentNode !== null)
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
};
export default createYoutubeIframeAPIScript;
