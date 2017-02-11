import React from 'react'
import Form from '../src/form'
import Checkbox from '../src/formInputs/checkbox'

const SimpleCheckbox = Form({
  defaultValues: {
    subscribe: true,
    adult: false
  },
  validate: (values) => {
    return {
      adult: !values.adult ? 'sorry kid! maybe next time' : undefined
    }
  }
})(({submitForm, getTouched, getError}) => {
  return (
    <form onSubmit={submitForm}>
      <p>Submit event would have 3 objects: values, state and props.</p>
      <div>
        <label>
          <Checkbox
            field="subscribe"
          />
          <span>subscribe to newsletter <pre>[default is true]</pre></span>
        </label>
      </div>
      <div>
        <p>show validation error outside of Checkbox component</p>
        <label>
          <Checkbox
            showErrors={false}
            field="adult"
          />
          <span>I am over 18 years old <pre>[default is false]</pre></span>
          <p style={{color: 'red'}}>{getTouched('adult') && getError('adult')}</p>
        </label>
      </div>
      <div>
        <label>
          <Checkbox
            field="ads"
          />
          <span>subscribe to advertisements <pre>[no default value is set]</pre></span>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
})

export default SimpleCheckbox
