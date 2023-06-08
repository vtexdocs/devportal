import mermaid from 'mermaid'

const mermaidInit = () => {
  mermaid.initialize({
    theme: 'base',
    themeVariables: {
      primaryColor: '#F4F4F4',
      primaryTextColor: '#E31C58',
      primaryBorderColor: '#E31C58',
      lineColor: '#E31C58',
    },
  })
}

export default mermaidInit
