# registro-huespedes

### Rooteo
/huespedes
  
    En esta ruta se administran los huespedes.
    
/hospedarse
 
    En esta ruta se registran los huespedes.


### Auth0

Esta aplicación usa autenticación a través de los servicios que ofrece [Auth0](https://auth0.com/).
A continuación se detalla los pasos que realicé para poder incorporarlo a mi aplicación.

#### Creación de usuario en Auth0

Es necesario registrarse en Auth0, por varios motivos pero lo que más nos interesa es poder armar un Login fácil, rápido y seguro.
Una vez registrado tendremos que crear una APP en la solapa Applicatios de Auth0

![](https://user-images.githubusercontent.com/32805369/65730650-e699ca00-e098-11e9-9266-7e75eceb0276.png)

En esta sección vamos a configurar nuestra aplicación, ésta contará con ciertos parametros autogenerados que precisaremos más adelante como el **Domain** y el **Client ID**.

### Configuración de Auth0
#### Configurar Callback URLs

Una Callback URL es una URL en tu aplicación donde Auth0 redirige al usuario después de que se haya autenticado. En otras palabras es la página a la que iremos una vez hayamos iniciado sesión.

Nos iremos a aplicaciones -> settings
![](https://user-images.githubusercontent.com/32805369/66613507-1fa76380-eb9c-11e9-9d50-96bf7ddf720b.png)
Una vez aquí vamos a Allowed Callback URLs y escribiremos la URL a la que nos redireccionará una vez que nos hayamos logueado.

![](https://user-images.githubusercontent.com/32805369/66613785-05ba5080-eb9d-11e9-985a-4c87efd68051.png)

#### Configuar Logouts URLs

