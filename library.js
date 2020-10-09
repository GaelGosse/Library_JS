(function(window){
  // You can enable the strict mode commenting the following line  
  //  'use strict';

  // This function will contain all our code
  function myLibrary(){
    var _myLibraryObject = {};

    // We will add functions to our library here !
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
    var error = 'background: crimson; color: #fff; padding: 0 10%';
    var warning = 'background: darkorange; color: #fff; padding: 0 10%';
    var miss = 'background: gold ; color: #000; padding: 0 10%';
    
    // VAR TEST //
    var array1 = { "clé1" : "valeur1", "clé2" : "valeur2", "clé3": "valeur3", "clé4": "valeur4" };    
    var tab1 = ['hello', '5', 'thank', 'hello', 5, 'thanks', 'hello', true, 'the last'];
    var tab2 = ['hello', 'bye'];
    var tab3 = ['hello', 3];
    var tab4 = ['mississipi', 'eternelement', 'bonjour'];
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
    
    var para = 'Le militaire regagna sa voiture et la barrière s’ouvrit. David regardait autour de lui, la base militaire où il avait passé dix mois de sa vie. Il n’y avait pas beaucoup de changement. L’herbe toujours aussi bien tondue, les allées toujours aussi propres. Les mêmes bâtiments. Juste les décors avaient changés. Il s’agissait de chars. C’étaient les chars que David avait eu l’occasion de voir fonctionner et qui, maintenant, avaient remplacés les vieux chars qui servaient de décors. Cela fit sourire David.';
      
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
    
    // FIN DE VAR TEST
    
    
    
    /* TAB ARRAY */ 
    // return the length of a associative array
    _myLibraryObject.array_length = function(arr){
        return Object.keys(arr).length;
    }
    
    // swap keys and values in array
    _myLibraryObject.array_flip = function(arr){
        tab1 = [];
        tab2 = [];
        tab1 = Object.keys(arr);
        
        for(let i = 0; i < Object.keys(arr).length; i++){
            tab2[arr[tab1[i]]] = tab1[i];
        }
        return (tab2);
    }
    
    // Return true if a key exists in a array
    _myLibraryObject.array_key_exists = function(tab, key){
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
    _myLibraryObject.array_key_first = function(arr){
        tab1 = Object.keys(arr);
        return tab1[0]
    }
    
    // Return last key of assiociative array
    _myLibraryObject.array_key_last = function(arr){
        tab1 = Object.keys(arr);
        return tab1[Object.keys(arr).length-1]
    }
    
    // Search a word in array : return the position of the value if it's found
    _myLibraryObject.array_search = function(word, arr){
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
    _myLibraryObject.array_type_of_var = function(arr){ 
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
    _myLibraryObject.type_of_array = function(array){
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
    
    _myLibraryObject.sum_array = function(arr){
        var sum = arr[0];
        for(let i = 1; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }
    
    _myLibraryObject.multi_array = function(arr){
        var multi = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] !== 0){
                multi *= arr[i];
            }
        }
        return multi;
    }
    
    /* TEXTE */
    // Explode : return words of texte in array
    _myLibraryObject.explode = function(txt){
        var start = 0;
        tab1 = [];
        
        for(var i = 0; i <= txt.length; i++){  
            if(txt.charAt(i) == ' ' || txt.charAt(i) == ', ' || txt.charAt(i) == ';' || txt.charAt(i) == '. ' || txt.charAt(i) == '/' || i == txt.length || txt.charAt(i) == '’'){
                tab1.push(txt.substr(start, (i - start) ));
                start = i+1;
            }
        }
        tab1.push(char.substr(start, i - start-1));
        return tab1;
     }
    
    // input word which is search and txt : Return the pos of the elements
    _myLibraryObject.text_search = function(word, txt){ 
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
        console.log('xxx')
        return tab1;
    }
    
    // Count total number of words in text
    _myLibraryObject.count_word = function(txt){
        var start = 0; // first pos of a word
        char = ''; // char which is moved with ite 
        count = 0; // var counter 
        
        for(var i = 0; i <= txt.length; i++){
            if(txt.charAt(i) == ' '  || txt.charAt(i) == ';' || txt.charAt(i) == '.' || txt.charAt(i) == ',' || txt.charAt(i) == '/' || i == txt.length || txt.charAt(i) == '’'){
                char = txt.substr(start, (i - start) );
                count++;
                start = i+1;
            }
        }
        return count;
    }
    
    // Count occurence of one word in a text
    _myLibraryObject.count_one_word = function(word, txt){
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
    
    // convert letters of a word into digits
    _myLibraryObject.word2digits = function(word){
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
    
    /* MATHS */
    _myLibraryObject.factorial = function(a){
        var result = 1;
        for(let i = 1; i <= a; i++){
            result = i * result;
        }
        return result
    }  
    
    // rounded
    _myLibraryObject.rounded = function(nbr, decimal){
        let part = 10**decimal;
        return Math.floor(nbr * part)/part;
    }
    
    // persistence
        
    _myLibraryObject.explode_nbr = function(nbr){
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
    
    _myLibraryObject.addPersistence = function(nbr){
        var pers = sum_array(explode_nbr(nbr))
        var steps = 1;
        
        while(pers > 10){
            pers = sum_array(explode_nbr(pers));
            steps++;
        }
        return pers
    }
    
    _myLibraryObject.multiPersistence = function(nbr){
        var pers = multi_array(explode_nbr(nbr))
        var steps = 1;
        
        while(pers > 10){
        console.log(pers)
            pers = multi_array(explode_nbr(pers));
            steps++;
        }
        return pers
    }
    
    /* TRI */
    // input : array with words => ouput : array with words sorted 
    _myLibraryObject.sort_dictionary = function(a){
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
            tab3.push(char.substr(start, i - start-1));
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
        console.log(tab4)

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
                if(tab4[i] > tab4[i+1]){
                    tmp = tab4[i];
                    tab4[i] = tab4[i+1];
                    tab4[i+1] = tmp;
                    count++;
                }
            }
        }

        console.log(tab4)
        // end        
        return true;
    }
    
    /* DIVERS */    
    // return if a var is defined and not null
    _myLibraryObject.isset = function(x){
        if(x !== null){
            return true
        }
        else{
            return false
        }
    }

    return _myLibraryObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
    window.myWindowGlobalLibraryName = myLibrary();
  }
})(window); // We send the window variable withing our function


// Then we can call it using
console.log(myWindowGlobalLibraryName);