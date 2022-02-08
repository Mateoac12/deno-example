import { isArceusMode } from './env.ts'

export const createFile = async (pokemon: string) => {
  if (isArceusMode) {
    return await Deno.writeTextFile('./file/arceusMode.txt', pokemon)
  }
}
