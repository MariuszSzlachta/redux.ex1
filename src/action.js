export const HANDLE_INPUT = 'HANDLE_INPUT';

export function handleInput(text) {
  return {
    type: HANDLE_INPUT,
    text,
  }
}