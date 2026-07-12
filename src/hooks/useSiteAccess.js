import { useCallback, useEffect, useState } from 'react'
import { siteAccessPassword } from '../config/siteConfig'

const STORAGE_KEY = 'portfolio:site-access-granted'

export function hasSiteAccess() {
  if (typeof window === 'undefined') return false
  return sessionStorage.getItem(STORAGE_KEY) === 'true'
}

export function grantSiteAccess() {
  sessionStorage.setItem(STORAGE_KEY, 'true')
}

export default function useSiteAccess() {
  const [isGranted, setIsGranted] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsGranted(hasSiteAccess())
    setIsReady(true)
  }, [])

  const authenticate = useCallback((password) => {
    if (password !== siteAccessPassword) {
      return false
    }
    grantSiteAccess()
    setIsGranted(true)
    return true
  }, [])

  return { isGranted, isReady, authenticate }
}
