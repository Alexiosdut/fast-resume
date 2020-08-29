import React from "react"
import styled from "styled-components"

import { useFormContext } from "../../../contexts/form-context"
import {
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  SideStyled,
} from "./commonStyles"

const Minimal1 = () => {
  const {
    profile,
    skills,
    contactList,
    experienceList,
    educationList,
  } = useFormContext()

  return (
    <>
      <HeaderStyled>
        <span>{profile.fullName}</span>
        <div>{profile.subtitle}</div>
      </HeaderStyled>
      <MainStyled>
        <SideStyled pr>
          <SectionHeadingStyled first>Profile</SectionHeadingStyled>
          <SectionContentStyled>{profile.profileSummary}</SectionContentStyled>
          <SectionHeadingStyled>Skills</SectionHeadingStyled>
          <SectionContentStyled>{skills}</SectionContentStyled>
          <SectionHeadingStyled>Contact</SectionHeadingStyled>
          <SectionContentStyled>
            {contactList.map(item => (
              <div key={item.id}>{item.contactItem}</div>
            ))}
          </SectionContentStyled>
        </SideStyled>
        <SideStyled>
          <SectionHeadingStyled first>Experience</SectionHeadingStyled>
          {experienceList.map(item => (
            <div key={item.id}>
              <SectionSubHeadingStyled>{item.role}</SectionSubHeadingStyled>
              <SectionSubHeadingStyled sm>
                {item.company}
              </SectionSubHeadingStyled>
              <SectionContentStyled>{item.description}</SectionContentStyled>
            </div>
          ))}
          <SectionHeadingStyled>Education</SectionHeadingStyled>
          {educationList.map(item => (
            <div key={item.id}>
              <SectionSubHeadingStyled>
                {item.university}
              </SectionSubHeadingStyled>
              <SectionSubHeadingStyled sm>
                {item.specialize}
              </SectionSubHeadingStyled>
              <SectionSubHeadingStyled sm>
                {item.website}
              </SectionSubHeadingStyled>
            </div>
          ))}
        </SideStyled>
      </MainStyled>
    </>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 110px;

  span {
    font-size: 28px;
    font-weight: 700;
  }

  div {
    font-size: 16px;
    margin-top: 12px;
  }
`

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 0 32px;
`

export default Minimal1