//eval robi ze stringa np. id1 var żeby bralo z listy przedmiotów //dodać goggin13 do creditsów <3
var zakladany_item; // ten var jest po to żeby wysłać id przedmiotu z item_info.js do zakładanie.js
var zdejmowany_item; // ten var jest po to żeby wysłać id przedmiotu z item_info.js do zdejmowanie.js
var wyrzucany_item; // ten var jest po to żeby wysłać id przedmiotu z item_info.js do wyrzucanie.js

function item_info(id){
	zakladany_item = id; 
	zdejmowany_item = id; 
	wyrzucany_item = id;
	if($('#'+id).hasClass("w_plecaku")){
		zaloz_item = true;
	}
	else if($('#'+id).hasClass("w_eq")){
		zaloz_item = false;
	}
	
	item_hp = "<br>HP: +"+eval(id)[3];
	item_dmg_min = eval(id)[4];
	item_dmg_max = eval(id)[5];
	item_dmg = "<br>DMG: "+item_dmg_min+'-'+item_dmg_max;
	item_def = "<br>DEF: +"+eval(id)[6];
	item_kasa = "<br>ZŁOTO: +"+eval(id)[eval(id).length -1];
		
	if(eval(id)[3] == 0){
		item_hp = "";
	}
	if(eval(id)[4] == 0 && eval(id)[5] == 0){
		item_dmg = "";
	}
	if(eval(id)[6] == 0){
		item_def = "";
	}	
	if(eval(id)[eval(id).length -1] == 0){
		item_kasa = "";
	}	
			
	$("#tekst_1").html(eval(id)[1]+' <br /> Lvl '+eval(id)[0]+'<br>'+item_hp+''+item_dmg+''+item_def+''+item_kasa);
	$("#tekst_1").show();
	$("#tekst_2").removeClass();
		
		if(zaloz_item == true){
			$("#tekst_2").html('Załóż');
			$("#tekst_2").show();
			$("#tekst_2").addClass('zakladany_'+eval(id)[2]);
		}
		else if(zaloz_item == false){
			$("#tekst_2").html('Zdejmij');
			$("#tekst_2").show();
			$("#tekst_2").addClass('zdejmowany_'+eval(id)[2]);
		}
		
	$("#tekst_3").html('Wyrzuć');
	$("#tekst_3").show();
}