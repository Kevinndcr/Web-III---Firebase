# Proyecto Firebase - Test01

Este proyecto guía paso a paso sobre cómo configurar un proyecto en Firebase para autenticar usuarios, utilizar Firestore y Storage, e implementar el hospedaje de una aplicación web. 

## Requisitos previos

- **Node.js** (versión 20.13.1 LTS o superior)
  - [Descargar Node.js](https://nodejs.org/en/)
  - Asegúrate de que `node` y `npm` estén correctamente instalados ejecutando los siguientes comandos en la terminal:
    ```bash
    node --version
    npm --version
    ```

- **Powershell** (como administrador) para configurar la ejecución de scripts:
    ```bash
    Get-ExecutionPolicy -List
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```

## Pasos de configuración

### Paso 1: Instalación de Node.js

1. Dirígete a [Node.js - Descarga](https://nodejs.org/en/).
2. Descarga e instala la versión LTS (20.13.1 o superior).
3. Verifica la instalación ejecutando:
    ```bash
    node --version
    npm --version
    ```

### Paso 2: Configurar la ejecución de scripts en PowerShell

1. Abre PowerShell como administrador.
2. Verifica la configuración actual:
    ```bash
    Get-ExecutionPolicy -List
    ```
3. Cambia la política de ejecución para permitir scripts remotos:
    ```bash
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```
4. Acepta la configuración presionando `Y`.

### Paso 3: Crear un proyecto en Firebase

1. Accede a la consola de Firebase en [Firebase Console](https://firebase.google.com/).
2. Asegúrate de estar autenticado con una cuenta de Google.
3. Crea un nuevo proyecto llamado **test01**.
4. Deshabilita Google Analytics para este proyecto.
5. Completa la creación del proyecto y accede a la consola.

### Paso 4: Habilitar autenticación

1. En la consola de Firebase, selecciona **Authentication** en el panel izquierdo.
2. Haz clic en **Comenzar**.
3. Habilita **Correo electrónico/contraseña** como método de autenticación.
4. Desactiva la opción para el vínculo de correo electrónico sin contraseña.
5. Guarda los cambios.

### Paso 5: Crear la base de datos en Firestore

1. En la consola de Firebase, selecciona **Firestore Database** en el panel izquierdo.
2. Haz clic en **Crear base de datos**.
3. Selecciona **Modo de producción** y la ubicación de la base de datos.
4. Finaliza la creación y espera a que se complete.

### Paso 6: Crear almacenamiento de documentos (Firebase Storage)

1. En la consola de Firebase, selecciona **Storage** en el panel izquierdo.
2. Haz clic en **Comenzar**.
3. Selecciona la misma ubicación de la base de datos y termina la configuración.

### Paso 7: Instalar Firebase CLI

1. Abre PowerShell como administrador y ejecuta el siguiente comando para instalar las herramientas de Firebase:
    ```bash
    npm install -g firebase-tools
    ```

### Paso 8: Crear y ubicar tu carpeta de trabajo

1. Crea una carpeta para tu proyecto:
    ```bash
    cd 'D:\Documentos\Laboratorios\Firebase'
    mkdir test01
    cd test01
    ```

### Paso 9: Autenticarse en Firebase desde la consola

1. Autenticarse en Firebase CLI:
    ```bash
    firebase login
    ```
2. Acepta las opciones para permitir que Firebase CLI acceda a tu cuenta de Google.

### Paso 10: Inicializar el proyecto localmente

1. Inicializa el proyecto:
    ```bash
    firebase init
    ```
2. Responde a las preguntas según se indica a continuación:
    - **¿Listo para proceder?**: Y (Sí)
    - **¿Qué características de Firebase quieres configurar?**:
        - Firestore (Configurar reglas e índices)
        - Hosting (Configurar archivos)
        - Storage (Configurar reglas de seguridad)
    - **Configurar Firestore**:
        - Archivo de reglas: `firestore.rules`
        - Archivo de índices: `firestore.indexes.json`
    - **Configurar Hosting**:
        - Directorio público: `public`
        - ¿Configurar como una aplicación de una sola página? Y (Sí)
    - **Configurar Storage**:
        - Archivo de reglas: `storage.rules`

## Despliegue del proyecto

1. Para desplegar el proyecto en Firebase Hosting, usa el siguiente comando:
    ```bash
    firebase deploy
    ```

## Conclusión

Con estos pasos, habrás configurado un proyecto completo en Firebase con autenticación, Firestore, Storage y hospedaje. Ahora puedes continuar desarrollando tu aplicación y aprovechar los servicios que Firebase ofrece para aplicaciones web.
