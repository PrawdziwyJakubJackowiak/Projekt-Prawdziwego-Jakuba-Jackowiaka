// dodać else if dla hełmu, pierścienia itd.

function zakladanie(zakladany_item){
	if($("#tekst_2").hasClass("zakladany_bron")){
		if($("#bron").hasClass("pusty")){
			przeszukaj_plecak(zakladany_item);
			
			$("#bron").html('<img id='+zakladany_item+' class="w_eq" src="../img/przedmioty/'+zakladany_item+'.gif" onclick="item_info(id);"/>');
			$("#bron").removeClass("pusty");
		}
	}
	else if($("#tekst_2").hasClass("zakladany_zbroja")){
		przeszukaj_plecak(zakladany_item);
			
		$("#zbroja").html('<img id='+zakladany_item+' class="w_eq" src="../img/przedmioty/'+zakladany_item+'.gif" onclick="item_info(id);"/>');
		$("#zbroja").removeClass("pusty");
	}
	else if($("#tekst_2").hasClass("zakladany_tarcza")){
		przeszukaj_plecak(zakladany_item);
			
		$("#tarcza").html('<img id='+zakladany_item+' class="w_eq" src="../img/przedmioty/'+zakladany_item+'.gif" onclick="item_info(id);"/>');
		$("#tarcza").removeClass("pusty");
	}		
}	
		
function przeszukaj_plecak(zakladany_item){
	for(i=0; i<65; i++){
		if($('#plecak'+i).hasClass(zakladany_item)){
			$('#plecak'+i).html("");		
			$('#plecak'+i).removeClass(zakladany_item);
			$('#plecak'+i).addClass("pusty");
			i += 100;
			wyczysc_chat();
			
			max_hp = max_hp + eval(zakladany_item)[3];
			dmg_min = dmg_min + eval(zakladany_item)[4];
			dmg_max = dmg_max + eval(zakladany_item)[5];
			def = def + eval(zakladany_item)[6];
			kasa = kasa + eval(zakladany_item)[eval(zakladany_item).length -1];
			staty_gracza();
		}
	}
}