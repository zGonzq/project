---
title: Sistema de temperatura
description: Sistema de temperatura para la materia de Integración de Competencias
tags: ['IoT', 'Backend', 'Frontend', 'Node.js', 'Express', 'Bootstrap']
githubUrl: https://github.com/zGonzq/EnmaV2
---

<p>
<img src="/img/projects/sistema-temperatura.webp" alt="Sistema de temperatura" width="350" style="border-radius: 15px; float:left; margin-right: 10px;">
</p>

**Sistema de temperatura** es un proyecto desarrollado para la materia de Integración de Competencias durante un semestre completo en la universidad. El proyecto fue realizado en colaboración con mis compañeros **Rodrigo Hormazabal** y **Alberto Terán**. Este sistema permite monitorear la temperatura y humedad de plantas (imaginarias) utilizando un sensor **DHT11** conectado a un **ESP8266**.

Inicialmente, enfrentamos problemas de coordinación sobre las tareas asignadas a cada miembro del equipo. Yo me encargué de desarrollar la API en su totalidad, mientras que mis compañeros trabajaron en gran parte del frontend. Posteriormente, solucioné varios problemas y me encargué de la conexión al **MQTT**, necesaria para recibir los datos del sensor **DHT11**.

Tuvimos algunos problemas para mostrar los datos en tiempo real en los gráficos de temperatura y humedad. Utilizamos las librerías **mqtt client** y **Chart.js** para el frontend, y **Express** para el backend. Todo el proyecto fue desarrollado con **TypeScript**, y el frontend se implementó con **EJS** para la visualización de los datos. Además, el sistema cuenta con una base de datos **MySQL** para almacenar los registros históricos de temperatura y humedad.

## Características
- **Monitoreo de temperatura y humedad**: Permite registrar y visualizar en tiempo real los datos de temperatura y humedad.
- **Conexión MQTT**: Recibe datos del sensor **DHT11** a través del protocolo **MQTT**.
- **Gráficos en tiempo real**: Muestra los datos de temperatura y humedad en gráficos utilizando **Chart.js**.
- **Base de datos MySQL**: Almacena los registros históricos de temperatura y humedad para su posterior análisis.

## Tecnologías
- **TypeScript**: Utilizado para el desarrollo de la API y el frontend.
- **Node.js**: Entorno de ejecución para el backend.
- **Express**: Framework para el desarrollo del backend.
- **Bootstrap**: Framework de CSS para el diseño responsivo.
- **EJS**: Motor de plantillas para la visualización dinámica.
- **MQTT Client**: Para la conexión y recepción de datos del sensor.
- **Chart.js**: Para la visualización de datos en gráficos.
- **MySQL**: Base de datos para almacenar los registros históricos.

**Sistema de temperatura** es un proyecto en constante mejora, asegurando que las empresas puedan monitorear las condiciones ambientales de manera eficiente y precisa. Descubre cómo **Sistema de temperatura** puede optimizar el monitoreo de tus plantas. 🌟

<a href="https://github.com/zGonzq/Sistema-TH" target="_blank" class="rounded inline-flex items-center px-5 py-2.5 me-2 mb-2 bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 hover:bg-primary dark:hover:bg-primary no-underline transition-transform transform hover:scale-105" rel="noopener noreferrer">
    <img src="/icons/redes/github.svg" alt="GitHub" width="20" class="mr-2 m-0">Ver en GitHub
</a>
