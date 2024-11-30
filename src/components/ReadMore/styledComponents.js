// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MainHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
`

export const MainDescription = styled.p`
  color: #334155;
  margin-top: 0px;
  font-family: 'Roboto';
`

export const ReactImage = styled.img`
  height: 300px;
  width: 30%;
`

export const Description = styled.p`
  color: #334155;
  font-family: 'Roboto';
  margin-left: 530px;
  margin-right: 530px;
`
export const CustomBtn = styled.button`
  outline: none;
  border: none;
  background-color: #1f81ff;
  color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`