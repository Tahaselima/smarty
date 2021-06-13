import React from 'react';
import PropTypes from 'prop-types';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeContext, themes} from '../contexts/ThemeContext'
import { Styled } from './styles';
import Header from './Header';
import Content from './Content';
import {useLocalStorage} from '../hooks/index'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.primary)};
  }
`

const BasicLayout = ({children}) => {
	const [theme, setTheme] = useLocalStorage('theme', 'dark');
	return(
		<ThemeContext.Provider value={{theme, setTheme}}>
      		<GlobalStyle theme={themes[theme]} />
			<Styled theme={themes[theme]}>
				<ToastProvider 
					autoDismiss
					placement='top-center'
					autoDismissTimeout={5000}
					>
					<div className="public-layout">
							<Header/>
							<Content >
								{children}
							</Content>
					</div>
				</ToastProvider>
			</Styled>
		</ThemeContext.Provider>
	)
}

BasicLayout.propTypes = { children: PropTypes.element.isRequired };
  
export default BasicLayout;