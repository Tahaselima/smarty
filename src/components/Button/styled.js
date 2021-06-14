import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1em;
  padding: 1em 2em;
  border-radius: 8px;
  color: ${props => props.primaryText};
  text-decoration: unset;
  background: linear-gradient(to right,${props => props.second} 0, ${props => props.primary} 157%);
  border: 1px solid ${props => props.second};
  transition: 0.5s;
  justify-content: center;
  cursor: pointer;
  display: block;
  margin: auto;
  margin-top: 30px;
  max-width: fit-content;
  &:hover {
    background: linear-gradient(to right,${props => props.primary} 0,${props => props.second} 157%);
    border: 1px solid ${props => props.primary};
    color: ${props => props.primaryText};
  }
  &:disabled,
  &[disabled]{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: no-drop;
  }
  & span {
    display: flex;
    align-items: center;
  }
`;