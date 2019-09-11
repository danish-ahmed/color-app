import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

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
		const {name, background} = this.props;
		const {copied} = this.state;
		return (
			<CopyToClipboard text={background}>
				<div style={{background}} className='ColorBox' onClick={this.handleCopyClick}>
					<div style={{background}} className={`copy-overlay ${copied && 'show'}`}  />
					<div className={`copy-msg ${copied &&'show'}`}>
						<h1>Copied</h1>
						<p>{this.props.background}</p>
					</div>
					<div className="copy-container" >
						<div className="box-content">
							<span>{name}</span>
						</div>
						<button className="copy-button" >Copy</button>
					</div>
					<span className="see-more">More</span>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox
