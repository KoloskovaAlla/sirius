export interface EmailOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invalidMessage: string;
  placeholder: string;
};
export interface PasswordOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invalidMessage: string;
  placeholder: string;
};

export interface Option {
  content: string;
  value: string;
};

export interface CheckboxOptions {
  isChecked: boolean;
  setIsChecked: Function;
  url: string;
  content: string;
};

export interface SubmitOptions {
  // handleFormSubmit: (event: FormEvent) => any;
  handleFormSubmit: Function;
  isSubmitDisabled: boolean;
};

export interface FormProps {
  formOptions: {
    emailOptions: EmailOptions;
    passwordOptions: PasswordOptions;
    checkboxOptions: CheckboxOptions;
    submitOptions: SubmitOptions;
  };
};
