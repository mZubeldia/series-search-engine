![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Módulo 2: Ejercicio de evaluación final

Para la realización de este proyecto he usado el Starter Kit creado en **node y gulp**. ¿Y qué es un Starter kit? Pues es una **plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas**.

Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. El Kit ayuda a trabajar más cómodamente, nos automatiza tareas.

Los objetivos de la web son los siguientes: 

El ejercicio consiste en desarrollar una aplicación web de búsqueda de series de TV, que nos permite des/marcar las series como favoritas y guardarlas en local storage.
El ejercicio también tiene una parte de maquetación con HTML y Sass, os recomendamos dedicar esfuerzo a la maquetación una vez terminada la parte de JavaScript, ya que los criterios de evaluación están relacionados con esta última.

### Pasos seguidos para la realización del proyecto:

1. **Crear un nuevo repositorio usando GitHub Classroom.**
1. **Copiar todos los ficheros** de este Starter kit en la carpeta raíz de tu repositorio.
1. **Abrir una terminal** en la carpeta raíz de tu repositorio.
1. **Instalar las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```
1. Borrar carpetas y archivos por defecto para adaptarlos a la estructura del nuevo proyecto.
1. Modificar las rutas de los ficheros según los cambios anteriores.
1. **Ejecturar comando run docs** en la terminal.

### Requisitos del proyecto

1. Estructura básica
En primer lugar hay que realizar una estructura básica sobre este modelo. No hay que preocuparse por las medidas, colores ni tipografía hasta un hito posterior. 
La aplicación de búsqueda de series consta de dos partes:
- **Un campo de texto y un botón para buscar series por su título.**
- **Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título.**

1. Búsqueda
Al hacer clic sobre el botón de **Buscar**, la aplicación se conecta al API abierto de TVMaze para búsqueda de series. 
- **Por cada show contenido en el resultado de la búsqueda hay que pintar una tarjeta**. Cada tarjeta tiene una imagen de la serie y el título.
Algunas de las series que devuelve el API no tienen imagen. En ese caso se muestra una imagen de relleno. 

1. Favoritos
Una vez aparecen los resultados de búsqueda, **la usuaria puede indicar cuáles son nuestras series favoritas**. Para ello, al hacer clic sobre una serie debe pasar lo siguiente:
- El color de fondo y el de fuente se intercambian, indicando que es una serie favorita.
- Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda, con las series favoritas.
- Las series favoritas deben seguir apareciendo a la izquierda aunque la usuaria realice otra búsqueda.

1. Almacenamiento local
El listado de favoritos se almacena en el localStorage. De esta forma, al recargar la página el listado de favoritos se debe mostrarse.


### Pasos para publicar el proyecto en GitHub Pages:

Para generar tu página para producción ejecuta el comando:

```bash
npm run docs
```

Y a continuación:

1. Sube a tu repo la carpeta `docs/` que se te acaba de generar.
1. Entra en la pestaña `settings` de tu repo.
1. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.
1. Y ya estaría!!!

Además, los comandos:

```bash
npm run push-docs
```
o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón. Te recomendamos ver el fichero `package.json` para aprender cómo funciona.

## Flujo de archivos con Gulp

Estas tareas de Gulp producen el siguiente flujo de archivos:

![Gulp flow](./gulp-flow.png)

## `gulpfile.js` y `config.json`

Nuestro **gulpfile.js** usa el fichero `config.json` de configuración con las rutas de los archivos a generar / observar.

De esta manera separarmos las acciones que están en `gulpfile.js` de la configuración de las acciones que están en `config.json`.

## Estructura de carpetas

La estructura de carpetas tiene esta pinta:

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```

> **NOTA:** Los partials de HTML y SASS del proyecto son orientativos. Te recomendamos usar los que quieras, y borrar los que no uses.

## Vídeotutoriales del Starter kit

- [Qué es, trabajar con la versión de desarrollo y rutas relativas](https://www.youtube.com/watch?v=XwvhXvBijos)
- [Migración de un proyecto, trabajar con la versión de producción y GitHub Pages](https://www.youtube.com/watch?v=qqGClcgt9Uc)
- [Motor de plantillas](https://www.youtube.com/watch?v=4GwXOJ045Zg)

## Falta algo?

Echas de menos que el kit haga algo en concreto? Pidelo sin problema a través de las issues o si te animas a mejorarlo mándanos un PR :)
