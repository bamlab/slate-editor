//
// Schema
//
import FontFamilySchema from './FontFamilySchema'
import FontFamilyMark from './FontFamilyMark'
import FontFamilyList from './FontFamilyList'
import FontFamilyParser from './FontFamilyParser'

//
// Keyboard
//
// import FontFamilyKeyboardShortcut from './FontFamilyKeyboardShortcut'

//
// External
//
import * as FontFamilyUtils from './FontFamilyUtils'
import FontFamilyDropdown from './FontFamilyDropdown'


const FontFamilyPlugin = options => ({
  schema: FontFamilySchema,

  // onKeyDown(...args) {
  //   return FontFamilyKeyboardShortcut(...args)
  // },
})

export {
  FontFamilyPlugin,
  FontFamilySchema,
  FontFamilyMark,
  FontFamilyParser,
  // FontFamilyKeyboardShortcut,
  FontFamilyUtils,
  FontFamilyDropdown,
  FontFamilyList
}
