//input 
anoNascimento = 2004
nome = "Yasmin"

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Sou " + nome + " e tenho " + idade + " anos" 

//output 
alert(mensagem)