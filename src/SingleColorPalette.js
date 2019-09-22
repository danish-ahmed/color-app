import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
// import {Link} from 'react-router-dom';
import {withStyles} from  '@material-ui/styles';
import styles from './styles/SinglePaletteStyles'


class SingleColorPalette extends React.Component {
	constructor(props){
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId)
	}
	state={format:'hex'}
	changeFormat = (format) => {
		this.setState({format})
	}
	gatherShades(palette, colorToFilterBy){
		let shades = [];
		let allColors = palette.colors;
		for(let key in allColors){
			shades = shades.concat(
				allColors[key].filter(color => color.id === colorToFilterBy)
			)
		}
		return shades.slice(1);
	}
	handleGoBack = () => {
		this.props.history.goBack();
	}
	render() {
		const {classes} = this.props
		return (
			<div className={classes.Palette}>
				<Navbar level={this.state.level} 
					showingAllColors={false}
					handleChange = {this.changeFormat}
				/>
				<div className={classes.PaletteColors}>
				{this._shades.map(color => (
					<ColorBox 
						key={color.name}
						showingAllColors={false} 
						background={color[this.state.format]} 
						paletteId={color.id}
						colorId={color.id}
					/>
				))}
					<div className={classes.goBack}>
						<button className={classes.backButton} onClick={this.handleGoBack}>Go Back</button>
					</div>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(SingleColorPalette)