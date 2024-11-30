// Write your code here
// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  MainHeading,
  MainDescription,
  ReactImage,
  Description,
  CustomBtn,
} from './styledComponents'

const ReadMore = props => {
  const [isClicked, setIsClicked] = useState(false)
  const {reactHooksDescription} = props

  const initialDescription = reactHooksDescription.slice(0, 170)

  const description = isClicked ? reactHooksDescription : initialDescription

  const btnText = isClicked ? 'Read Less' : 'Read More'

  const onClickBtn = () => setIsClicked(prevIsClick => !prevIsClick)

  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <MainDescription>Hooks are a new addition to React </MainDescription>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description name="comments" rows="8" cols="10">
        {description}
      </Description>
      <CustomBtn type="button" onClick={onClickBtn}>
        {btnText}
      </CustomBtn>
    </MainContainer>
  )
}

export default ReadMore