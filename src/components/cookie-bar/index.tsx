import React, { ReactNode } from 'react'
import CookieConsent from 'react-cookie-consent'
import { getMessages } from 'utils/get-messages'
import styles from './styles'
import { Flex, SxStyleProp, Text } from '@vtex/brand-ui'

interface Props {
  onAccept: () => void
}

interface ButtonProps {
  children: ReactNode[]
  style: SxStyleProp
}

const Button = ({ children, style, ...props }: ButtonProps) => {
  return (
    <Flex sx={style} {...props}>
      {children}
    </Flex>
  )
}

const CookieBar = ({ onAccept }: Props) => {
  const messages = getMessages()

  return (
    <CookieConsent
      enableDeclineButton
      buttonStyle={styles.acceptButton}
      declineButtonStyle={styles.declineButton}
      style={styles.bar}
      onAccept={onAccept}
      declineButtonText={messages['cookie_bar.decline']}
      buttonText={messages['cookie_bar.accept']}
      ButtonComponent={Button}
      customButtonWrapperAttributes={{ style: styles.buttonContainer }}
      customContentAttributes={{ style: styles.barContent }}
    >
      <Text sx={styles.title}>{messages['cookie_bar.title']}</Text>
      <Text>{messages['cookie_bar.description']}</Text>
    </CookieConsent>
  )
}

export default CookieBar
