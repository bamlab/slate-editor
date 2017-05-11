import React from 'react'

import { BoldNode } from '../../plugins/slate-bold-plugin'
import { ItalicMark } from '../../plugins/slate-italic-plugin'
import { UnderlineMark } from '../../plugins/slate-underline-plugin'

const MARK_TAGS = {
  em: 'italic',
  i: 'italic',
  strong: 'bold',
  b: 'bold',
  u: 'underline'
}

export default {
  
  deserialize(el, next) {
    const type = MARK_TAGS[el.tagName]
    if (type) {
      return {
        kind: 'mark',
        type: type,
        nodes: next(el.children)
      }
    }
  },
  
  serialize(node, children) {
    if (node.kind === 'mark') {
      switch (node.type) {
        case 'bold':
          return <BoldNode>{children}</BoldNode>
        case 'italic':
          return <ItalicMark>{children}</ItalicMark>
        case 'underline':
          return <UnderlineMark>{children}</UnderlineMark>
      }
    }
  }
}
