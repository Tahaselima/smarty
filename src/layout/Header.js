import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext, themes } from '../contexts/ThemeContext'
import Switch from "react-switch";
import {Moon,Sun} from "../components/svg/index"


// eslint-disable-next-line
export default () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return(
    <header className="Header">
      <div className="container">
        <div>
          <Link className="logo" to="/">smarty*</Link>
        </div>
        <div style={{border:`3px solid ${themes[theme].primary}`, borderRadius:'25px'}}>
          <Switch 
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
            checked={theme === 'light'}
            offColor={themes[theme].second}
            onColor={themes[theme].second}
            checkedIcon={
              <Moon/>
            }
            uncheckedIcon={
              <Sun/>
            }
          />
        </div>
      </div>
    </header>
  )
}