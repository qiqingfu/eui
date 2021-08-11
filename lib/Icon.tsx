import React from "react"
import "./icons"
import "./styles/icon.scss"

interface IconProps {
	name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
	return (
		// https://stackoverflow.com/questions/26815738/svg-use-tag-and-reactjs
		<svg className="e-ui-icon">
			<use xlinkHref={`#${props.name}`} />
		</svg>
	)
}

export default Icon