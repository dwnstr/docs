import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { DocsThemeConfig } from 'nextra-theme-docs'

import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: <div className="nx-flex nx-gap-2 nx-items-center">
    <Image alt="logo" src="/logo.png" width="28" height="28" />
    <h1 className="nx-font-bold nx-text-2xl">Docs</h1>
  </div>,
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
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.dwnstr.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Dawnstar Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Open-source docs for FiveM and GTA vehicle developers.'}
        />
      </>
    )
  }
}



export default config 

