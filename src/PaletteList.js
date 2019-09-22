import React from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
const styles = {
			root:{
				backgroundColor:"blue",
				height:"100vh",
				display:"flex",
				alignItems:"flex-start",
				justifyContent:"center",
			},
			container:{
				width:"50%",
				display:"flex",
				alignItems:"flex-start",
				flexDirection:"column",
				flexWrap:"wrap"
			},
			nav:{
				display:"flex",
				width:"100%",
				justifyContent:"space-between",
				color:"white",
				alignItems:'center',
				"& a":{
					color:"white"
				}
			},
			palettes:{
				boxSizing:"border-box",
				width:"100%",
				display:"grid",
				gridTemplateColumns:"repeat(3,30%)",
				gridGap:"5%"
			}
		}
class PaletteList extends React.Component {
	getPallete(id){
		this.props.history.push(`/palette/${id}`)
	}
	render() {
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
						<Link to="/palette/new">Create New Palette</Link>
					</nav>
					<div className={classes.palettes}>
						{this.props.palettes.map(palette => (
							<MiniPalette {...palette} 
								key={palette.id}
								handleClick={() => this.getPallete(palette.id)}
							/>
						))}			
					</div>
				</div>
			</div>
			
		);
	}
}
export default withStyles(styles)(PaletteList);
