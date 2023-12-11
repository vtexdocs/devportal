import React, { useState } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  List,
} from '@faststore/ui'

export const UsageAccordionMultiple = () => {
  const [indices, setIndices] = useState<Set<number>>(new Set([]))
  const onChange = (index: number) => {
    if (indices.has(index)) {
      indices.delete(index)
      setIndices(new Set(indices))
    } else {
      setIndices(new Set(indices.add(index)))
    }
  }
  return (
    <Accordion indices={indices} onChange={onChange}>
      <AccordionItem>
        <AccordionButton>Clothing</AccordionButton>
        <AccordionPanel>
          <List>
            <li>Shorts</li>
            <li>Sweatshirt</li>
            <li>Tank tops</li>
          </List>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Bags</AccordionButton>
        <AccordionPanel>
          <List>
            <li>Backpacks</li>
            <li>Necessaire</li>
          </List>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Sale</AccordionButton>
        <AccordionPanel>
          <List>
            <li>Smartphones</li>
            <li>TVs</li>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default UsageAccordionMultiple
