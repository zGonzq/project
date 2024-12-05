# Gonzalo Leal - Portfolio

Este es el repositorio del portfolio de Gonzalo Leal, un programador y diseñador. El sitio web está construido con Astro, React y TailwindCSS, y presenta una colección de proyectos destacados.

## Tecnologías Utilizadas

- **Astro**: Framework para construir sitios web rápidos y modernos.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TailwindCSS**: Framework de CSS para un diseño rápido y eficiente.
- **TypeScript**: Un superconjunto de JavaScript que añade tipos estáticos.
- **Markdown**: Lenguaje de marcado ligero para formatear texto.

## Estructura del Proyecto

```
.
├── .astro/
├── .vscode/
├── public/
│   └── img/
│       └── projects/
├── src/
│   ├── components/
│   │   ├── dependant/
│   │   │   └── ProjectCard.tsx
│   │   ├── sections/
│   │   │   ├── CertificationsSection.astro
│   │   │   ├── EducationSection.astro
│   │   │   ├── ExperienceSection.astro
│   │   │   ├── HeroSection.astro
│   │   │   ├── ProjectsSection.astro
│   │   │   └── TechStack.astro
│   │   ├── ui/
│   │   │   ├── floating-navbar.astro
│   │   │   └── ScrollToTop.astro
│   ├── content/
│   │   └── projects/
│   │       ├── control-asistencia.md
│   │       ├── enma-discord-bot.md
│   │       └── sistema-temperatura.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   └── utils/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```


## Instalación

1. Clona el repositorio:
```sh
git clone https://github.com/zGonzq/portfolio.git
```
2. Navega al directorio del proyecto:
```sh
cd portfolio
```
3. Instala las dependencias:
```sh
npm install
```

## Uso

Inicia el servidor de desarrollo:
```sh
npm run dev
```

Para construir el proyecto para producción, ejecuta:
```sh
npm run build
```

Para previsualizar el proyecto construido, ejecuta:
```sh
npm run preview
```

### Proyectos Destacados

Los proyectos destacados se encuentran en la carpeta `src/content/projects/`. Cada proyecto tiene su propio archivo `.md` con la siguiente estructura:

```md
---
title: Enma Discord Bot
description: This is an example project to demonstrate the markdown functionality
tags: ['discord', 'bot']
githubUrl:
img: /img/projects/enma-discord-bot.png
---

![Enma Discord Bot](/img/projects/enma-discord-bot.png)

Enma se presenta como un bot multifuncional diseñado meticulosamente para proporcionar una gestión eficiente y una experiencia enriquecedora en tu servidor de Discord. Sus características avanzadas abarcan desde la moderación rigurosa hasta funciones de entretenimiento y utilidad.
```