const VimeoEmbed = ({ videoUrl }) => {
  return (
    <>
      <p style={{padding:'56.25% 0px 0px 0px',position:'relative'}}>
        <iframe
          src={videoUrl}
          style={{ position:'absolute', top:"0px", left:"0px", width:'100%', height:'100%' }}
          frameBorder="0"
          allow="fullscreen"
          allowFullScreen
        ></iframe>
      </p>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
};

export default VimeoEmbed;
