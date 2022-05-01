const VimeoEmbed = ({ videoUrl }) => {
	return (
		<>
			<p style={{ padding: '56.25% 0px 0px 0px', position: 'relative' }}>
				<iframe
					className="absolute top-0 left-0 w-full h-full "
					src={videoUrl}
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
