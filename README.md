# Portfolio Personal - Práctica Formativa Obligatoria 2

### Mejoras Estructurales Implementadas

1. **Menú Hamburguesa para Navegación Móvil**

   - Implementación: Componente interactivo que se despliega suavemente desde el lateral
   - Mejora la usabilidad en dispositivos móviles ocultando el menú cuando no se necesita
   - Incluye animación suave y botón de cierre para mejor experiencia de usuario
   - Justificación: Optimiza el espacio en pantallas pequeñas mientras mantiene accesible la navegación

2. **Layout con Grid para Proyectos y Habilidades**
   - Implementación: Sistema de grid responsive para organizar tarjetas de proyectos y habilidades
   - Ajuste automático de columnas según el tamaño de pantalla
   - Justificación: Mejora la presentación visual y organización del contenido, facilitando su lectura

### Funcionalidades JavaScript Implementadas

1. **Sistema de Temas (Claro/Oscuro)**

   - Implementación: Utiliza classList.toggle para alternar la clase 'dark-theme' en el HTML
   - Guarda la configuracion del usuario en localStorage
   - Detecta automáticamente la preferencia del sistema usando matchMedia
   - Justificación: Mejora la accesibilidad y experiencia de usuario permitiendo personalizar el modo de visualización

2. **Cronómetro Flotante**

   - Implementación: Utiliza setInterval para actualizar el tiempo cada segundo
   - Justificación: Mostrar cuanto tiempo queda para la entrega del proyecto

3. **Validación de Formulario**

   - Implementación: Utiliza expresiones regulares para validar campos como correo electrónico y telefono
   - Feedback visual inmediato al usuario
   - Previene envío con datos inválidos
   - Justificación: Mejora la experiencia de usuario y asegura la calidad de los datos

4. **Pop-up de Confirmación**

   - Implementación: Componente modal que se muestra al enviar el formulario exitosamente
   - Animación suave de entrada/salida
   - Se cierra automáticamente después de 3 segundos
   - Justificación: Proporciona feedback claro sobre las acciones del usuario

5. **Galería de Imágenes**
   - Implementación: Navegación dinámica entre imágenes con efectos de transición
   - Justificación: Mejora la presentación de proyectos con una interfaz interactiva
