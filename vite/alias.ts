import path from 'path'
//vite快捷键
import { AliasOptions } from 'vite'
const alisa = { '@': path.resolve(__dirname, '../src') } as AliasOptions
export default alisa
