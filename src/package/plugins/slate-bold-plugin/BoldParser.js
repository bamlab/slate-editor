import React from 'react'
import BoldNode from './BoldNode'

const MARK_TAGS = {
  strong: 'bold',
  b: 'bold',
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
    if (node.kind === 'mark' && node.type === 'bold')
      return <BoldNode>{children}</BoldNode>
  }
}
