
/*-----SIMPLES SCRIPT PARA EXIBIR A DATA ATUAL E A DATA ANTERIOR----*/

var data = new Date(),
    dia = data.getDate(),
    mes = data.getMonth()+1,
    ano = data.getFullYear(),
    diaAnt = dia - 1,
    mesAnt = mes - 1;

//OS MESES 
var meses = ["","Jan","Fev","Mar","Abr","Mai",
             "Jun","Jul","Ago","Set","Out","Nov","Dez"];

//EXIBINDO A DATA ATUAL
console.log("Data atual: " + dia + "/" + meses[mes] + "/" + ano);

/*-------CONDIÇOES PRA RETORNAR A DATA ANTERIOR-------*/

//RETORNA A DATA ANTERIOR SE O DIA ATUAL FOR ENTRE 2 A 29
if( dia > 1 && dia < 30)
{
  console.log("Data Anterior: " + (dia-1) + "/" + meses[mes] + "/" + ano);
}

//O DIA ANTERIOR SERA 31 CASO O MES ANTERIOR FOR UM DOS SEGUINTES: 
//JANEIRO, MARÇO, MAIO, JULHO, AGOSTO, OUTUBRO, DEZEMBRO 
else if( mesAnt == 1 || mesAnt == 3 || mesAnt == 5 || 
       mesAnt == 7 || mesAnt == 8 || mesAnt == 10 || mesAnt == 12 )
{
  diaAnt = 31;
  console.log("Data Anterior: " + diaAnt + "/" + meses[mesAnt] + "/" + ano);
} 

//O DIA ANTERIOR SERA 30 CASO O MES ANTERIOR FOR DOS SEGUINTES MESES: 
//ABRIL, JUNHO, SETEMBRO, NOVEMBRO 
else if( mesAnt == 4 || mesAnt == 6 ||mesAnt == 9 || mesAnt == 11 )
{
  diaAnt = 30;
  console.log("Data Anterior: " + diaAnt + "/" + meses[mesAnt] + "/" + ano);
} 

//RETORNA DIA 31 DO MES DE DEZEMBRO DO ANO ANTERIOR SE O DIA FOR 1 DO MES DE JANEIRO 
else if(dia == 1 && mes == 1)
{
  recebDia = 31;
  console.log("Data Anterior: " + recebDia + "/" + meses[12] + "/" + (ano-1));
}

//EXCESSAO PARA O MES DE FEVEREIRO E O ANO BISSEXTO
//ANO BISSEXTO EH CALCULADO CASO O ANO SEJA DIVISIVEL POR 4

/* SE O MES FOR FEVEREIRO E O ANO ATUAL DIVIDIDO POR 4 FOR IGUAL A 00 (ANO BISSEXTO)
ENTAO O DIA ANTERIOR SERA IGUAL A 29*/
else if( mesAnt == 2 && (ano % 4) == 0) 
{
  diaAnt = 29;
  console.log("Data Anterior: " + diaAnt + "/" + meses[mesAnt] + "/" + ano);
} 


/* SE O MES FOR FEVEREIRO E O ANO ATUAL DIVIDIDO POR 4 FOR IGUAL A 00 (ANO NAO BISSEXTO)
ENTAO O DIA ANTERIOR SERA IGUAL A 28*/
else {
  diaAnt = 28;
  console.log("Data Anterior: " + diaAnt + "/" + meses[mesAnt] + "/" + ano);
}

/*============ALTERNATIVA============

else  if(mesAnt == 2 && (ano % 4) != 0)
{
  diaAnt = 28;
  console.log("Data Anterior: " + diaAnt + "/" + meses[mesAnt] + "/" + ano);
}
=========================*/
