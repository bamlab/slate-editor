import React from 'react'

const BLOCK_TAGS = {
  p: 'paragraph',
  blockquote: 'quote',
  pre: 'code',
  a: 'link'
}

export default {
  
  deserialize(el, next) {
    const type = BLOCK_TAGS[el.tagName]
    if (!type) return
    return {
      kind: 'block',
      type: type,
      nodes: next(el.children),
      data: el.attribs
    }
  },
  
  serialize(node, children) {
    if (node.kind !== 'block') return
    switch (node.type) {
      case 'paragraph': return <p>{children}</p>
      case 'quote': return <blockquote>{children}</blockquote>
      case 'code': return <pre><code>{children}</code></pre>
      case 'link': return <a>{children}</a>
    }
  }
}
