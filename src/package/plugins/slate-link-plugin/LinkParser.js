import React from 'react'
import LinkNode from './LinkNode'

export default {
  
  deserialize(el, next) {
    
    if (el.tagName === 'a')
      return {
        kind: 'block',
        type: 'link',
        nodes: next(el.children),
        data: el.attribs
      }
  },
  
  serialize(node, children) {
    if (node.kind !== 'block' && node.type === 'link')
      return <LinkNode>{children}</LinkNode>
  }
}
