export const hasMark = state => state.marks.some(mark => mark.type === 'strikethrough')

export const strikethroughMarkStrategy = change => change
  .toggleMark('strikethrough')
  .focus()
