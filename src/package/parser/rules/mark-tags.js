import React from 'react'

const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
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
        case 'bold': return <strong>{children}</strong>
        case 'italic': return <em>{children}</em>
        case 'underline': return <u>{children}</u>
      }
    }
  }
}
