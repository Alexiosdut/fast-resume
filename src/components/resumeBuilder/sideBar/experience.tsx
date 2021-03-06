import React from 'react'

import { useFormContext, ExperienceList } from '../../../contexts/form-context'
import RemoveInputBtn from './removeInputBtn'
import { useHandleForm } from '../../../hooks/use-handleForm'
import AddInputBtn from './addInputBtn'
import { FormWrapperStyled } from '../../../styled/resumeBuilderStyles'

const Experience = () => {
  const { experienceList, setExperienceList } = useFormContext()
  const handlers = useHandleForm<ExperienceList>(
    experienceList,
    setExperienceList,
  )

  const {
    ref,
    handleInputChange,
    handleAddExperience,
    handleRemoveInput,
  } = handlers

  return (
    <>
      {experienceList.map((experience, index) => {
        const isLastItem: boolean = index === experienceList.length - 1

        return (
          <FormWrapperStyled key={experience.id} mb={isLastItem}>
            <div>
              <input
                ref={ref}
                name="role"
                value={experience.role}
                onChange={e => handleInputChange(e, index)}
                type="text"
                placeholder={'Position'}
              />
              <input
                type="text"
                name="company"
                value={experience.company}
                onChange={e => handleInputChange(e, index)}
                placeholder={'Company & Work period'}
              />
              <textarea
                name="description"
                value={experience.description}
                onChange={e => handleInputChange(e, index)}
                placeholder={'Describe what you do'}
              ></textarea>
            </div>
            <RemoveInputBtn
              show={isLastItem && index > 0}
              handleClick={() => handleRemoveInput(index)}
            />
          </FormWrapperStyled>
        )
      })}

      <AddInputBtn handleAddInput={handleAddExperience} />
    </>
  )
}

export default Experience
