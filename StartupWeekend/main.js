<script>
// Obtiene la cadena de consulta de la URL actual
var queryString = window.location.search;

// Convierte la cadena de consulta en un objeto URLSearchParams
var parametros = new URLSearchParams(queryString);

// Obtiene el valor de un parámetro específico
var parametro1 = parametros.get("parametro1");
var parametro2 = parametros.get("parametro2");

// Hacer algo con los parámetros
console.log("Parámetro 1:", parametro1);
console.log("Parámetro 2:", parametro2);
</script>
