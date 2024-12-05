---
title: Control de asistencia
description: Sistema de control de asistencia para la materia de Integración de Competencias
tags: ['Typescript', 'MySql', 'Node.js', 'Express', 'Bootstrap']
githubUrl: "#"
---

<p>
<img src="/img/projects/control-asistencia.webp" alt="Control de asistencia" width="350" style="border-radius: 15px; float:left; margin-right: 10px;">
</p>

**Control de asistencia** es un sistema desarrollado para la materia de Integración de Competencias durante un semestre completo en la universidad. El proyecto fue realizado en colaboración con mis compañeros **Alberto Terán** y **Rodrigo Hormazabal**. Este sistema facilita el control de asistencias de empleados en una empresa, permitiendo registrar y visualizar los registros de asistencia de cada empleado.

Para la entrega del proyecto, tuvimos que hacer una presentación en PowerPoint del proceso, además de crear dos videos. El primer video fue sobre la creación de la máquina virtual en DigitalOcean, ya que el proyecto debía ser desplegado en producción. El segundo video muestra el proceso de configuración de la máquina virtual. Utilizamos **pm2** para mantener los scripts funcionando y asegurar que la página y la API estuvieran operativas.

Uno de los problemas que enfrentamos en este proyecto fue que el archivo `.env` estaba siendo leído desde la carpeta `dist` en lugar de la ruta correcta. Tuvimos que depurar toda la aplicación porque no sabíamos por qué no estaba leyendo el `.env`, y descubrimos que lo leía desde `dist`.

## Características
- **Registro de asistencia de empleados**: Permite registrar la asistencia de los empleados de manera eficiente.
- **Visualización de registros de asistencia**: Facilita la consulta de los registros de asistencia de cada empleado.
- **Registro de empleados**: Permite agregar nuevos empleados al sistema.
- **Registro de horarios de trabajo**: Gestiona los horarios de trabajo de los empleados.

## Tecnologías
- **Typescript**: Utilizado para el desarrollo de la API y el frontend.
- **MySql**: Base de datos para el almacenamiento de registros.
- **Node.js**: Entorno de ejecución para el backend.
- **Express**: Framework para el desarrollo del backend.
- **Bootstrap**: Framework de CSS para el diseño responsivo.
- **EJS**: Motor de plantillas para la visualización dinámica.
- **JsonWebToken**: Para la autenticación y autorización.
- **Bcrypt**: Para el hashing de contraseñas.
- **Dotenv**: Para la gestión de variables de entorno.
- **Nodemon**: Para el reinicio automático del servidor.
- **PM2**: Para mantener los scripts en ejecución.

**Control de asistencia** es un proyecto en constante mejora, asegurando que las empresas puedan gestionar la asistencia de sus empleados de manera eficiente y precisa. Descubre cómo **Control de asistencia** puede optimizar la gestión de tu empresa. 🌟

<a href="https://github.com/zGonzq/EnmaV2" target="_blank" class="rounded inline-flex items-center px-5 py-2.5 me-2 mb-2 bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 hover:bg-primary dark:hover:bg-primary no-underline transition-transform transform hover:scale-105" rel="noopener noreferrer">
    <img src="/icons/redes/github.svg" alt="GitHub" width="20" class="mr-2 m-0">Ver en GitHub
</a>
