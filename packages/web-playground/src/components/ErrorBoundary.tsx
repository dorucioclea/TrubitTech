import React from 'react'
import { Box } from '@stacks/ui'

export class ErrorBoundary extends React.Component<
  Record<string, unknown> & {
    fallback?: (p: { error?: unknown }) => JSX.Element
  },
  { hasError?: boolean; error?: unknown; errorInfo?: unknown }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false, error: undefined, errorInfo: undefined }
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error }
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    this.setState({ error, hasError: true, errorInfo })
    console.warn(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const { fallback: Fallback } = this.props
        return <Fallback error={this.state.error} />
      }

      return (
        <Box width="100%" height="100%">
          Error!
        </Box>
      )
    }

    return this.props.children
  }
}
