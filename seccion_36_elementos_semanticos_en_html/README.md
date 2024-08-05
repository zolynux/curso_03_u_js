# Elementos semánticos en HTML

Los elementos semánticos en HTML son aquellos que claramente describen su significado tanto para el navegador como para el desarrollador. A diferencia de los elementos no semánticos, que no tienen un significado específico, los elementos semánticos proporcionan información adicional sobre el contenido que contienen, lo que mejora la accesibilidad y la SEO (optimización para motores de búsqueda). Aquí tienes una explicación sobre algunos de los elementos semánticos más comunes en HTML5:

1. **`<header>`**: Representa un contenedor para el contenido introductorio o de navegación. Normalmente contiene uno o más elementos de encabezado (`<h1>` - `<h6>`), logotipos, menús de navegación, etc.
    ```html
    <header>
        <h1>Mi Sitio Web</h1>
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </header>
    ```

2. **`<nav>`**: Define un bloque de enlaces de navegación. Está destinado a contener enlaces a otras páginas o a diferentes secciones dentro de la misma página.
    ```html
    <nav>
        <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
    </nav>
    ```

3. **`<section>`**: Representa una sección genérica del documento. Puede contener un grupo de contenido temáticamente relacionado, y a menudo incluye un encabezado.
    ```html
    <section>
        <h2>Sección de Noticias</h2>
        <article>
            <h3>Noticia 1</h3>
            <p>Contenido de la noticia 1...</p>
        </article>
        <article>
            <h3>Noticia 2</h3>
            <p>Contenido de la noticia 2...</p>
        </article>
    </section>
    ```

4. **`<article>`**: Representa un contenido independiente y autónomo. Podría ser una entrada de blog, un artículo de noticias, un comentario, etc.
    ```html
    <article>
        <h2>El Impacto de HTML5 en el Desarrollo Web</h2>
        <p>HTML5 ha revolucionado la manera en que construimos sitios web...</p>
    </article>
    ```

5. **`<aside>`**: Define contenido que está indirectamente relacionado con el contenido principal. Por ejemplo, barras laterales, citas, enlaces a artículos relacionados, etc.
    ```html
    <aside>
        <h4>Artículos Relacionados</h4>
        <ul>
            <li><a href="#article1">Artículo 1</a></li>
            <li><a href="#article2">Artículo 2</a></li>
        </ul>
    </aside>
    ```

6. **`<footer>`**: Representa el pie de página de un documento o sección. A menudo contiene información de autoría, derechos de autor, enlaces a términos de uso, políticas de privacidad, etc.
    ```html
    <footer>
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <nav>
            <ul>
                <li><a href="#privacy">Política de Privacidad</a></li>
                <li><a href="#terms">Términos de Uso</a></li>
            </ul>
        </nav>
    </footer>
    ```

7. **`<main>`**: Especifica el contenido principal del documento. El contenido dentro del `<main>` es único y debe ser relevante para el tema central del documento.
    ```html
    <main>
        <h1>Bienvenido a Mi Sitio Web</h1>
        <p>Aquí encontrarás información sobre nuestros servicios y productos...</p>
    </main>
    ```

8. **`<figure>` y `<figcaption>`**: El elemento `<figure>` se usa para encapsular contenido ilustrativo como imágenes, diagramas, etc., y `<figcaption>` se usa para proporcionar una leyenda o descripción.
    ```html
    <figure>
        <img src="imagen.jpg" alt="Descripción de la imagen">
        <figcaption>Figura 1: Descripción detallada de la imagen.</figcaption>
    </figure>
    ```

Estos elementos ayudan a estructurar mejor el contenido de una página web, haciendo que sea más fácil de leer, entender y acceder tanto para los usuarios como para los motores de búsqueda.