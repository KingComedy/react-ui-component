import classNames from "classnames"
import { useContext } from "react"
import { MenuContext } from "./Menu"

export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames(className, 'menu-item', {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if(context.onSelect && !disabled && index) {
      context.onSelect(index)
    }
  }
  return (<li className={classes} style={style} onClick={handleClick}>
    {children}
  </li>)
}
MenuItem.displayName = 'MenuItem'
export default MenuItem