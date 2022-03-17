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
export function generarDatos(){

    let nombresAlimentos=['cucaracha rostizada','Atascaburras','Bienmesabe','Chochos','Ajoatao','Morteruelo','Patatas a la importancia','Sopa boba','Engañamaridos','Japuta']
    let tiposAlimentos=['vegetal','animal','insecto']
    let energia=[200,100,250,500,1000]
    let alimentos=[]

        //repetir algo 50 veces
        for(let i=0; i<50;i++){

            let alimento={}

            alimento.nombre=nombresAlimentos[Math.floor(Math.random()*nombresAlimentos.length)]
            alimento.tipo=tiposAlimentos[Math.floor(Math.random()*tiposAlimentos.length)]
            alimento.nivel=energia[Math.floor(Math.random()*energia.length)]

            alimentos.push(alimento)

        }
        return alimentos
}