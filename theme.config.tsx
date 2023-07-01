import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <h1>Non-ELS Documentation</h1>,
  project: {
    link: 'https://github.com/dwnstr/docs',
  },
  chat: {
    link: 'https://discord.gg/dawnstar-fivem-603591936372244501',
  },
  docsRepositoryBase: 'https://github.com/dwnstr/docs/tree/main',
  footer: {
    text: 'Organized with ❤️ by Dawnstar',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Dawnstar Docs'
    }
  }
}



export default config 

