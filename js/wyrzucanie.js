var wyrzuc; //to jest po to żeby działało .html

function wyrzucanie(wyrzucany_item){
		wyrzuc = $("#"+wyrzucany_item).closest("div").prop("id");
		$("#"+wyrzuc).html('');
		
		max_hp = max_hp - eval(wyrzucany_item)[3];
		dmg_min = dmg_min - eval(wyrzucany_item)[4];
		dmg_max = dmg_max - eval(wyrzucany_item)[5];
		def = def - eval(wyrzucany_item)[6];
		kasa = kasa - eval(wyrzucany_item)[eval(wyrzucany_item).length -1];
	
		staty_gracza();
		wyczysc_chat();	
}