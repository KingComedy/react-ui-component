import Button, { ButtonType } from "./components/Button";
import Menu, { MenuItem , SubMenu} from "./components/Menu";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
function App() {
  return (
    <div className="App">
      
      <Menu onSelect={(index) => alert(index)} >
        <MenuItem>
          menu1
        </MenuItem>
        <MenuItem disabled >
          menu2
        </MenuItem>
        <SubMenu title="SubMenu">
          <MenuItem>
            submenu1
          </MenuItem>
          <MenuItem disabled >
            submenu2
          </MenuItem>
        </SubMenu>
        <MenuItem >
          menu3
        </MenuItem>
      </Menu>
      <Menu onSelect={(index) => alert(index)} mode="vertical" defaultOpenSubMenu={['2']}>
        <MenuItem>
          menu1
        </MenuItem>
        <MenuItem disabled >
          menu2
        </MenuItem>
        <SubMenu title="SubMenu">
          <MenuItem>
            submenu1
          </MenuItem>
          <MenuItem >
            submenu2
          </MenuItem>
        </SubMenu>
        <MenuItem >
          menu3
        </MenuItem>
      </Menu>
      <code>
        const a = b
      </code>
      <Button disabled >hello</Button>
      <Button autoFocus >autoFocus</Button>
      <Button btnType={ButtonType.Danger} >error</Button>
      <Button  btnType={ButtonType.Link} href="https://baidu.com">百度</Button>
    </div>
  );
}

export default App;
