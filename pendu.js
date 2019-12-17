var di=parseInt(Math.random()*mots.length)
var mot=mots[di][0];
var indice=mots[di][1];
var theme=mots[di][2];
var lmot=Array.from(mot);
document.getElementById("theme").innerHTML="Theme : "+theme;
var lettres_fausses=[];
var lettres_trouvees=[];
var lettres_jouees=[];

for(x=0;x<lmot.length;x++){
    if(lmot[x]=="-") lettres_trouvees.push(true);
    else lettres_trouvees.push(false);
}

var vies_restantes=11;
var fini=false;

function aff(){
    var affi="";
    for(x=0;x<lettres_trouvees.length;x++){
        if( lettres_trouvees[x] ) affi+=" "+lmot[x]
        else affi+=" _"
    }
    var lfs="";
    for(x=0;x<lettres_fausses.length;x++){
        if(x>0) lfs+=","
        lfs+=" "+lettres_fausses[x]
    }
    var ljs="";
    for(x=0;x<lettres_jouees.length;x++){
        if(x>0) ljs+=","
        ljs+=" "+lettres_jouees[x]
    }
    //alert(affi);
    document.getElementById("mot").innerHTML=affi;
    document.getElementById("vies").innerHTML="Il vous reste "+vies_restantes+" vies."
    document.getElementById("img").src=imgs[vies_restantes];
    document.getElementById("lf").innerHTML="Lettres fausses : "+lfs;
    document.getElementById("lj").innerHTML="Lettres jouees : "+ljs;
}

function lettre(l){
    var bon=true;
    if(fini){
        bon=false;
        alert("La partie est finie");
    }
    else if(lettres_jouees.includes(l)){
        alert("Tu as déjà joué cette lettre !");
        bon=false;
    }
    else{ lettres_jouees.push( l ); }
    if(bon){
        var trouve=false;
        for(x=0;x<lmot.length;x++){
            if( lmot[x]==l ){
                lettres_trouvees[x]=true;
                trouve=true;
            }
        }
        if(!trouve){
            if(!(l in lettres_fausses)){
                lettres_fausses.push(l);
                vies_restantes-=1;
            }
        }
        
        aff();
        
        if(vies_restantes==1){
            alert("Indice : "+indice);
        }
        //TEST PERDU
        if(vies_restantes<=0){
            alert("Et c'est ainsi que le pauvre monsieur se pendit ; VOUS AVEZ PERDU !");
            alert("Le mot était : "+mot);
            fini=true;
        }
        
        var gagne=true;
        for(x=0;x<lettres_trouvees.length;x++){
            if(!lettres_trouvees[x]){
                gagne=false;      
            }
        }
        if(gagne){
            alert("Vous avez Gagné !");
            alert("L'indice était : "+indice);
            fini=true;
        }
    }
}   

function restart(){
    di=parseInt(Math.random()*mots.length)
    mot=mots[di][0];
    indice=mots[di][1];
    theme=mots[di][2];
    lmot=Array.from(mot);
    document.getElementById("theme").innerHTML="Theme : "+theme;
    lettres_fausses=[];
    lettres_trouvees=[];
    lettres_jouees=[];

    for(x=0;x<lmot.length;x++){
        if(lmot[x]=="-") lettres_trouvees.push(true);
        else lettres_trouvees.push(false);
    }

    vies_restantes=12;
    fini=false;
    aff();
}

aff();

