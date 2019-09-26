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

