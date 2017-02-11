import React from 'react'
import Form from '../src/form'
import Text from '../src/formInputs/text'

const SimpleTextAdvancedValidation = Form({
  validate: ({ name }, state, props) => {
    return {
      name: !name ? 'A name is required' : (name.length < props.extra.length ? 'name is too short' : undefined)
    }
  }
})(({submitForm, extra}) => {
  return (
    <form onSubmit={submitForm}>
      <p>validation limits length to {extra.length} characters</p>
      <label>name:*</label>
      <Text field="name" placeholder="type something..." />
      <pre>By default validation performs on <b>blur</b> and <b>submit</b> events</pre>
      <button type="submit">Submit</button>
    </form>
  )
})

export default SimpleTextAdvancedValidation
