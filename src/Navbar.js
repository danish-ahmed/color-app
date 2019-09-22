import React from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Select, MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


export default class Navbar extends React.Component {

	state = {
		format: "hex",
		open: false
	}

	handleFormatChange = (e) => {
		this.setState({format:e.target.value}); 
		this.props.handleChange(e.target.value);
		this.setState({open: !this.state.open})
	}
	closeSnackBar = () =>{
		this.setState({open:!this.state.open})
	}
	render() {
		const {level, changeLevel, showingAllColors} = this.props;
		const {format,open} = this.state;
		return (
			<header className='Navbar'>
				<div className='logo'>
					<Link to="/">reactcolorpicker</Link>
				</div>
				{showingAllColors &&
					<div className="slider-container"> 
						<span>Level: {level}</span>
						<div className="slider">
							<Slider 
								defaultValue={level} 
								min={100} 
								max={900}
								step = {100}
								onAfterChange = {changeLevel}
							/>
						</div>
					</div>
				}
				<div className="select-container">
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #fffff</MenuItem>
						<MenuItem value="rgb">RGB</MenuItem>
						<MenuItem value="rgba">RGBA</MenuItem>
					</Select>
				</div>
				<Snackbar 
					anchorOrigin={{vertical: "bottom", horizontal:"left"}} 
					open={open}
					autoHideDuration={3000}
					message={<span>Format Changed to {format.toUpperCase()}</span>}
					ContentProps={{
						"aria-describedby": "message-id"
					}}
					onClose={this.closeSnackBar}
					action={[
						<IconButton onClick={this.closeSnackBar} 
							color='inherit' 
							key='close'
							aria-label='close'
						>
						<CloseIcon />
						</IconButton>
					]}
				/>
			</header>
		);
	}
}
