/*1.PROBLEMA: Yoda el maestro jedí, necesita asignar a sus aprendices
Padawans 2 actividades dependiendo de la edad de ellos:

• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años

Inicialmente, se debe programar una función que asocie los datos de:
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto (10
segundos) y una vez este objeto sea creado se debe llamar a una función
secundaria que clasifique y muestre en consola la actividad asignada al
Padawan
*/

function datos(nombre,planeta,edad,estatura,callback){
    setTimeout(function(){
        let padawan={
            nombre:nombre,
            planeta:planeta,
            edad:edad,
            estatura:estatura
        }
        callback(padawan)

    },10000 )
}    
datos("Darth Vader","Exegol",14,2.03,function(padawan){
    if(padawan.edad<=15){
        console.log(padawan.nombre + " estas en el momento de tu vida donde eres un padawan del manejo de la fuerza "  )
    }
    else{
        console.log(padawan.nombre + " ya que eres mayor de 15 años eres una padawan de manejo del sable de luz ")
    }
})