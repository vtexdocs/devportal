import styles from './styles'
import { Flex, Box, Button, IconCaret } from '@vtex/brand-ui'
import CheckboxIcon from 'components/icons/checkbox'
import { useState } from 'react'
import { messages } from 'utils/constants'
import { SelectOption } from 'utils/typings/types'

interface MultiselectProps {
  title: string
  options: SelectOption[]
  onSelect: (selection: SelectOption[]) => void
}

function getSelectionList(selection: SelectOption[]) {
  if (selection.length > 0) {
    const plus = selection.length > 1 ? ', +' + (selection.length - 1) : ''
    return ': ' + selection[0].label + plus
  }

  return ''
}

const Multiselect = ({ title, options, onSelect }: MultiselectProps) => {
  const [open, isOpen] = useState(false)
  const [checked, setChecked] = useState<SelectOption[]>([])
  const [selection, setSelection] = useState<SelectOption[]>([])

  return (
    <Box sx={styles.multiselect}>
      <Flex
        sx={styles.input}
        onClick={() => {
          if (!open) setChecked([...selection])
          isOpen(!open)
        }}
      >
        <Flex>
          {title}
          <span className="selectionText">{getSelectionList(selection)}</span>
        </Flex>
        <IconCaret direction={open ? 'up' : 'down'} size={24} />
      </Flex>
      <Flex sx={styles.dropdown} className={open ? '' : 'hidden'}>
        <Flex sx={styles.optionsContainer}>
          {options.map((option) => {
            return (
              <Flex
                sx={styles.option}
                onClick={() => {
                  const index = checked.findIndex((value) => {
                    return value.id === option.id
                  })

                  if (index < 0) setChecked([...checked, option])
                  else {
                    checked.splice(index, 1)
                    setChecked([...checked])
                  }
                }}
              >
                <CheckboxIcon
                  size={20}
                  checked={checked.includes(option)}
                  sx={styles.checkbox}
                />
                <Box>{option.label}</Box>
              </Flex>
            )
          })}
        </Flex>
        <Flex sx={styles.buttonsContainer}>
          <Button
            variant="tertiary"
            size="small"
            onClick={() => {
              setSelection([])
              isOpen(false)
              onSelect([])
            }}
          >
            {messages['multiselect_clear_button']}
          </Button>
          <Button
            variant="secondary"
            size="small"
            onClick={() => {
              setSelection([...checked])
              isOpen(false)
              onSelect(checked)
            }}
          >
            {messages['multiselect_apply_button']}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Multiselect
