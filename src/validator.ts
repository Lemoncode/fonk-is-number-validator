import { FieldValidationFunctionSync } from '@lemoncode/form-validation';

const VALIDATOR_TYPE = 'IS_NUMBER';

let defaultMessage = 'Must be a number';
export const setErrorMessage = message => (defaultMessage = message);

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  const succeeded = typeof value === 'number';

  return {
    succeeded,
    message: (succeeded ? '' : message) as string,
    type: VALIDATOR_TYPE,
  };
};
