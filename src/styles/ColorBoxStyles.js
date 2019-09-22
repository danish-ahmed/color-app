import chroma from 'chroma-js'

export default {
	copyText:{
		color: props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.8)' : 'white'
	},
	colorName:{
		color: props => chroma(props.background).luminance() <= 0.1 ? 'white' : 'black'
	},
	seeMore:{
		background: props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.1)': 'rgba(255,255,255,0.3)',
		border:"none",
		position:"absolute",
		bottom:"0px",
		right:"0px",
		color: props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.8)' : 'white' ,
		width: "60px",
		height: "30px",
		textAlign: "center",
		lineHeight: "30px",
		fontSize: "13px",
	},
	
	ColorBox:{
		width:"20%",
		height:props => props.showingAllColors ? "25%" : "50%",
		margin:"0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		textTransform: "uppercase",
		marginBottom: "-3.8px",
		"&:hover button": {
			border: "1px dashed ",
			borderColor: props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.8)' : 'white',
			opacity:'1'	
		}
	},

	boxContent: {
		position:"absolute",
		left:"0px",
		bottom:"0px",
		width:"100%",
		padding: "10px",
		color:"black",
		letterSpacing:"1px",
		fontSize: "12px", 
	},
	copyButton: {
		textTransform: "uppercase",
		width:"100px",
		height: "30px",
		position: "absolute",
		display: "inline-block",
		top:"50%",
		left:"50%",
		marginLeft:"-50px",
		marginTop:"-15px",
		textAlign:"center",
		outline: "none",
		background: "rgba(255,255,255,0.1)",
		fontSize: "1rem",
		lineHeight: "30px",
		color: props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.8)' : 'white',
		border:"none",
		cursor:"pointer",
		// fontSize: "13px",
		opacity:"0",
		transition:"transform 0.6s ease-in-out",
	},
	
	copyOverlay:{
		opacity:"0",
		zIndex:" 0",
		width:"100%",
		height:"100%",
		transition:"transform 0.6s ease-in-out",
		transform:"scale(0.1)",
	},
	copyShowOverlay:{
		opacity:"1",
		transform: "scale(50)",
		zIndex: "10",
		position: "absolute",
	},

	copyMsg:{
		position:" fixed",
		top:"0",
		left:" 0",
		right:"0",
		bottom:" 0",
		display:" flex",
		alignItems:" center",
		justifyContent:" center",
		flexDirection:" column",
		fontSize:" 4rem",
		transform:" scale(0.1)",
		opacity:" 0",
		color:" white",
		"& h1":{
			fontWeight:" 400",
			textShadow:" 1px 2px black",
			background:" rgba(255,255,255,0.3)",
			width:"100%",
			textAlign:" center",
			marginBottom:"0",
			padding:" 1rem",
		},
		"& p": {
			fontSize: "2rem",
			fontWeight: "100",
		}
	},
	showCopyMsg:{
		opacity: "1",
		transform: "scale(1)",
		zIndex: "25",
		transition: "all 0.4s ease-in-out",
		transitionDelay: "0.3s",
	}
}