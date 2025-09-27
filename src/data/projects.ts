export type ProjectItem = {
    title: string;
    description: string;
    tags: string[];
    demoUrl?: string;
    codeUrl?: string;
};

export const projects: ProjectItem[] = [
    {
        title: 'Portfolio Astro',
        description: 'Site vitrine personnel avec pages A propos, Projets et Contact. Deploie sur Netlify.',
        tags: ['Astro', 'TypeScript', 'Netlify', 'Tailwind'],
        demoUrl: '/',
        codeUrl: 'https://github.com/mon-compte/mon-portfolio'
    },
    {
        title: 'Journal de veille BTS',
        description: 'Mini-blog pour consigner mes ressources de veille technologique avec un design pastel.',
        tags: ['Astro', 'Markdown', 'UI pastel']
    }
];
