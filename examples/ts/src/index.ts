import {
  ValidationSchema,
  createFormValidation,
} from '@lemoncode/fonk';
import { isNumber } from '@lemoncode/fonk-is-number-validator';

const validationSchema: ValidationSchema = {
  field: {
    myNumber: [isNumber.validator],
  },
};

const formValidation = createFormValidation(validationSchema);

Promise.all([
  formValidation.validateField('myNumber', 'test'),
  formValidation.validateField('myNumber', 10),
]).then(([failedResult, succeededResult]) => {
  document.getElementById('app').innerHTML = `
<div style="flex-grow: 1;margin-left:2rem;">
  <h2>Example with failed result:</h2>

<pre>
  formValidation.validateField('myNumber', 'test')
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(failedResult, null, 2)}
</pre>
</div>

<div style="flex-grow: 1;">
  <h2>Example with succeeded result:</h2>

<pre>
formValidation.validateField('myNumber', 10)
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(succeededResult, null, 2)}
</pre>
</div>
`;
});
