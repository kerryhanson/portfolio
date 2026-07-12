/**
 * Site feature flags.
 *
 * Config menu (theme picker + Workshop link):
 * Set VITE_SHOW_CONFIG_MENU=true in .env.local to show it in the global nav.
 * Hidden by default when unset or false.
 */
export const showConfigMenu = import.meta.env.VITE_SHOW_CONFIG_MENU === 'true'

/**
 * Client-side site access gate (soft barrier — not real security).
 * Set VITE_SITE_ACCESS=false to disable. Override password via VITE_SITE_PASSWORD.
 */
export const siteAccessEnabled = import.meta.env.VITE_SITE_ACCESS !== 'false'
export const siteAccessPassword = import.meta.env.VITE_SITE_PASSWORD ?? 'Summer2026'
