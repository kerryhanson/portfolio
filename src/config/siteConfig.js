/**
 * Site feature flags.
 *
 * Config menu (theme picker, hero visual, + Workshop link):
 * Shown by default. Set VITE_SHOW_CONFIG_MENU=false in .env.local to hide.
 */
export const showConfigMenu = import.meta.env.VITE_SHOW_CONFIG_MENU !== 'false'

/**
 * Client-side site access gate (soft barrier — not real security).
 * Set VITE_SITE_ACCESS=false to disable. Override password via VITE_SITE_PASSWORD.
 */
export const siteAccessEnabled = import.meta.env.VITE_SITE_ACCESS !== 'false'
export const siteAccessPassword = import.meta.env.VITE_SITE_PASSWORD ?? 'Summer2026'
