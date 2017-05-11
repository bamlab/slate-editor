//
// Schema
//
import LinkSchema from './LinkSchema'
import LinkNode from './LinkNode'
import LinkParser from './LinkParser'

//
// Keyboard
//
import LinkKeyboardShortcut from './LinkKeyboardShortcut'

//
// External
//
import * as LinkUtils from './LinkUtils'
import LinkButton from './LinkButton'


const LinkPlugin = options => ({
  schema: LinkSchema,

  onKeyDown(...args) {
    return LinkKeyboardShortcut(...args)
  },
})

export {
  LinkPlugin,
  LinkSchema,
  LinkParser,
  LinkNode,
  LinkKeyboardShortcut,
  LinkUtils,
  LinkButton,
}
