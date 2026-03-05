// onde b = base do prisma e h = altura do prisma
// área total = ((b * h) * 5) + ((b * h) / 2)
// volume = ((b * h) / 2) * h

class Prisma{
    constructor(b,h){
        this.b = b
        this.h = h
    }

    // cálculo da área lateral
    
    calcularALateral(){
        return (this.b * this.h) * 5
    }

    // cálculo da área da base
    calcularABase(){
        return (this.b * this.h) / 2
    }

    // cálculo da área total
    calcularATotal(){
        return ((this.b * this.h) * 5) + ((this.b * this.h) / 2)
    }

    // cálculo do volume
    calcularVol(){
        return ((this.b * this.h) / 2) * this.h
    }

}

module.exports = Prisma