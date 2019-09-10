import { FieldValidationFunctionSync } from '@lemoncode/form-validation';

const VALIDATOR_TYPE = 'IS_NUMBER';

let defaultMessage = 'Must be a number';
export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  const succeeded = !isDefined(value) || typeof value === 'number';

  return {
    succeeded,
    message: (succeeded ? '' : message) as string,
    type: VALIDATOR_TYPE,
  };
};
