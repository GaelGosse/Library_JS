'use strict';
document.addEventListener('DOMContentLoaded', function library(){
    
    // ENCODE ALPHABET
    var alpha = {
        a: 1,
        à: 2,
        â: 3,
        b: 4,
        c: 5,
        ç: 6,
        d: 7,
        e: 8,
        é: 9,
        è: 10,
        ê: 11,
        ë: 12,
        f: 13,
        g: 14,
        h: 15,
        i: 16,
        î: 17,
        ï: 18,
        j: 19,
        k: 20,
        l: 21,
        m: 22,
        n: 23,
        o: 24,
        ô: 25,
        p: 26,
        q: 27,
        r: 28,
        s: 29,
        t: 30,
        u: 31,
        ù: 32,
        û: 33,
        v: 34,
        w: 35,
        x: 36,
        y: 37,
        z: 38,
    }
    
    // ERROR MESSAGE
    var startError = '%c';
    var error = 'background: crimson; color: #fff; padding: 0 10%'
    var warning = 'background: darkorange; color: #fff; padding: 0 10%'
    var miss = 'background: gold ; color: #000; padding: 0 10%'
    
    // ZONE TEST //
    var array1 = { "clé1" : "valeur1", "clé2" : "valeur2", "clé3": "valeur3", "clé4": "valeur4" };    
    var tab1 = ['hello', '5', 'thank', 'hello', 5, 'thanks', 'hello', true, 'the last'];
    var tab2 = ['hello', 'bye'];
    var tab3 = ['hello', 3];
    var tab4 = ['cognitif', 'aussi', 'bonjour'];
    var tab5 = [];
    var tab6 = [];

     var car = {
        brand: 'lexus',
        model: 'LC',
        price: 120000
    }
    
    class voiture{
        constructor(brand, model, price){
            this.brand = brand;
            this.model = model;
            this.price = price;
        }
        getPrice(){
            console.log(this.price)
        } 
    }
    var audi = new voiture('audi', 'a1', 40000)
    
    var para = 'Dans le deuxième je me souviens être comme sur la corniche à Marseille mixé avec un peu des roches d’Orival, le tout en bordure de mer ; les roches étaient sûrement plus éloigné avec un peu de foret aussi mais peut-être un peu plus proche. Les maisons, elles, avaient le style normand, blanc et marron (poutres). La vision de la scène est de telle sorte que la mer est ma droite et la terre est ma gauche, je me déplace à un moment pour me retrouver face à une porte de maison, j’aurai donc la mer dans le dos. Je me souviens longer les roches de la corniche. Ça devait être le soir, le ciel bleu clair commençait à se foncer, quand d’un seul coup, je vis le ciel rougir à un endroit précis puis une seconde après une explosion bien visible au loin, avec comme de petits éclats de feu d’artifice. Elle se répète pour arriver encore plus grosse et avec donc beaucoup plus d’éclats, on dirait presque qu’il y avait un feu d’artifice par-dessus. L’image était très nette et sublime. Je devais être en voiture mais comme si j’avais à la place des yeux à ce moment-là, une GoPro 360°, je devais me trouver dans une voiture avec des gens peut-être, elle finit par s ‘arrêter (je ne m’en souviens presque pas).';
    var texte = 'Dans le deuxième je me souviens être comme sur la corniche à Marseille mixé avec un peu des roches d’Orival';
    var mot = 'aussi'
    
    var var1 = 'hello';
    var var2 = 'six';
    var var3 = 6.528497; 
    
    var x = 0;
    var tmp = 0;
    var count = 0;
    var min = 0;
    var moy = 0;
    var max = 0;
    var char = '';
    
    // FIN DE ZONE TEST
    
    
    
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX TAB ARRAY XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */ 
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // return the length of a associative array
    function array_length(arr){
        return Object.keys(arr).length;
    }
    
    // swap keys and values in array
    function array_flip(arr){
        tab1 = [];
        tab2 = [];
        tab1 = Object.keys(arr);
        
        for(let i = 0; i < Object.keys(arr).length; i++){
            tab2[arr[tab1[i]]] = tab1[i];
        }
        return (tab2);
    }
    
    // Return true if a key exists in a array
    function array_key_exists(tab, key){
        for(var i = 0; i < tab.length; i++){
            if(tab[i] == key){
                return true;
            }
            else{
                return false;
            }
        }
    }
    
    // Return first key of assiociative array
    function array_key_first(arr){
        tab1 = Object.keys(arr);
        return tab1[0]
    }
    
    // Return last key of assiociative array
    function array_key_last(arr){
        tab1 = Object.keys(arr);
        return tab1[Object.keys(arr).length-1]
    }
    
    // Search a word in array : return the position of the value if it's found
    function array_search(word, arr){
        tab1 = Object.keys(arr);
        tab2 = [];
        count = 0;
        
        for(let i = 0; i < Object.keys(arr).length; i++){
            if(arr[tab1[i]] == word){
                tab2.push(tab1[i]);
                count = 1;
            }
        }
        if(count == 1){
            return tab2 // position of the word search
        }
        else{
            return false
        }
    }
    
    // Return every type of var in array
    function array_type_of_var(arr){ 
        var type = [];
        for(let i = 0; i < arr.length; i++){
            if(array_key_exists(type, typeof arr[i])){

            }
            else{
                type.push(typeof arr[i]);
            }
        }
        return type;
    }
    
    // Return if this is an object : array or object
    function type_of_array(array){
        if(typeof array == 'object'){
            if(array[0] == null){
                return 'object'
            }
            else{
                return 'array'
            }
        }
        else{
            return false
        }
    }
    
    function in_array(){
        
    }
    
    function sum_array(arr){
        var sum = arr[0];
        for(let i = 1; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }
    
    function multi_array(arr){
        var multi = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] !== 0){
                multi *= arr[i];
            }
        }
        return multi;
    }
    function toArray(obj) {
        let tabKeys = [];
        let tabValue = [];
        let tabSmall = [];
        let tabFinal = [];
        let x;

        // SET KEYS & VALUE
        tabKeys = Object.keys(obj)
        for(x in tabKeys){
            tabValue.push(obj[tabKeys[x]])
        }

        // SET TAB IN TAB
        for(x in tabKeys){
            tabSmall = [];

            tabSmall[0] = tabKeys[x]
            tabSmall[1] = tabValue[x]

            tabFinal.push(tabSmall)
        }

        return tabFinal;
    }
    
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX TEXTE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // Explode : return words of texte in array
    function explode(txt){
        var start = 0;
        tab1 = [];
        
        for(var i = 0; i <= txt.length; i++){  
            if(txt.charAt(i) == ' ' || txt.charAt(i) == ', ' || txt.charAt(i) == ';' || txt.charAt(i) == '. ' || txt.charAt(i) == '/' || i == txt.length || txt.charAt(i) == '’'){
                tab1.push(txt.substr(start, (i - start) ));
                start = i+1;
            }
        }
//      tab1.push(char.substr(start, i - start-1));
        return tab1;
     }
    
    // Return the pos of the elements
    function text_search(word, txt){ 
        var start = 0; // first pos of a word
        char = ''; // char which is moved with ite 
        tab1 = []; // storage the start pos of th word
        
        for(var i = 0; i <= txt.length; i++){
            if(txt.charAt(i) == ' '  || txt.charAt(i) == ';' || txt.charAt(i) == '.' || txt.charAt(i) == ',' || txt.charAt(i) == '/' || i == txt.length || txt.charAt(i) == '’'){
                char = txt.substr(start, (i - start) );
                if(char == word){
                    tab1.push(start)
                }
                start = i+1;
            }
        }
        return tab1;
    }
    
    // Count total number of words in text // find another method to count word with letters
    function count_word(txt){
        var start = 0; // first pos of a word
        char = ''; // char which is moved with ite 
        count = 0; // var counter 
        
        for(var i = 0; i <= txt.length; i++){
            if(txt.charAt(i) == ' '  || txt.charAt(i) == ';' || txt.charAt(i) == '.' || txt.charAt(i) == ', ' || txt.charAt(i) == '/' || i == txt.length || txt.charAt(i) == '’'){
                char = txt.substr(start, (i - start) );
                count++;
                start = i+1;
            }
            if(txt.length == i && txt.charAt(i-1) == '.'){
                count--;
            }
        }
        return count;
    }
    console.log(count_word("it is an online gaming platform where you can play and earn chips like in an online casino but without putting real money into it. This project aims to be implemented and tested in order to one day be able to launch it as a real and legal gambling platform. It provides the creation of an account, the connection, the disconnection and the deletion of the account in question. It will be possible to consult its available tokens and its game statistics there. The first game available on this platform is a slot machine. Pure game of chance to try to win chips by placing a bet. An administrator part will be available to add or remove games or players on the platform, it will also allow you to see the full profile of the players, and the profitability of the games. The main objective is to entertain users, and also in a secondary plan to be able to test the platform in its entirety before inserting the possibility of deposit and real money games much later. The programming languages used are javascript, php and sql."))
    
    // Count occurence of one word in a text
    function count_one_word(word, txt){
        var start = 0; // first pos of a word
        char = ''; // char which is moved with ite 
        count = 0; // count number of word
        
        for(var i = 0; i <= txt.length; i++){
            if(txt.charAt(i) == ' '  || txt.charAt(i) == ';' || txt.charAt(i) == '.' || txt.charAt(i) == ',' || txt.charAt(i) == '/' || i == txt.length || txt.charAt(i) == '’'){
                char = txt.substr(start, (i - start) );
                if(char == word){
                    count++;
                }
                start = i+1;
            }
        }
        return count;
    }
    
    
    function mb_substr_count(){ // nbr occurence sous chaines 'es' / 'est'
        
    }
    
    // convert letters of a word into digits
    function w2d(word){
        tab1 = [];
        tab2 = [];
        tab1 = Object.keys(alpha);

        for(let i = 0; i < word.length; i++){
            for(let j = 0; j < Object.keys(alpha).length; j++){
                if(word.charAt(i) == tab1[j]){
                    tab2.push(alpha[tab1[j]])
                }
            }
        }
        return tab2
    }

    // delete double elmt in array
    function doubleInArray(){
        
    }
    
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX MATHS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // isInteger
    function isInteger(a){
        if(typeof(a) == 'number'){
            if(parseInt(a) == a){
                return true
            }
        }
    }
    
    function factorial(a){
        var result = 1;
        for(let i = 1; i <= a; i++){
            result = i * result;
        }
        return result
    }  

    // rounded
    function rounded(nbr, decimal){
        let part = 10**decimal;
        return Math.floor(nbr * part)/part;
    }

    function toDegree(radian) {
        return Math.round(radian * (180 / Math.PI))
    }
    
    // persistence
    function explode_nbr(nbr){
        let count = nbr.toString().length-1;
        let tmp = 0;
        let sub = 0;
        var tab = [];
        
        for(let i = count; i >= 0; i--){
            tmp = rounded((nbr/10**i),0);
            sub = rounded(tmp/10,0)*10;
            
            tab.push(tmp - sub)
        }
        return tab;
        
    }
    
    function addPersistence(nbr){
        var pers = sum_array(explode_nbr(nbr))
        var steps = 1;
        
        while(pers > 10){
            pers = sum_array(explode_nbr(pers));
            steps++;
        }
        return pers
    }
    
    function multiPersistence(nbr){
        var pers = multi_array(explode_nbr(nbr))
        var steps = 1;
        
        while(pers > 10){
        console.log(pers)
            pers = multi_array(explode_nbr(pers));
            steps++;
        }
        return pers
    }

    // find num in string in elmts of arr and reutrn with that
    function numInStr(arr) {
        let i;
        let j;
        let char; 
        let tab = [];
        let nbrs = []; for(i = 0; i < 10; i++){nbrs.push(i)}

        for(i = 0; i < arr.length; i++){
            for(j = 0; j < arr[i].length; j++){
            if(Number.isInteger(parseInt((arr[i]).charAt(j)))){
                console.log(i)
                tab.push(arr[i])
            }
        }

        console.log('XXXXXXXXX')
        }

        return tab
    }
    
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX DATE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/ 
    function strtotime(){
        
    }
    
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX TRI XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // input : array with words => ouput : array with words sorted 
    function sort_dictionary(a){
        function w2d(word){
            tab1 = [];
            tab2 = [];
            tab1 = Object.keys(alpha);

            for(let i = 0; i < word.length; i++){
                for(let j = 0; j < Object.keys(alpha).length; j++){
                    if(word.charAt(i) == tab1[j]){
                        tab2.push(alpha[tab1[j]])
                    }
                }
            }
            return tab2
        }
        function explode(txt){
            var start = 0;
            tab3 = [];

            for(var i = 0; i <= txt.length; i++){  
                if(txt.charAt(i) == ' ' || txt.charAt(i) == ', ' || txt.charAt(i) == ';' || txt.charAt(i) == '. ' || txt.charAt(i) == '/' || i == txt.length || txt.charAt(i) == '’'){
                    tab3.push(txt.substr(start, (i - start) ));
                    start = i+1;
                }
            }
            return tab3;
        }
        // END FUNCTION

        tab3 = explode(a);
        tab4 = []; 
        
        // letter exception
        for(let i = 0; i < tab3.length; i++){
            if(tab3[i].length == 1){
                if(tab3[i] == 'd'){
                    tab3.splice(i,1)
                }
            }
        }

        // convert word to digit
        for(let i = 0; i < tab3.length; i++){
            tab4[i] = (w2d(tab3[i]))
        }
//        console.log(tab3)
  //      console.log(tab4)

        let i = 0;
        count = 0;
        
        while(true){
            
            count = 1 // si 1 continue
            //loop table
            for(let j = 0; j < tab4.length-1; j++){
                if(tab4[j][0] > tab4[j+1][0]){
                    tmp = tab4[j];
                    tab4[j] = tab4[j+1];
                    tab4[j+1] = tmp;
                    count = 0;
                }
            }
            if(count === 1)
                break
            
        }
        
/*
        // find tab4[i].length most long = max or 
        for(let j = 0; j < tab4.length; j++){
            if(tab4[j][5] !== undefined){
                console.log(tab4[j])
                console.log(tab4[j][5])
                console.log(' ')
            }j
        }
  
        // for with 'if' to select word concerned until max
                
        // sorting
        /*
        tmp = 0; 
        count = 1;
        while(count !== 0){
            count = 0;
            for(let i = 0; i <tab4.length-1; i++){
                if(tab4[i] > tab4[i+1]){
                    console.log(tab4[i])
                    console.log(tab4[i+1])
                    console.log('x')
                    tmp = tab4[i];
                    tab4[i] = tab4[i+1];
                    tab4[i+1] = tmp;
                    count++;
                }
            }
            console.log(' ')
        }

        console.log(tab4)
        // end        
*/        
    }
    sort_dictionary(texte)
    
    // processing instruction
    
    function ksort(){
        
    }
    
    function usort(){
        
    }
    
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX DIVERS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/    
    // return if a var is defined and not null
    function isset(x){
        if(x !== null){
            return true
        }
        else{
            return false
        }
    }
    
    // return nbr float or int / string LC / UP / special char / punct
    function accurate_typeof(x){
        
    }
        
    function variant_int(){
        
    }
    
});


/*

        // TRY TO SORT TAB WITH ALL POS OF NUMBER IN ARRAY

        // find tab4[i].length most long = max or 
        for(let j = 0; j < tab4.length; j++){
            if(tab4[j][5] !== undefined){

            }
        }
        
        // for with 'if' to select word concerned until max
        
        // sorting
        tmp = 0; 
        count = 1;
        while(count !== 0){
            count = 0;
            for(let i = 0; i <tab4.length-1; i++){
                if(tab4[i][0] > tab4[i+1][0]){
                    tmp = tab4[i];
                    tab4[i] = tab4[i+1];
                    tab4[i+1] = tmp;
                    count++;
                }
            }
        }
        console.log(tab4)
        // end







        // change all elmt of the array in one number
        tmp = '';
        for(let i = 0; i < tab4.length-1; i++){
            tmp = ''
            for(let j = 1; j < tab4[i].length; j++){
                tmp += tab4[i][j] + '';
                console.log(tmp)
            }
            tab4[i] = tab4[i][0] + '.' + tmp;
            tab4[i] = parseFloat(tab4[i]);
            console.log(' ')
        }  

*/