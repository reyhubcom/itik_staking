import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'Bitcoin Staking',
          href: getPermalink('/stake/BTC'),
        },
        {
          text: 'Stake [ ETH ]',
          href: getPermalink('/stake/ETH'),
        },
        {
          text: 'Stake [ SOL ]',
          href: getPermalink('/stake/SOL'),
        },
        {
          text: 'Stake [ MON ]',
          href: getPermalink('/stake/MON'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'MEME Coin',
          href: getPermalink('#'),
        },
        
      ],
    },
    {
      text: 'Protocols',
      links: [
        {
          text: 'DeFi',
          href: getPermalink('#'),
        },
       
      ],
    },
    {
      text: 'Wallet',
      links: [
        {
          text: 'BUY Tangem',
          href: getPermalink('/home/BUY'),
        },
        
      ],
    },
    {
      text: 'Exchange',
      href: '/home/exchange',
    },
  ],
  actions: [{ text: 'Start Staking', href: '/home/staking', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'Staking',
      links: [
        { text: 'Stake [ BTC ]', href: '/stake/BTC' },
        { text: 'Stake [ ETH ]', href: '/stake/ETH' },
        { text: 'Stake [ SOL ]', href: '/stake/SOL' },
        { text: 'Stake [ MON ]', href: '/stake/MON' },
        { text: 'Stake [ BNB ]', href: '/stake/BNB' },
        { text: 'Stake [ POL ]', href: '/stake/POL' },
        { text: 'Stake [ FTM ]', href: '/stake/FTM' },
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'Bridge Crypto', href: '/home/bridge' },
        { text: 'DeFi', href: '#' },
        { text: 'Yields', href: '#' },
        { text: 'Farming', href: '#' },
        { text: 'AirDrop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="#"> Rey</a> · 2026 ITIK.xyz All Rights Reserved.
  `,
};
