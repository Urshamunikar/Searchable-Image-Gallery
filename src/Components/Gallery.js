import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'


const Gallery = (props) => {
    return (
        <div>
            <GridList cellHeight={375} cols={4}>
                {props.photos.map(img => {
                    return (<GridListTile style={{
                        flexGrow: '1'
                    }}
                        key={img.id}
                        cols={img.width / 1000 / 4}>
                        <img src={img.urls.regular} alt={img.alt_description} />

                        <GridListTileBar title={img.description} subtitle={img.user.name} />
                    </GridListTile>
                    )

                })}
            </GridList>
        </div>
    )
}
export default Gallery