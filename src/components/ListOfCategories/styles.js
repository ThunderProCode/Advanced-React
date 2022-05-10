import styled from 'styled-components'

export const List = styled.ul`
    width: 100%;
    display: flex;
    overflow: scroll;
    &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
    padding: 0 8px;
`
