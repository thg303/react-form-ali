import React from 'react'
import Form from '../src/form'
import Text from '../src/formInputs/text'

const SimpleTextWithOnChange = Form({
  validate: ({ number }) => {
    return {
      name: !number ? 'A number is required' : undefined
    }
  }
})(({submitForm, setValue}) => {
  return (
    <form onSubmit={submitForm}>
      <p>Submit event would have 3 objects: values, state and props.</p>
      <label>number:*</label>
      <Text field="number" placeholder="type number..."  onChange={(value) => {
        setValue('number', parseInt(value.replace(/,/g, ""), 10).toLocaleString())
      }} />
      <pre>Thousands separator</pre>
      <button type="submit">Submit</button>
    </form>
  )
})

export default SimpleTextWithOnChange
