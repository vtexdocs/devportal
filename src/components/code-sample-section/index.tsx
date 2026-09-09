import { useState } from 'react'
import { Box } from '@vtex/brand-ui'

import { codeSamples } from 'utils/constants'

import styles from 'styles/documentation-landing-page'
import Multiselect from 'components/multiselect'
import { SelectOption } from 'utils/typings/types'
import CodeSampleCard from 'components/code-sample-card'

interface ICodeSamplesSection {
  builders: SelectOption[]
}

const CodeSamplesSection = ({ builders }: ICodeSamplesSection) => {
  const [filter, setFilter] = useState<SelectOption[]>([])
  const filteredCodeSamples = codeSamples.filter(
    (codeSampleItem) =>
      filter.length === 0 ||
      filter.some((option) => codeSampleItem.builders.includes(option.label))
  )
  return (
    <Box sx={styles.contentContainer}>
      <Multiselect
        title={'All builders'}
        options={builders}
        onSelect={(selection) => {
          setFilter(selection)
        }}
      />
      <Box sx={styles.cardsContainer}>
        {filteredCodeSamples.map((codeSample) => (
          <CodeSampleCard {...codeSample} key={codeSample.title} />
        ))}
      </Box>
    </Box>
  )
}

export default CodeSamplesSection
