// onde b = base do do triângulo e h = altura do triângulo

// volume = ((b * h) / 2) / 3
// área = ((b*h) / 2) + ((b*h) / 2)

class Piramide{
    constructor(b,h){
        this.b = b
        this.h = h
    }

    //cálculo da área total
    calcularATotal(){
        return ((this.b * this.h) / 2) + ((this.b * this.h) / 2)
    }

    // cálculo do volume
    calcularVol(){
        return (((this.b * this.h) * this.h) / 2) / 3
    }
}

module.exports = Piramide