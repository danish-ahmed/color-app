import React from 'react';
import clsx from 'clsx';
import { withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button'
import {ChromePicker} from 'react-color';
import DragableColorBox from './DragableColorBox';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height:"calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPalleteForm extends React.Component {
	state = {
		open:false,
		currentColor: 'teal',
		colors:['purple','#e15745']
	}
	handleDrawerOpen = () => {
    	this.setState({open:true});
  	}
	handleDrawerClose = () => {
		this.setState({open:false});
	}
	updateCurrentColor = (newColor) => {
		this.setState({currentColor:newColor.hex})
	}
	addNewColors = () => {
		this.setState({colors:[...this.state.colors, this.state.currentColor]})
	}
	clearColors = () => {
		this.setState({colors:[]})
	}
	getColor = () => {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}
	getRandomColor = () => {
		// console.log(this.getColor());
		this.setState({currentColor:this.getColor()})
		// this.setState({colors:[...this.state.colors, this.getColor() ]})
	}
	render() {

		const {classes, theme} = this.props;
		const {open} = this.state;
		return (
			<div className={classes.root}>
		      <CssBaseline />
		      <AppBar
		        position="fixed"
		        className={clsx(classes.appBar, {
		          [classes.appBarShift]: open,
		        })}
		      >
		        <Toolbar>
		          <IconButton
		            color="inherit"
		            aria-label="open drawer"
		            onClick={this.handleDrawerOpen}
		            edge="start"
		            className={clsx(classes.menuButton, open && classes.hide)}
		          >
		            <MenuIcon />
		          </IconButton>
		          <Typography variant="h6" noWrap>
		            Persistent drawer
		          </Typography>
		        </Toolbar>
		      </AppBar>
		      <Drawer
		        className={classes.drawer}
		        variant="persistent"
		        anchor="left"
		        open={open}
		        classes={{
		          paper: classes.drawerPaper,
		        }}
		      >
		        <div className={classes.drawerHeader}>
		          <IconButton onClick={this.handleDrawerClose}>
		            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
		          </IconButton>
		        </div>
		        <Divider />
		        <Typography variant="h4">Add New Palette</Typography>
		        <div>
			        <Button 
			        	onClick={this.clearColors}
			        	variant="contained" 
			        	color="secondary">Clear Palette</Button>
			        <Button
			        	onClick={this.getRandomColor} 
			        	variant="contained" 
			        	color="primary">Random Color</Button>
		        </div>
		        <ChromePicker
		        	color={this.state.currentColor}
		        	onChangeComplete = {this.updateCurrentColor}
		        />
				<Button 
					variant="contained"
					onClick={this.addNewColors}
					style={{backgroundColor:this.state.currentColor}} 
					color="primary">Add Palette</Button>
		        
		      </Drawer>
		      <main
		        className={clsx(classes.content, {
		          [classes.contentShift]: open,
		        })}
		      >
		        <div className={classes.drawerHeader} />
		        
		        	{this.state.colors.map(color => (
						<DragableColorBox key={color} color={color} />
						// <li key={color}>{color}</li>
		        	))}
		        
		      </main>
		    </div>
		);
	}
}
export default withStyles(styles,{withTheme:true})(NewPalleteForm);