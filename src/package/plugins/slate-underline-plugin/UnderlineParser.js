import React from 'react'
import UnderlineMark from './UnderlineMark'

export default {
  
  deserialize(el, next) {
    if (el.tagName === 'u')
      return {
        kind: 'mark',
        type: 'underline',
        nodes: next(el.children)
      }
  },
  
  serialize(node, children) {
    if (node.kind === 'mark' && node.type === 'underline')
      return <UnderlineMark>{children}</UnderlineMark>
  }
}
