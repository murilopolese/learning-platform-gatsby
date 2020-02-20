import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from './typography.js'

const useStyles = makeStyles({
	root: {
		'& span': {
			display: 'inline-box'
		},
		'& img': {
			width: '100%',
			maxWidth: '100%'
		}
	}
})

function ImageDisplay(props) {
	const styles = useStyles()
	return (
		<Box component="span" position="relative" textAlign="left" className={styles.root}>
			<Box component="span">
				<img alt={props.alt} {...props} />
			</Box>
			<Box component="span"
				hidden={!props.alt ? true : false}
				width="100%"
				bgcolor="rgba(255,255,255,0.7)"
				position="absolute"
				bottom="0"
				left="0">
				<Box component="span" p={2}>
					<Typography>{props.alt}</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default ImageDisplay
