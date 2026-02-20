import { OpenPage } from '../hooks/use-open-pages'

export const pages: { title: string; href?: string; items?: OpenPage[] }[] = [
    { href: '/', title: 'About' },
    { href: '/resume', title: 'Resume' },
    {
      title: 'Games',
      items: [
        { href: '/minesweeper', title: 'Minesweeper' },
        { href: '/conways-game-of-life', title: 'Conways Game of Life' },
      ],
    },
    // {
    //   title: 'Hobbies',
    //   items: [
    //     { href: '/biking', title: 'Biking' },
    //     { href: '/art', title: 'Art' },
    //     { href: '/travel', title: 'Travel' },
    //   ],
    // },
  ]
  
  export const flatPages: OpenPage[] = pages.flatMap((page) => {
    if (page.items) {
      return [
        ...page.items.map((item) => ({ href: item.href, title: item.title })),
      ]
    }
    return [{ href: page.href ?? '', title: page.title }]
  })