import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends React.Component {
	state = {
		level:500,
		format: "hex"
	}
	changeLevel = (level) => {
		this.setState({level})
	}
	changeFormat = (format) => {
		this.setState({format})
	}
	render() {
		const {colors} = this.props.palette;
		const {level} = this.state;
		const colorBoxes = colors[level].map(color => (
			<ColorBox background={color[this.state.format]} name={color.name} />	
		))
		return (
			<div className="Palette">
				<Navbar level={this.state.level} 
					changeLevel={this.changeLevel}
					handleChange = {this.changeFormat}
				/>
				
				<div className="Palette-colors">
					{colorBoxes}
				</div>
			</div>
		);
	}
}
export default Palette;