import React from 'react';
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {withStyles} from '@material-ui/styles'
import styles from './styles/ColorBoxStyles'; 


class ColorBox extends React.Component {
	state = {
		copied: false
	}
	
	handleCopyClick = () => {
		this.setState({copied:!this.state.copied}, () => {
			setTimeout(() => this.setState({copied: !this.state.copied}),1500);
		});
	}
	render() {
		const {name, background,paletteId,colorId,showingAllColors,classes} = this.props;
		const {copied} = this.state;
		
		return (
			<CopyToClipboard text={background}>
				<div style={{background}} className={classes.ColorBox} onClick={this.handleCopyClick}>
					<div style={{background}} className={`${classes.copyOverlay} ${copied && classes.copyShowOverlay}`}  />
					<div className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}>
						<h1>Copied</h1>
						<p className={classes.copyText }>{this.props.background}</p>
					</div>
					<div className="copy-container" >
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButton} >Copy</button>
					</div>
					{showingAllColors && 
						<Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
							<span  className={classes.seeMore}>More</span>
						</Link>
					}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox)
