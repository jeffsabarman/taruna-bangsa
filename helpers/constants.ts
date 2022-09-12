export const ACADEMICS_SUBMENU = [
  {
    label: 'KB/TK',
    path: '/academics/kb-tk',
  },
  {
    label: 'SD',
    path: '/academics/sd',
  },
  {
    label: 'SMP',
    path: '/academics/smp',
  },
  {
    label: 'SMA',
    path: '/academics/sma',
  },
];

export type MenuItem = {
  path: string;
  label: string;
};

export const MENU_LIST: Array<MenuItem> = [
  {
    path: '/about-us',
    label: 'Tentang Kami',
  },
  {
    path: '/why-tb',
    label: 'Mengapa STB?',
  },
  {
    path: '/academics/kb-tk',
    label: 'Akademik',
  },
  {
    path: '/facilities',
    label: 'Fasilitas',
  },
  // {
  //   path: '/news-and-events',
  //   label: 'Berita & Acara',
  // },
  {
    path: '/contact-us',
    label: 'Hubungi Kami',
  },
];

export const FACILITIES = [
  {
    image: 'images/swimming-pool.jpg',
    title: 'Kolam Renang',
    key: 'pool',
  },
  {
    image: 'images/basketball.jpg',
    title: 'Lapangan Basket',
    key: 'basketball',
  },
  {
    image: 'images/biology-lab.jpg',
    title: 'Lab. Biologi',
    key: 'biology',
  },
  {
    image: 'images/robotic-lab.jpg',
    title: 'Lab. Robotic',
    key: 'robotic',
  },
  {
    image: 'images/playground.jpg',
    title: 'Playground',
    key: 'playground',
  },
  {
    image: 'images/open-space.jpg',
    title: 'Ruang Terbuka',
    key: 'open-space',
  },
];
