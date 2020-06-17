 //Cálculo de aposentadoria
 // EX2 Desafio 1

 const nome = "Daniel"
 const sexo = "M"
 const idade = 65
 const contribuicao = 35
 
 const aposentadoria = idade + contribuicao
 const anosM = 95 - aposentadoria
 const anosF = 85 - aposentadoria
 
 if (sexo == "M") {
     if (aposentadoria >= 95) {
         console.log (`${nome}, você pode se aposentar`)
     } else {
         console.log (`'${nome}, você ainda não pode se aposentar. Faltam ${anosM}.`)
     } 
 } else {
     if (aposentadoria >= 85) {
         console.log (`${nome}, você pode se aposentar`)
     } else {
         console.log (`'${nome}, você ainda não pode se aposentar. Faltam ${anosF}.`)
     }
 }
