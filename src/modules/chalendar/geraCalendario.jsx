

export function calendarioAnual() {
    var anos = []

    var dataInicio = new Date();
    var data = null
    for (let countYear = 0; countYear <= 4; countYear++) {
        var calendario = []

        for (let countMes = 0; countMes < 12; countMes++) {

            var mesAtualDeContagem = []
            data = new Date(dataInicio.getFullYear() + countYear, countMes + 1, 0)
            var diaSemanaInicio = new Date(dataInicio.getFullYear(), countMes, 1).getDay()
            var diaSemanaFim = 6 - new Date(dataInicio.getFullYear(), countMes+1, 0 ).getDay()

            for (let count = 0; count < diaSemanaInicio ; count++ ) {
                mesAtualDeContagem.push("void")
            }

            for (let countDias = 1; countDias <= data.getDate(); countDias++) {
                mesAtualDeContagem.push({"dia" : countDias , "notas" : [] })
            }

            for (let count = 0; count < diaSemanaFim ; count++ ) {
                mesAtualDeContagem.push("void")
            }


            calendario.push(mesAtualDeContagem)
        }
        var anoAtual = data.getFullYear()
        anos.push({ anoAtual , calendario })
    }
    console.log(anos)
    return anos

}



