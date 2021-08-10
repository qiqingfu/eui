import React from "react"
import "./icons"

interface IconProps {
	name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
	return (
		// https://stackoverflow.com/questions/26815738/svg-use-tag-and-reactjs
		<svg>
			<use xlinkHref={`#${props.name}`} />
		</svg>
	)
}

export default Icon