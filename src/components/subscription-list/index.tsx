import React, { useState } from 'react'
import styles from './styles'

const SubscriptionList: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubscribe = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Email address invalid, please try another one')
      return
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage("You've successfully subscribed")
        setEmail('')
      } else {
        setMessage('Something went wrong, please try again')
      }
    } catch (error) {
      setMessage('Something went wrong, please try again')
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Stay updated on documentation</h2>
      <p style={styles.description}>Subscribe to our monthly newsletter.</p>
      <div style={styles.inputContainer}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
        />
        <button onClick={handleSubscribe} style={styles.button}>
          Subscribe
        </button>
      </div>
      <p style={styles.privacyText}>
        By subscribing to our newsletter you agree to our Privacy Policy
      </p>
      {message && <p style={styles.message(message)}>{message}</p>}
    </div>
  )
}

export default SubscriptionList
