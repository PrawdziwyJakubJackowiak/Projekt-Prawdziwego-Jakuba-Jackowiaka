function zdejmowanie(zdejmowany_item){
	if($("#tekst_2").hasClass("zdejmowany_bron")){
		przeszukaj_plecak_zdejmowanie(zdejmowany_item);
		
		$("#bron").html('');
		$("#bron").addClass("pusty");
	}
	else if($("#tekst_2").hasClass("zdejmowany_zbroja")){
		przeszukaj_plecak_zdejmowanie(zdejmowany_item);
		
		$("#zbroja").html('');
		$("#zbroja").addClass("pusty");
	}
	else if($("#tekst_2").hasClass("zdejmowany_tarcza")){
		przeszukaj_plecak_zdejmowanie(zdejmowany_item);
			
		$("#tarcza").html('');
		$("#tarcza").addClass("pusty");
	}		
}

function przeszukaj_plecak_zdejmowanie(zdejmowany_item){
	for(i=0; i<65; i++){
		if(i >= 65){
			alert("Brak miejsca w plecaku!");
			i += 100;
		}
		else if($('#plecak'+i).hasClass("pusty")){
			$('#plecak'+i).html('<img id='+zdejmowany_item+' class="w_plecaku" src="../img/przedmioty/'+zdejmowany_item+'.gif" onclick="item_info(id)"/>');
			$('#plecak'+i).removeClass("pusty");
			$('#plecak'+i).addClass(zdejmowany_item);
			
			max_hp = max_hp - eval(zdejmowany_item)[3];
			dmg_min = dmg_min - eval(zdejmowany_item)[4];
			dmg_max = dmg_max - eval(zdejmowany_item)[5];
			def = def - eval(zdejmowany_item)[6];
			kasa = kasa - eval(zdejmowany_item)[eval(zdejmowany_item).length -1];
			staty_gracza();
			
			i += 100;
		}
	}
}