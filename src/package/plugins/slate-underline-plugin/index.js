//
// Schema
//
import UnderlineSchema from './UnderlineSchema'
import UnderlineMark from './UnderlineMark'
import UnderlineParser from './UnderlineParser'

//
// Keyboard
//
import UnderlineKeyboardShortcut from './UnderlineKeyboardShortcut'

//
// External
//
import * as UnderlineUtils from './UnderlineUtils'
import UnderlineButton from './UnderlineButton'


const UnderlinePlugin = options => ({
  schema: UnderlineSchema,

  onKeyDown(...args) {
    return UnderlineKeyboardShortcut(...args)
  },
})

export {
  UnderlinePlugin,
  UnderlineSchema,
  UnderlineMark,
  UnderlineParser,
  UnderlineKeyboardShortcut,
  UnderlineUtils,
  UnderlineButton
}
