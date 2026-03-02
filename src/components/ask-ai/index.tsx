import React, { useEffect, useRef, useState } from 'react'
import copy from 'copy-text-to-clipboard'
import { Box, Text, IconCaret } from '@vtex/brand-ui'
import {
  ClaudeIcon,
  ChatGPTIcon,
  GeminiIcon,
  CopilotIcon,
} from '@vtexdocs/components'
import { styles } from './styles'
import { LongArrowIcon } from '@vtexdocs/components'

type Provider = {
  id: string
  name: string
  href?: string
  onClick?: () => void
}

type AskAIMenuProps = {
  slug: string
  filePath: string
  providers?: Provider[]
  onOpenProvider?: (p: Provider) => void
  className?: string
}

const DEFAULT_PROVIDERS: Provider[] = [
  { id: 'chatgpt', name: 'ChatGPT', href: 'https://chat.openai.com/' },
  { id: 'copilot', name: 'Copilot', href: 'https://copilot.microsoft.com/' },
  { id: 'claude', name: 'Claude', href: 'https://claude.ai/' },
  { id: 'gemini', name: 'Gemini', href: 'https://gemini.google.com/app' },
]

const ProviderIcon: React.FC<{ id: string; size?: number }> = ({
  id,
  size = 14,
}) => {
  switch (id) {
    case 'chatgpt':
      return <ChatGPTIcon size={size} />
    case 'copilot':
      return <CopilotIcon size={size} />
    case 'claude':
      return <ClaudeIcon size={size} />
    case 'gemini':
      return <GeminiIcon size={size} />
    default:
      return null
  }
}

export default function AskAIMenu({
  slug,
  filePath,
  providers = DEFAULT_PROVIDERS,
  onOpenProvider,
}: AskAIMenuProps) {
  const [open, setOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleProvider = (p: Provider) => {
    onOpenProvider?.(p)

    if (p.onClick) {
      p.onClick()
    } else if (p.href) {
      let url = p.href
      const prompt = `You are a helpful assistant specialized in VTEX documentation. Answer questions based on the following documentation: https://developers.vtex.com/docs/guides/${slug}`

      if (p.id === 'chatgpt') {
        url = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`
      } else if (p.id === 'copilot') {
        url = `https://copilot.microsoft.com/?q=${encodeURIComponent(prompt)}`
      }
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    setOpen(false)
  }

  const handleCopy = async () => {
    if (isLoading) return
    if (isCopied) {
      setIsCopied(false)
      return
    }
    setIsLoading(true)
    try {
      const params = new URLSearchParams({ path: filePath })
      const res = await fetch(`/api/llm-content?${params.toString()}`)
      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(`Failed to fetch content: ${res.status} ${errorText}`)
      }
      const data = await res.json()
      if (data?.content) {
        const success = copy(data.content.result)
        if (success) {
          setIsCopied(true)
          setTimeout(() => setIsCopied(false), 2000)
        } else {
          throw new Error('Failed to copy to clipboard')
        }
      } else {
        throw new Error('No content received from API')
      }
    } catch {
      setIsCopied(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleView = () => {
    if (filePath) {
      const baseRawUrl =
        'https://raw.githubusercontent.com/vtexdocs/dev-portal-content/main/'
      const url = `${baseRawUrl}${filePath}`
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <Box ref={menuRef}>
      <Box sx={styles.group}>
        {/* Botão principal: copia a página */}
        <Box
          as="button"
          type="button"
          sx={styles.primaryBtn}
          onClick={handleCopy}
          aria-label="Copy page as markdown"
          disabled={isLoading}
        >
          {isCopied ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-brands fa-markdown" />
          )}
          <Text>Copy page</Text>
        </Box>

        {/* Botão caret: só controla o dropdown */}
        <Box
          as="button"
          type="button"
          sx={styles.caretBtn}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="askai-menu"
        >
          <IconCaret direction={open ? 'up' : 'down'} />
        </Box>
      </Box>

      {open && (
        <Box id="askai-menu" sx={styles.askaiMenu} role="menu">
          <Box sx={styles.askaiSection}>
            {providers.map((p) => (
              <Box
                as="button"
                key={`lu-${p.id}`}
                sx={styles.askaiItem}
                onClick={() => handleProvider(p)}
                role="menuitem"
                aria-label={`Open ${p.name}`}
              >
                <ProviderIcon id={p.id} size={12} />
                <span>
                  {p.name} <LongArrowIcon size={12} />
                </span>
              </Box>
            ))}
          </Box>

          <Box sx={styles.askaiSection}>
            <Box as="button" sx={styles.askaiItem} onClick={handleView}>
              <i className="fa-brands fa-markdown" />
              View as Markdown
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}
