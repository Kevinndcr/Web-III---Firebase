Proyecto Firebase - Test01
Este proyecto guía paso a paso sobre cómo configurar un proyecto en Firebase para autenticar usuarios, utilizar Firestore y Storage, e implementar el hospedaje de una aplicación web.

Requisitos previos
Node.js (versión 20.13.1 LTS o superior)

Descargar Node.js
Asegúrate de que node y npm estén correctamente instalados ejecutando los siguientes comandos en la terminal:
node --version
npm --version
Powershell (como administrador) para configurar la ejecución de scripts:

Get-ExecutionPolicy -List
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Pasos de configuración
Paso 1: Instalación de Node.js
Dirígete a Node.js - Descarga.
Descarga e instala la versión LTS (20.13.1 o superior).
Verifica la instalación ejecutando:
node --version
npm --version
Paso 2: Configurar la ejecución de scripts en PowerShell
Abre PowerShell como administrador.
Verifica la configuración actual:
Get-ExecutionPolicy -List
Cambia la política de ejecución para permitir scripts remotos:
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Acepta la configuración presionando Y.
Paso 3: Crear un proyecto en Firebase
Accede a la consola de Firebase en Firebase Console.
Asegúrate de estar autenticado con una cuenta de Google.
Crea un nuevo proyecto llamado test01.
Deshabilita Google Analytics para este proyecto.
Completa la creación del proyecto y accede a la consola.
Paso 4: Habilitar autenticación
En la consola de Firebase, selecciona Authentication en el panel izquierdo.
Haz clic en Comenzar.
Habilita Correo electrónico/contraseña como método de autenticación.
Desactiva la opción para el vínculo de correo electrónico sin contraseña.
Guarda los cambios.
Paso 5: Crear la base de datos en Firestore
En la consola de Firebase, selecciona Firestore Database en el panel izquierdo.
Haz clic en Crear base de datos.
Selecciona Modo de producción y la ubicación de la base de datos.
Finaliza la creación y espera a que se complete.
Paso 6: Crear almacenamiento de documentos (Firebase Storage)
En la consola de Firebase, selecciona Storage en el panel izquierdo.
Haz clic en Comenzar.
Selecciona la misma ubicación de la base de datos y termina la configuración.
Paso 7: Instalar Firebase CLI
Abre PowerShell como administrador y ejecuta el siguiente comando para instalar las herramientas de Firebase:
npm install -g firebase-tools
Paso 8: Crear y ubicar tu carpeta de trabajo
Crea una carpeta para tu proyecto:
cd 'D:\Documentos\Laboratorios\Firebase'
mkdir test01
cd test01
Paso 9: Autenticarse en Firebase desde la consola
Autenticarse en Firebase CLI:
firebase login
Acepta las opciones para permitir que Firebase CLI acceda a tu cuenta de Google.
Paso 10: Inicializar el proyecto localmente
Inicializa el proyecto:
firebase init
Responde a las preguntas según se indica a continuación:
¿Listo para proceder?: Y (Sí)
¿Qué características de Firebase quieres configurar?:
Firestore (Configurar reglas e índices)
Hosting (Configurar archivos)
Storage (Configurar reglas de seguridad)
Configurar Firestore:
Archivo de reglas: firestore.rules
Archivo de índices: firestore.indexes.json
Configurar Hosting:
Directorio público: public
¿Configurar como una aplicación de una sola página? Y (Sí)
Configurar Storage:
Archivo de reglas: storage.rules
Despliegue del proyecto
Para desplegar el proyecto en Firebase Hosting, usa el siguiente comando:
firebase deploy
