import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace isNumber {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
