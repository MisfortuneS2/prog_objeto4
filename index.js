//comando de intalação da biblioteca
//npm install --save readline-sync
const rl = require('readline-sync')

// importando as classes
const Piramide = require('./models/Piramide')
const Prisma = require('./models/Prisma')


let op = 0
do{
    console.log('|----------------------------|')
    console.log('|----1 = Prisma        ------|')
    console.log('|----2 = Piramide      ------|')
    console.log('|----------------------------|')
    console.log('\n')

    op = Number(rl.question(`Qual a sua opcao:`))
    console.log(op)

    if(op === 1){
        
        let b = Number(rl.question(`Qual o valor da base?`))
        let h = Number(rl.question(`Qual o valor da altura?`))
        let piramide = new Piramide(b,h)
        let areaTotal = piramide.calcularATotal()
        let volume = piramide.calcularVol()

        console.log(`A área total do prisma de base ${b} e altura ${h} é: ${areaTotal.toFixed(3)}`)
        console.log(`O volume do prisma de base ${b} e altura ${h} é: ${volume.toFixed(3)}`)
      
    }else if(op === 2){

        let b = Number(rl.question(`Qual o valor da base?`))
        let h = Number(rl.question(`Qual o valor da altura?`))
        let piramide = new Piramide(b,h)
        let areaTotal = piramide.calcularATotal()
        let volume = piramide.calcularVol()

        console.log(`A área total da piramide de base ${b} e altura ${h} é: ${areaTotal.toFixed(3)}`)
        console.log(`O volume da piramide de base ${b} e altura ${h} é: ${volume.toFixed(3)}`)

    }else{
        console.log('Opção inválida! Digite novamente.')
    }


}while(op !== 0){
    console.log('Fim do programa')
}