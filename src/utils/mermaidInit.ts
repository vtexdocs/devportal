import mermaid from 'mermaid'

const mermaidInit = () => {
  mermaid.initialize({
    theme: 'base',
    themeVariables: {
      primaryColor: '#FFFFFF',
      primaryTextColor: '#142032',
      primaryBorderColor: '#A1AAB7',
      labelBoxBorderColor: '#E31C58',
      labelTextColor: '#E31C58',
      labelBoxBkgColor: '#FFF3F6',
      lineColor: '#A1AAB7',
      mainBkg: '#F8F7FC',
    },
  })
}

export default mermaidInit
