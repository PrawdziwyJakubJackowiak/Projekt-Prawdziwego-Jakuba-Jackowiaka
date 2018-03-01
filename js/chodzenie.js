document.onkeydown = function(e) {
    switch(e.keyCode) {
        case 37:	/* Na ljewo */
				pozycja_gracza -= 1;
				sprawdz_pozycje(pozycja_gracza);
				if(ruch == false){
					pozycja_gracza += 1;
				}
				else{
					$('#div'+(pozycja_gracza+1)).html("");	
					$('#div'+(pozycja_gracza+1)).removeClass("gracz");	
					$('#div'+(pozycja_gracza)).addClass("gracz");
					$('#div'+(pozycja_gracza)).html('<img id="graczimg" src="../img/gracz.gif" />');
				}
            break;
        case 38:	/* W g󲪠*/
			pozycja_gracza -= 15;
				sprawdz_pozycje(pozycja_gracza);
				if(ruch == false){
					pozycja_gracza += 15;
				}
				else{
					$('#div'+(pozycja_gracza+15)).html("");
					$('#div'+(pozycja_gracza+15)).removeClass("gracz");
					$('#div'+(pozycja_gracza)).addClass("gracz");
					$('#div'+(pozycja_gracza)).html('<img id="graczimg" src="../img/gracz.gif" />');
				}
            break;
        case 39:	/* Na prawo */
				pozycja_gracza += 1;
				sprawdz_pozycje(pozycja_gracza);
				if(ruch == false){
					pozycja_gracza -= 1;
				}
				else{
					$('#div'+(pozycja_gracza-1)).html("");	
					$('#div'+(pozycja_gracza-1)).removeClass("gracz");	
					$('#div'+(pozycja_gracza)).addClass("gracz");
					$('#div'+(pozycja_gracza)).html('<img id="graczimg" src="../img/gracz.gif" />');
				}
            break;
        case 40:		/* W dół */
			pozycja_gracza += 15;
				sprawdz_pozycje(pozycja_gracza);
				if(ruch == false){
					pozycja_gracza -= 15;
				}
				else{
					$('#div'+(pozycja_gracza-15)).html("");
					$('#div'+(pozycja_gracza-15)).removeClass("gracz");
					$('#div'+(pozycja_gracza)).addClass("gracz");
					$('#div'+(pozycja_gracza)).html('<img id="graczimg" src="../img/gracz.gif" />');
				}
            break;
    }
};