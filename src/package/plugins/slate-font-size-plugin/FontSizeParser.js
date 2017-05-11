import React from 'react'
import FontSizeMark from './FontSizeMark'

export default {
  
  deserialize(el, next) {
    const style = el.attribs ? el.attribs.style : undefined
    if (style && style.match(/font-size:(.*?);/)) {
      
      const fontSize = style.match(/font-size:(.*?);/)[1]
      if (fontSize) {
        return {
          kind: 'mark',
          type: 'font-size',
          nodes: next(el.children),
          data: { fontSize }
        }
      }
    }
  },
  
  serialize(node, children) {
    if (node.kind === 'mark' && node.type === 'font-size') {
      return <FontSizeMark>{children}</FontSizeMark>
    }
  }
}
