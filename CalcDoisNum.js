let Numb_one = prompt ('Digite um numero')
let Numb_two = prompt ('Digite o segundo numero')

Numb_one = Number (Numb_one)
Numb_two = Number (Numb_two)

//calculos
const sum =  Numb_one + Numb_two
const sub =  Numb_one - Numb_two
const mult =  Numb_one * Numb_two
const divi =  Numb_one / Numb_two
const restdiv =  Numb_one % Numb_two



alert (`Os numeros digitados foram: ${Numb_one} e ${Numb_two}${`. A Soma (+) deles é:  ${sum}`}`),
alert (`A Subrtração (-) dos numeros digitados: ${Numb_one} e ${Numb_two}${`. é: ${sub}`}`),
alert (`A Multiplicação (*) dos numeros digitados: ${Numb_one} e ${Numb_two}${`. é: ${mult}`}`)
alert (`A Divisão (/) dos numeros digitados: ${Numb_one} e ${Numb_two}${`. é: ${divi}`}`)
alert (`O Resto da divisão (/) dos numeros digitados: ${Numb_one} e ${Numb_two}${`. é: ${restdiv}`}`)


if (sum % 2 === 0) {
    alert (' O numero ' + sum + '  é Par')
}
if (sum % 2 !== 0) {
    alert (' O numero ' + sum + '  é Impar')
}

//se os numeros são iguais ou nao
if (Numb_one === Numb_two) {
    alert (` Os numeros : ${Numb_one} e  ${Numb_two} são iguais `)
}

if (Numb_one != Numb_two) {
    alert (` Os numeros : ${Numb_one} e  ${Numb_two} são diferentes `)
}