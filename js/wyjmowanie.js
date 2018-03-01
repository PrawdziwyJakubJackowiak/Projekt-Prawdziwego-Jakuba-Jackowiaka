// i wskazuje miejsce w plecaku // j to kolejne przedmioty w przysłanym arrayu

function wyjmowanie(info_o_itemach){
	var j = 0;
	
	for(i=0; i<65; i++){
		var item = info_o_itemach[0+j]
		
		if((i+info_o_itemach.length) >= 65){
			alert("Brak miejsca w plecaku!");
			i += 100;
		}
		else if($('#plecak'+i).hasClass("pusty") && j < info_o_itemach.length){
				$('#plecak'+i).html('<img id='+info_o_itemach[0+j]+' class="w_plecaku" src="../img/przedmioty/'+item+'.gif" onclick="item_info(id)"/>');
				$('#plecak'+i).removeClass("pusty");
				$('#plecak'+i).addClass(item);
				j++;
		}
		if(j == info_o_itemach.length){
			i += 100;
		}
	} 
}