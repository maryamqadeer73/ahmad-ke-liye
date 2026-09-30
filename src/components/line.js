/* Helpers for lines in story.js: a line is a string or { t, k } */
export const lineText = (l) => (typeof l === 'string' ? l : l.t)
export const lineKind = (l) => (typeof l === 'string' ? 'plain' : l.k || 'plain')
