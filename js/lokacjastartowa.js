window.onload = start;

var pozycja_gracza;
var ruch;
var skrzynia = false; //dostępność skrzyni
var pusta_skrzynia = false;
var zaloz_item = true;

function start(){
	var tresc_diva = "";
	var plecak = "";
	
	for(i=0; i<150; i++){
		var element = "div" + i;
		tresc_diva = tresc_diva + '<div class="tile" id="'+element+'"></div>';
	}
	
	$("#map").html(tresc_diva);
	
	for(i=0; i<64; i++){
		var element = "plecak" + i;
		plecak = plecak + '<div class="plecak pusty" id="'+element+'"></div>';
	}
	
	
	$("#plecak").html(plecak);
	
	staty_gracza();
	
	grafika();
}

function grafika(){
	for(i=0; i<150; i++){
		/* Ściany */
		if(i < 16 || i == 20 || i == 29 || i == 30 || i == 35 || i == 44 || i == 45 || i > 58 && i < 66 || i == 74 || i == 75 || i == 80 || i == 89 || i == 90 || i == 95 || i == 104 || i == 105 || i == 110 || i == 119 || i == 120 || i > 133 && i != 142){
			$('#div'+i).addClass("sciana");
		}
		/* Podłoga */
		else if(i != 32 && i != 76 && i != 92 && i != 79 && i != 91 && i != 109 && i != 142){
			$('#div'+i).addClass("podloga");
		}
		/* Wyjście z domu */
		else if(i == 142){
			$('#div'+i).addClass("wyjscie");
		}
		/* Wejście do piwnicy */
		else if(i == 32){
			$('#div'+i).addClass("piwnica");
		}
		/* Łóżko */
		else if(i == 76){
			$('#div'+i).addClass("lozkogora");
		}
		else if(i == 91){
			$('#div'+i).addClass("lozkodol");
		}
		/* Skrzynka */
		else if(i == 79){
			$('#div'+i).addClass("skrzynka");
			$('#div'+i).html('<img id="img" src="../img/lokacjastartowa/skrzynka.png" onclick="skrzynka()" />');
		}
		/* NPC */
		else if(i == 109){
			$('#div'+i).addClass("npc");
			$('#div'+i).html('<img id="npcimg" src="../img/lokacjastartowa/npc.gif" onclick="npc()"/>');
		}
		/* Gracz */
		else if(i == 92){
			$('#div'+i).addClass("podloga");
			$('#div'+i).html('<img id="graczimg" src="../img/gracz.gif" />');
			pozycja_gracza = i;
		}
	}
	
}

function sprawdz_pozycje(pozycja_gracza){
	ruch = true;
	if($('#div'+(pozycja_gracza)).hasClass("sciana") || $('#div'+(pozycja_gracza)).hasClass("npc") || $('#div'+(pozycja_gracza)).hasClass("skrzynka") || $('#div'+(pozycja_gracza)).hasClass("lozkogora") || $('#div'+(pozycja_gracza)).hasClass("lozkodol") || pozycja_gracza > 150){
		ruch = false;
	}
}

function npc(){
	if($("#div93").hasClass("gracz") || $("#div94").hasClass("gracz") || $("#div108").hasClass("gracz") || $("#div123").hasClass("gracz") || $("#div124").hasClass("gracz")){
		
		$("#tekst_1").html("Witaj młody farmerze, weź eq ze skrzyni i leć bić szczury w piwnicy!");
		$("#tekst_2").html("Okej!");
		$("#tekst_1").show();
		$("#tekst_2").show();
		$("#tekst_2").removeClass("zakladanie");
		$("#tekst_3").hide();
		
		skrzynia = true;
	}
}

function skrzynka(){
	if(skrzynia == false && $("#div78").hasClass("gracz") || skrzynia == false && $("#div93").hasClass("gracz") || skrzynia == false && $("#div94").hasClass("gracz")){
		$("#tekst_1").html("Co chatę okradasz, może pogadasz najpierw z tym ziutem");
		$("#tekst_2").html("Odejdź");
		$("#tekst_1").show();
		$("#tekst_2").show();
	}
	else if(skrzynia == true){
		if(pusta_skrzynia == true){
				alert("Skrzynia jest pusta!");
			}
		else{	
			var info_o_itemach = ["id1", "id2", "id3"];
			wyjmowanie(info_o_itemach);
							
			pusta_skrzynia = true;
		}	
	}
}