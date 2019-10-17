import { FieldValidationFunctionSync } from '@lemoncode/fonk';

const VALIDATOR_TYPE = 'IS_NUMBER';

interface CustomValidatorArgs {
  strictTypes: boolean;
}

let defaultCustomArgs: CustomValidatorArgs = {
  strictTypes: false,
};
export const setCustomArgs = (customArgs: CustomValidatorArgs) =>
  (defaultCustomArgs = customArgs);

let defaultMessage = 'Must be a number';
export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

const validateType = (value, args: CustomValidatorArgs) =>
  !args.strictTypes || typeof value === 'number';

const validate = value => !isNaN(Number(value));

export const validator: FieldValidationFunctionSync<
  CustomValidatorArgs
> = fieldValidatorArgs => {
  const {
    value,
    message = defaultMessage,
    customArgs = defaultCustomArgs,
  } = fieldValidatorArgs;

  const succeeded =
    !isDefined(value) || (validateType(value, customArgs) && validate(value));

  return {
    succeeded,
    message: (succeeded ? '' : message) as string,
    type: VALIDATOR_TYPE,
  };
};
