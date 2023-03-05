import { Engine } from './engine'
import fs from 'fs'
import { Compiler } from './compiler'

console.log('[プログラミング言語 wakaba 実行エンジン]')

if (process.argv.length < 3) {
  Engine.fatalError(1)
}

const src = fs.readFileSync(process.argv[2], 'utf8')

if (!src) {
  Engine.fatalError(2)
}

Engine.informationMessage(1)
Compiler.compile(src)
