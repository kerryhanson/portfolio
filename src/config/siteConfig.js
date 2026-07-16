/**
 * Site feature flags.
 *
 * Config menu (theme picker, hero visual, + Workshop link):
 * Hidden by default. Set VITE_SHOW_CONFIG_MENU=true in .env.local to show.
 */
export const showConfigMenu = import.meta.env.VITE_SHOW_CONFIG_MENU === 'true'
