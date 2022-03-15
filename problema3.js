/*3. PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe
activar un software que permita clasificar su dieta:
alimento = {
 nombre,
 tipo (Puede ser vegetal, animal, insecto),
 nivel de energía (números entre 100-500)

}
Cree un programa que permita recibir 50 alimentos diferentes y
mediante una función primaria después de 5 segundos se
pueda obtener solo los alimentos de tipo vegetal que entreguen
mas de 200 unidades de energía. Finalmente, una función
callback debe permitir entregar la sumatoria de niveles de
energía entregados por los alimentos vegetales consumidos en
la dieta de Grogu.
*/

let nombreAlimentos=['cucaracha rostizada','Atascaburras','Bienmesabe','Chochos','Ajoatao','Morteruelo','Patatas a la importancia','Sopa boba','Engañamaridos','Japuta']
let tipoAlimento=['vegetal','animal','insecto']
let energia=[200,150,220,100.110]


let comidas=[]
for(let i=0; i<50; i++){

    let plato={}

    //crear un atributo 

    comidas.nombre=(nombreAlimentos[Math.floor(Math.random()*nombreAlimentos.length)])
    comidas.tipo=(tipoAlimento[Math.floor(Math.random()*tipoAlimento.length)])
    comidas.energia=(energia[Math.floor(Math.random()*energia.length)])

   comidas.push(plato)
}
 