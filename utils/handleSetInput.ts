export const handleSetInput = () => {
  const input = prompt('⚡Guess the pokemon:\n')
  const normalizeInput = input?.toLowerCase().trim() || ''

  return normalizeInput
}
