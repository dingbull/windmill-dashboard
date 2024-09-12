import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import siteConfig from 'data/config'

export interface SEOProps extends NextSeoProps {}

export const SEO = ({ title = "TaskFlow - Your Task Management Solution", description = "TaskFlow is a powerful tool for managing your tasks efficiently.", ...props }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ ...siteConfig.seo.openGraph, title, description }}
    titleTemplate={siteConfig.seo.titleTemplate}
    twitter={siteConfig.seo.twitter}
    {...props}
  />
)
