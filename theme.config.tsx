import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Non-ELS Documentation</span>,
  project: {
    link: 'https://github.com/dwnstr/docs',
  },
  chat: {
    link: 'https://discord.gg/dwnstr-fivem',
  },
  docsRepositoryBase: 'https://github.com/dwnstr/docs',
  footer: {
    text: 'Nextra Docs Template',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Dawnstar Docs'
    }
  }
}



export default config 

