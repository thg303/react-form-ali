import React from 'react'
//
import FormInput from '../formInput'

export default function FormInputText ({field, showErrors, errorBefore, isForm, noTouch, ...rest}) {
  // const defaultChange = (v) =>
  return (
    <FormInput field={field} showErrors={showErrors} errorBefore={errorBefore} isForm={isForm}>
      {({setValue, getValue, setTouched}) => {
        return (
          <input
            {...rest}
            value={getValue('')}
            onChange={e => {
              const {onChange} = {...rest}
              if (typeof (onChange) === 'function') {
                onChange(e.target.value)
                return undefined
              }
              setValue(e.target.value, noTouch)
            }}
            onBlur={() => setTouched(true)}
          />
        )
      }}
    </FormInput>
  )
}
