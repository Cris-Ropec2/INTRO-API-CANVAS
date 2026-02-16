/********************************************************************************
 * PROGRAMA: Dibujo de Primitivas Geométricas en Canvas (Dimensiones Dinámicas)
 * AUTOR: Christopher Rodríguez Pérez
 * DESCRIPCIÓN: 
 * Este script configura un lienzo de Canvas para que ocupe el 50% del viewport
 * del navegador de forma dinámica y renderiza un cuadrado centrado.
 * TECNOLOGÍAS: JavaScript (ES6+), HTML5 Canvas API.
 ********************************************************************************/

// 1. Obtención del elemento del DOM.
var canvas = document.getElementById("lienzo");

// 2. Configuración de dimensiones dinámicas (50% de la pantalla).
// Usamos window.innerWidth y window.innerHeight para obtener el tamaño del navegador.
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;

// 3. Inicialización del Contexto de Renderizado.
// Es vital obtener el contexto DESPUÉS de definir el ancho y alto.
var ctx = canvas.getContext("2d");

// 4. Definición de Atributos de Estilo.
ctx.fillStyle = "#f6bc1c"; // Color naranja rojizo personalizado

// 5. Ejecución del renderizado de la forma.
// Nota: Ajusté los valores de posición para que el cuadrado sea visible
// dentro del nuevo tamaño del canvas (el 50% de una pantalla estándar).
ctx.fillRect(10, 10, 200, 200);