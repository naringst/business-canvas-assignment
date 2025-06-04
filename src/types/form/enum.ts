export const FORM_MODES = {
  ADD: 'add',
  EDIT: 'edit',
} as const;

export type FormMode = (typeof FORM_MODES)[keyof typeof FORM_MODES];
