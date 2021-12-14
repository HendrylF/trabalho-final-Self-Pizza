function a() {
    var format = document.getElementById('format1');
    format.innerHTML = 'Massa tadicional'
}

function b() {
    var format2 = document.getElementById('format2');
    format2.innerHTML = 'Massa fina(Sem borda)'
}

function c() {
    var format3 = document.getElementById('format3');
    format3.innerHTML = 'Mussarela'
}

function d() {
    var format4 = document.getElementById('format4');
    format4.innerHTML = 'Prato'
}

function e() {
    var format5 = document.getElementById('format5');
    format5.innerHTML = 'Parmesão'
}

function f() {
    var format6 = document.getElementById('format6');
    format6.innerHTML = 'Cheddar'
}

function g() {
    var format7 = document.getElementById('format7');
    format7.innerHTML = 'Minas(padrão)'
}

function h() {
    var format8 = document.getElementById('format8');
    format8.innerHTML = 'Queijo vegano'
}

function i() {
    var format9 = document.getElementById('format9');
    format9.innerHTML = ' Calabresa'
}

function j() {
    var format10 = document.getElementById('format10');
    format10.innerHTML = ' Frango'
}
function k() {
    var format11 = document.getElementById('format11');
    format11.innerHTML = 'Presunto '
}

function l() {
    var format12 = document.getElementById('format12');
    format12.innerHTML = 'Bacon'
}

function m() {
    var format13 = document.getElementById('format13');
    format13.innerHTML = 'Carne moida'
}

function n() {
    var format14 = document.getElementById('format14');
    format14.innerHTML = 'Brocolis'
}

function o() {
    var format15 = document.getElementById('format15');
    format15.innerHTML = 'Rucula'
}

function p() {
    var format16 = document.getElementById('format16');
    format16.innerHTML = 'Palmito'
}

function q() {
    var format17 = document.getElementById('format17');
    format17.innerHTML = 'Tomate Cereja'
}

function r() {
    var format18 = document.getElementById('format18');
    format18.innerHTML = 'Cogumelos '
}






function x() {
    alert("Finalizar o pedido?" )
    var nameperson = prompt('informe seu nome completo')
    var bairro = prompt('informe seu bairro')
    var rua = prompt('informe a rua')
    var numero = prompt('informe o numero da sua casa')
    var entrega = prompt("Como o SR(a) deseja consumir a pizza?\n ESTABELECIMENTO\n CASA")
    var pagamento = prompt("Qual a forma de pagamento?\n DINHEIRO\n PIX\n CARTAO ")



    if (entrega == "ESTABELECIMENTO" && pagamento == "DINHEIRO") {
        alert('Obrigado ' + nameperson + ' pela preferencia aguardamos o Sr(a) em nosso estabeleciemento ')
    }
    else if (entrega == "ESTABELECIMENTO" && pagamento == "PIX") {
        alert('Ola, ' + nameperson + ', nosso codigo para PIX e 564251588\nAvisaremos apos a confirmação de pagamento\n Obrigado pela preferencia aguardamos o Sr(a) em nosso estabeleciemento')
    }
    else if (entrega == "ESTABELECIMENTO" && pagamento == "CARTAO") {
        alert('Obrigado' + nameperson + 'pela preferencia, aguardamos o Sr(a) em nosso estabeleciemento ')
    }
    if (entrega == "CASA" && pagamento == "DINHEIRO") {
        alert('Obrigado ' + nameperson + ' pela preferencia, em alguns minutos nosso estregador estara levando sua pizza no endereço\n' + 'Bairro ' + bairro + ' ,Rua ' + rua + ' ,N° ' + numero )
    }
    else if (entrega == "CASA" && pagamento == "CARTAO") {
        alert('Obrigado ' + nameperson + ' pela preferencia, em alguns minutos nosso estregador estara levando sua pizza no endereço\n' + 'Bairro ' + bairro + ' ,Rua ' + rua + ' ,N° ' + numero )
    }
    else if (entrega == "CASA" && pagamento == "PIX") {
        alert('Ola,' + nameperson + ' nosso codigo para PIX e 564251588\n avisaremos apos a confirmação de pagamento\n Obrigado pela preferencia, em alguns minutos nosso estregador estara levando sua pizza no endereço\n' + 'Bairro ' + bairro + ' ,Rua ' + rua + ' ,N° ' + numero )
    }

}

