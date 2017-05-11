//
// Schema
//
import ItalicSchema from './ItalicSchema'
import ItalicMark from './ItalicMark'
import ItalicParser from './ItalicParser'

//
// Keyboard
//
import ItalicKeyboardShortcut from './ItalicKeyboardShortcut'

//
// External
//
import * as ItalicUtils from './ItalicUtils'
import ItalicButton from './ItalicButton'


const ItalicPlugin = options => ({
  schema: ItalicSchema,

  onKeyDown(...args) {
    return ItalicKeyboardShortcut(...args)
  },
})

export {
  ItalicPlugin,
  ItalicSchema,
  ItalicMark,
  ItalicParser,
  ItalicKeyboardShortcut,
  ItalicUtils,
  ItalicButton
}
