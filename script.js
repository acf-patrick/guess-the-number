
/*class Personnage{
    constructor(nom = "", nbrVie = 0, arme = ""){
        this.name = nom;
        this.HP = nbrVie;
        this.weapon = arme;
        }
    introduce(){
        console.log('nom : ${this.name} \nnombre de vie : ${this.HP} \narme : ${this.weapon}');
    }
    toString(){
        var ret = "nom : "+this.name+"\nnombre de vie : "+this.HP+"\narme : "+this.weapon;
        return ret;
    }
};


var perso = new Personnage("acf", 100, "raquette");
perso.introduce();

var perso2 = new Personnage("Hercule", 500, "Epée");
perso2.introduce();

var eleve = {
    nom : "Jean",
    note : [],
    moyenne : function(){
        if (!this.note.length)
            return 0;
        var sum = 0;
        for (var i=0; i<this.note.length; ++i)
            sum += this.note[i];
        return sum/this.note.length;
    },
    present : function(){
        console.log(this.nom + " present!");
    }
}

var e = Object.create(eleve);
e.note = [10, 17];
e.present();
console.log(e.moyenne());
*/

function randint(a, b) { 
    return Math.round((a>b)?randint(b, a):(a+Math.random()*(b-a))); 
}
function decompose(x){
    return x.toString().split("");
}
function main(){
    let i, j, cnt = 0, nme = 0, nbe = 0, usr_nbr,
        target = randint(1000, 10000),
        s_default = "", msg = "Ampidiro ny isanao : ";
    let d_target = decompose(target);
    for (i=0; i<d_target.length; ++i)
        s_default += '0';

    while (usr_nbr != target){
        cnt = nme = nbe = 0;
        usr_nbr = prompt(msg, s_default);
        if (usr_nbr === null)
            break;
        let d_usr_nbr = decompose(usr_nbr);
        if (d_target.length != d_usr_nbr.length)
            continue;
        for (i=0; i<d_target.length; ++i)
            for (j=0; j<d_target.length; ++j)
                if (d_usr_nbr[j] == d_target[i]){
                    cnt++;
                    if (i != j)
                        nme += 1;
                    else
                        nbe += 1;
                    break;
                }
        msg = usr_nbr+" no isa nampidirinao teo\n";
        msg += "isa marina : "+cnt+'\n';
        msg += "tsara fipetraka : "+nbe+'\n';
        msg += "ratsy fipetraka : "+nme;
    }
    msg = target+" ilay isa\n";
    msg += "Hiverina hilalao?";
    if (confirm(msg))
        main();
}