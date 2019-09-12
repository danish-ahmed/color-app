import React from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';

export default class PaletteList extends React.Component {
	render() {
		return (
			<div>
				<MiniPalette />
				{this.props.palettes.map(palette => (
					<Link to={`/palette/${palette.id}`}>
						<h1>{palette.paletteName}</h1>
					</Link>
				))}			
			</div>
		);
	}
}
