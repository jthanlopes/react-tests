import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 5rem;
  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;
  border: 10px dotted ${props => props.theme.pink};
`