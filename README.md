# Angular Documentacion

Este será el repositorio donde se guardará todo lo aprendido para el curso de The Complete Angular Course

## Configuracion del entorno e Instalacion Angular.

 1. Inicialmente se deberá version estable(LTS) de nodeJS

 2. Cuando instalamos node tambien se instalará Node Package Manager(npm), el cual se encargará de libreria de terceros.

 3. Instalar angular cli
    npm install -g @angular/cli.

 4. Se podrá verficiar que cada uno de los diferentes componentes este instalado con los siguientes comandos.
    Node node --version
    npm  npm --version
    angular cli ng --version

 5. Para crear un proyecto Angular deberemos escribir lo siguiente.
    ng new nameProject

 6. Descargar librerias de terceros.
    Entramos a el folder de nuestro proyecto y copiamos "npm install"
    
 7. Desplegar app
    Dentro del mismo folder cd folderProject
    ng serve

# Cambiar compilacion a ES5    

Cambiar de compiler tsc main.ts --target ES5

# Componentes

Los componentes encapsulan la informacion, la vista y la logica.
La creacion de los componentes tienens 3 pasos.
En una clase componente no puede haber nada que no sea logica de la vista.

1. Create Component.
    src --> app --> create new file nameFile.ts
    crear una clase de TS.
    Importar libreria  @angular/core.

2. Registrar el componente.
    Se deberá añadir en el file app.modules.ts el componente creado en las declaraciones.
    Tambien se deberá importar para que pueda ser utilizado.

3. Añadir elemento al HTML
    Con el componente creado y su selector se podrá añadir sencillamente al HTML

Sin embargo los dos primeros pasos se pueden reducir, utilizando la funcionalidad de angular CLI de crear comnponentes por consola, para esto usaremos el siguiente comando.
    ng g c course 
    Lo que seria el equivalente a ng generate component nameComponent

# Directivas, se usan para manipular el dom (Documento Object Model, el dom es construido como un arbol de objetos) puede ser usado para añadir elementos al DOM o eleminar un elemento existente, o cambiar la clase de un elemento del dom etc.

 1. Directivas
    1.1. *ngFor= "course of courses"; Se usa el "*" cuando modificamos la estrucutra del DOM.

    1.2. 


# Services, los servicios inicialmente nunca se deben crear en los componentes, deberán encapsular su logica en otro archivo para desacoplar lo más posible las clases, adicionalmente para esto se utilizará injeccion de dependecia con el objetivo que si modificamos en un momento el constructor del servicio no debamos tocar cada implementacion de este .     

 1. Crear un archivo nuevo con la estructura name.service.ts
 2. Definir los metodos del servicio.
 3. Llamarlo desde el constructor del componente usando la estructura siguiente.
      constructor(service : CoursesService) { Al tener como parametro el servicio angular creará un objeto de este
        this.courses = service.getCourses();
    }
 4. Agregaremos en app.module en el apartado de provider el servicio CoursesService y angular se encargará de que 
    siempre que alguien llame este servicio injectarle la dependencia.

1.2 Creacion de Servicio por angular CLI
    