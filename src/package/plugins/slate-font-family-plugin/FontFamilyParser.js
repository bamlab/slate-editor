import React from 'react'
import FontFamilyMark from './FontFamilyMark'
import FontFamilyList from './FontFamilyList'

export default {
  
  deserialize(el, next) {
    const style = el.attribs ? el.attribs.style : undefined
    if (style && style.match(/font-family:(.*?);/)) {
      
      const font = style.match(/font-family:(.*?);/)[1]
      const index = FontFamilyList.findIndex(f => f.name === font)
      if (index !== -1) {
        return {
          kind: 'mark',
          type: 'font-family',
          nodes: next(el.children),
          data: { fontFamilyIndex: index }
        }
      }
    }
  },
  
  serialize(node, children) {
    if (node.kind === 'mark' && node.type === 'font-family') {
      return <FontFamilyMark>{children}</FontFamilyMark>
    }
  }
} 
