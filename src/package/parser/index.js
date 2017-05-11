import { FontFamilyParser } from '../plugins/slate-font-family-plugin'
import { LinkParser } from '../plugins/slate-link-plugin'
import { BoldParser } from '../plugins/slate-bold-plugin'
import { ItalicParser } from '../plugins/slate-italic-plugin'
import { UnderlineParser } from '../plugins/slate-underline-plugin'

const rules = [
  FontFamilyParser,
  LinkParser,
  BoldParser,
  ItalicParser,
  UnderlineParser
]

export default {
  rules
}
