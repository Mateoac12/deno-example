import {
  bgBrightBlack,
  bgGreen,
  bgYellow,
  black,
  blue,
  bold,
  red,
} from './deps/colors.js'

import { log } from './utils/log.ts'
import { handleSetInput } from './utils/handleSetInput.ts'

import { getPokemon } from './services/getPokemon.ts'
import { createFile } from './createFile.ts'

// TODO: get from API
const pokemonName = await getPokemon()
await createFile(pokemonName)

const MAX_TRIES = 6
const lastWords: string[] = []
const pokemonLetters = pokemonName.length

let currentTurn = 0
let winGame = false

const chackConditions = (word: string) => {
  word === null
    ? log('\nYou must enter a word')
    : word.length !== pokemonLetters
    ? log(
        '\nYour word must be ' +
          blue(String(pokemonLetters)) +
          ' characters long!'
      )
    : handlePrintLetters(word)

  if (word === pokemonName) winGame = true
}

const handlePrintLetters = (word: string) => {
  currentTurn++
  const letters = [...word]
  let result = ''

  letters.forEach((letter, index) => {
    const upperLetter = letter.toUpperCase()
    if (letter === pokemonName[index]) {
      result += ` ${bgGreen(black(bold(` ${upperLetter} `)))} `
    } else if (pokemonName.includes(letter)) {
      result += ` ${bgYellow(black(bold(` ${upperLetter} `)))} `
    } else {
      result += ` ${bgBrightBlack(bold(` ${upperLetter} `))} `
    }
  })

  lastWords.push(result)
}

console.clear()
log('The pokemon name have ' + pokemonLetters + ' letters')

while (currentTurn < MAX_TRIES) {
  const wordInput = handleSetInput()
  chackConditions(wordInput)

  log(`\n${lastWords.join('\n\n')}\n`)
  if (winGame) {
    log('You win! 🎉 The pokemon name is ' + blue(bold(pokemonName)))
    break
  }
  log('Left tries: ' + red(String(MAX_TRIES - currentTurn)) + '\n')

  if (currentTurn === MAX_TRIES) {
    log('You lose! 😢 The pokemon name is ' + red(bold(pokemonName)))
  }
}
