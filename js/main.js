/*creare programma per numeri 'variabile con ciclo'( nota ) in questo caso se faccio stampare
prima i multipli di 3 e 5, poi non posso chiederle di stampare i multipli di 5 e 3 cioè ogni 15.
Il programma ( ciclo )finisce con i multipli di 3 e 5
*/
for (var numeri = 1; numeri <= 100; numeri++) {
    if (numeri %3 ==0  && numeri %5 ==0) {//condizione 'SE' per i multipli di 3 e 5 (in cascata prima i multiplidi 5 e 3 )
        console.log('FizzBuzz');
    } else if (numeri  %3 == 0) { // condizione 'ALTRIMENTI SE' per i multipli di 3
        console.log('Fizz');
    } else if (numeri %5 == 0) {
        console.log('Buzz');//condizione 'ALTRIMENTI SE'per i multipli di 5
    } else {
        console.log(numeri);
    }

}
