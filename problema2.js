/*2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el planeta
yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte,
como distractor el imperio ha creado planos falsos y se tiene el dato de
que el número de serie de estos planos falsos comienza por encima del
número 10; es decir todos los planos falsos tienen números de serie
consecutivos comenzando desde el #11. 
SOLO si se obtiene un plano verdadero Chewbacca y Han pueden abordar su nave y ejecutar un
mensajeen consola avisando que han despegado
Configure la rutina necesaria para despegar la nave utilizando callbacks
 */

function robar(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10,callback){
    let arregloPlanos=Array(
        numero1,
        numero2,
        numero3,
        numero4,
        numero5,
        numero6,
        numero7,
        numero8,
        numero9,
        numero10
    )
    callback(arregloPlanos)
}
robar(1,2,300,400,500,600,700,800,900,100,function(arregloPlanos){

    let datosFiltrados=arregloPlanos.filter(function(dato){

        return(dato>=1 && dato <=10)
    })
    console.log('Tiene una cantidad de planos robados ' + datosFiltrados.length)
    if(datosFiltrados.length <1){
        console.log('Han solo y Chewbacca no pudieron robar ningun plano ')
    }
    else{
        console.log(' Chewbacca y Han pueden abordar su nave ya que tiene algunos planos')
    }
})









/*
robo (1,2,3,4,5,6,7,8,9,10,function(arregloPlanos){

let contador=0
arregloPlanos.forEach(function(arregloPlanos){
 contador=contador+arregloPlanos

    if(arregloPlanos >=1 && arregloPlanos <=10 ){
        console.log("ya pueden abordar su nave Chewbacca y Han porque ya se robaron esta cantidad de planos " + contador + " CORRAN...")
    }
    else{
        console.log("este el plano falso : " + arregloPlanos)
    }
})
})*/
