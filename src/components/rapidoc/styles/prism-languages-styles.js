import { css } from 'lit'

const ShellStyle = css`
  .shell-token.shell-function {
    color: #2953b2;
  }

  .shell-token.shell-method {
    color: #4a4a4a;
  }

  .shell-token.shell-punctuation {
    color: #4a4a4a;
  }

  .shell-token.shell-string {
    color: var(--green);
  }
`

const JavascriptStyle = css`
  .node-token.node-builtin {
    color: #4a4a4a;
  }

  .node-token.node-keyword {
    color: #2953b2;
  }

  .node-token.node-punctuation {
    color: #4a4a4a;
  }

  .node-token.node-operator {
    color: #4a4a4a;
  }

  .node-token.node-string {
    color: var(--green);
  }

  .node-token.node-property {
    color: var(--green);
  }
`

const RubyStyle = css``

const PhpStyle = css``

const JsonStyle = css`
  .json-token.json-boolean {
    color: #2953b2;
  }

  .json-token.json-keyword {
    color: #2953b2;
  }

  .json-token.json-punctuation {
    color: #4a4a4a;
  }

  .json-token.json-comment {
    color: #4a4a4a;
  }

  .json-token.json-string {
    color: var(--green);
  }

  .json-token.json-property {
    color: var(--green);
  }
`

const PythonStyle = css`
  .python-token.python-builtin {
    color: #4a4a4a;
  }

  .python-token.python-keyword {
    color: #2953b2;
  }

  .python-token.python-punctuation {
    color: #4a4a4a;
  }

  .python-token.python-string {
    color: var(--green);
  }
`

export default [
  ShellStyle,
  JavascriptStyle,
  RubyStyle,
  PhpStyle,
  PythonStyle,
  JsonStyle,
]
