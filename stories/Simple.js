import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ReactFormWrapper from './ReactFormWrapper'
import SimpleText from './SimpleText'
import SimpleTextAdvancedValidation from './SimpleTextAdvancedValidation'
import SimpleTextWithOnChange from './SimpleTextWithOnChange'
import SimpleCheckbox from './SimpleCheckbox'
import SimpleSelect from './SimpleSelect'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

storiesOf('Simple Form', module)
  .addDecorator(withKnobs)
  .add('with a single text field', () => {
    const nameError = {name: text('Name Error', 'invalid name')}
    return (<ReactFormWrapper wrappedForm={SimpleText} addErrors={nameError} />)
  })

  .add('with a single text field with onChange callback', () => {
    const nameError = {name: text('Name Error', 'invalid name')}
    return (<ReactFormWrapper wrappedForm={SimpleText} addErrors={nameError} />)
  })

  .add('with a single text field with onChange callback', () => {
    return (<ReactFormWrapper wrappedForm={SimpleTextWithOnChange} />)
  })

  .add('with a single text field with advanced validation', () => (
    <ReactFormWrapper wrappedForm={SimpleTextAdvancedValidation} extra={{length: 7}} />
  ))

  .add('with checkbox and default values', () => (
    <ReactFormWrapper wrappedForm={SimpleCheckbox} />
  ))

  .add('with select and default values', () => {
    const values = { weekday: text('week:', 'fri') }
    return (
      <ReactFormWrapper wrappedForm={SimpleSelect} default_values={values} />
    )
  })
