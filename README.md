# GeoPeru

**GeoPeru** es una aplicación web que permite seleccionar departamentos, provincias y distritos del Perú para obtener información relacionada, como el código `ubigeo`. Esta aplicación está diseñada para ser responsiva y fácil de usar en dispositivos móviles.

## Características

- **Selección Dinámica:** Los `selects` están interconectados, de manera que la selección de un departamento muestra las provincias correspondientes, y la selección de una provincia muestra los distritos correspondientes.
- **Código `ubigeo`:** Al seleccionar un distrito, se muestra el código `ubigeo` correspondiente.
- **Diseño Responsivo:** El diseño está optimizado para dispositivos móviles.

## Cómo Funciona

1. **Selección de Departamento:** Cuando seleccionas un departamento, las provincias correspondientes se cargan en el siguiente `select`.
2. **Selección de Provincia:** Al seleccionar una provincia, los distritos correspondientes se cargan en el siguiente `select`.
3. **Selección de Distrito:** Cuando seleccionas un distrito, se muestra su código `ubigeo` en un campo de texto.

## Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Omarleel/GeoPeru.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd GeoPeru
   ```
3. Abre `index.html` en tu navegador para ver la aplicación en funcionamiento.

## Archivos

- **index.html:** Contiene la estructura básica de la página web.
- **app.js:** Contiene la lógica de JavaScript para manejar las selecciones y mostrar el código `ubigeo`.
- **GeoPeru.json:** Contiene los datos de departamentos, provincias y distritos del Perú.

## Demo

Puedes probar la aplicación en vivo [aquí](https://omarleel.github.io/GeoPeru/).

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un `issue` o envía un `pull request` con mejoras o correcciones.