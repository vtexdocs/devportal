const escapeCurlyBraces: (content: string) => string = (content) => {
  return content
    .replace(/\{\{([a-zA-Z0-9]+)\}\}/g, '\\{\\{$1\\}\\}')
    .replace(/\{([a-zA-Z0-9]+)\}/g, '\\{$1\\}')
}

export default escapeCurlyBraces
