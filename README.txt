

Para hacer y procesar llamadas a una API podemos usar la función de jQuery llamada ajax().

Que también tenemos la opción de usar la "nueva" función de JS nativo llamada fetch(). Se recomienda su uso atualmente ya que usa una estructura de JS llamada Promises.

En el primer then() (primera promesa) de la función fetch() recibimos los datos y los convertimos (parse) a formato JSON.

Si el primer then() ha ido bien, pasamos al segundo donde podemos usar la información que nos ha llegado de la API de isertarla en el HTML. 

La función append() de jQuery me permite a un elemento de HTML previamente seleccinado contenido que se transformará en HTML.

PARA DIA 05/12/2025

Extraer los datos que llegan de la respuesta de la API e introducirlos en el HTML siguiendo esta lógica:

#uName -> Nombre completo de usuario
#uImg -> imagen de perfil de usuario (grande)
#uLocation -> localización geográfica del usuario
#Contact -> email y telefono del usuario