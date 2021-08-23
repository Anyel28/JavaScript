function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
//"Formulário ano" vai receber o que for marcado no input com id='txtano'

    var res = document.querySelector('div#res')
    if (fano.value.lenghth == 0 || fano.value > ano) { 
    //Se o ano digitado for maior que o ano atual...

     window.alert('[ERRO] verifique os dados e tente novamente! ')
     
     } else {
        var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = '' // <-- string vazia

            // img com id = foto
            var img = document.createElement('img')
            img.setAttribute('id','foto')

            // button radial na posição 0
            if (fsex[0].checked) { 
                gênero = 'Homem'
                if (idade >=0 && idade <=12) {
                    //Criança
                    img.setAttribute('src', 'foto-bebe.m.png')
                }
                else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'jovem.png')
                }
                else if (idade <= 55) {
                    //Adulto
                    img.setAttribute('src', 'foto-adulto.homem.png')
                }
                else {
                    //Idoso
                    img.setAttribute('src', 'foto-velho.png')
                }
            //button radial na posição 1
            } else if (fsex[1].checked) { 
                gênero = 'Mulher'
                if (idade >=0 && idade <=12) {
                    //Criança
                    img.setAttribute('src','foto-bebe.f.png')
                }
                else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src','foto-jovem.mulher.png')
                }
                else if (idade <= 55) {
                    //Adulta
                    img.setAttribute('src','foto-adulto.m.png')
                }
                else {
                    //Idosa
                    img.setAttribute('src','foto-idosa.png')
                }
            }
         //Aplicando estilo de forma dinâmica com JavaScript
            res.style.textAlign = 'center' 
            

            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`

        //Imagem dinâmica com JavaScript.
            res.appendChild(img) // <-- Adicionar elemento.
        }
}
