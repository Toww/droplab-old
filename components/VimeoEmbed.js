const VimeoEmbed = ({ videoUrl }) => {
  return (
    <>
      <div style={{padding:'56.25% 0px 0px 0px',position:'relative'}}>
        <iframe
          src={videoUrl}
          style={{ position:'absolute', top:"0px", left:"0px", width:'100%', height:'100%' }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
};

export default VimeoEmbed;