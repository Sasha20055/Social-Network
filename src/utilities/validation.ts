export type validationType = (value: string) => string | undefined

export const required: validationType = (value) => {
  if (value) return undefined;
  return 'require error'
}

export const maxLengthCreator = (maxLength: number): validationType => (value) => {
  if (value.length > maxLength) return `max length ${maxLength} symbols!`;
  return undefined
}