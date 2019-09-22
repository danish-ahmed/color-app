import React from 'react';
import ColorBox from './ColorBox';
// import './Palette.css';
import Navbar from './Navbar';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteStyles';

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
		const {colors, id} = this.props.palette;
		const {classes} = this.props;
		const {level} = this.state;
		const colorBoxes = colors[level].map(color => (
			<ColorBox 
				background={color[this.state.format]} 
				name={color.name} 
				key={color.id} 
				paletteId={id}
				colorId={color.id}
				showingAllColors={true}
			/>	
		))
		return (
			<div className={classes.Palette}>
				<Navbar 
					showingAllColors={true}
					level={this.state.level} 
					changeLevel={this.changeLevel}
					handleChange = {this.changeFormat}
				/>
				
				<div className={classes.PaletteColors}>
					{colorBoxes}
				</div>

			</div>
		);
	}
}
export default withStyles(styles)(Palette);