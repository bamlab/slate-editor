import React from 'react'
import ItalicMark from './ItalicMark'

const MARK_TAGS = {
  em: 'italic',
  i: 'italic'
}

export default {
    
  deserialize(el, next) {
    if (MARK_TAGS[el.tagName])
      return {
        kind: 'mark',
        type: MARK_TAGS[el.tagName],
        nodes: next(el.children)
      }
  },
  
  serialize(node, children) {
    if (node.kind === 'mark' && node.type === 'italic')
      return <ItalicMark>{children}</ItalicMark>
  }
}
