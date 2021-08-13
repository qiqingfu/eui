import React from "react"
import classNames from "classnames";
import "./icons"
import "./styles/icon.scss"

export interface IconProps<T = SVGElement> extends React.SVGAttributes<T> {
  name: string,
  color?: string,
  size?: number
}

const Icon: React.FunctionComponent<IconProps> = ({name, className, ...props}) => {
  const { style, restProps } = useStyle((props as IconProps))

  return (
    // https://stackoverflow.com/questions/26815738/svg-use-tag-and-reactjs
    <svg className={classNames('e-ui-icon', className)} {...restProps} style={style}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  )
}

function useStyle (props: IconProps) {
  let { style = {}, color, size, ...restProps } = props

  if (color) style.fill = color
  if (size) style.fontSize = size

  return {
    style,
    restProps
  }
}

export default Icon