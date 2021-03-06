let dir = process.env.PWD
const fs = require('fs')
const Path = require('path')
let tmp

if(!fs.existsSync(dir = Path.join(dir,'..','..','..','lib'))) fs.mkdirSync(dir)
if(!fs.existsSync(dir = Path.join(dir,'types'))) fs.mkdirSync(dir)

fs.copyFileSync(Path.join(__dirname,'..','lib','source.d.ts'),Path.join(dir,'source.d.ts'))
fs.copyFileSync(Path.join(__dirname,'..','lib','event.d.ts'),Path.join(dir,'event.d.ts'))
console.log('created source.d.ts in ',dir)
console.log('created event.d.ts in ',dir)