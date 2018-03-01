var max_hp = 100;
var lvl_gracza = 1;
var hp = 100;
var max_exp = 100;
var exp = 0;
var dmg_min = 1;
var dmg_max = 1;
var def = 0;
var kasa = 0;

var item_lvl;
var item_typ;
var item_hp;
var item_dmg_min;
var item_dmg_max;
var item_dmg;
var item_def;
var item_kasa;


function staty_gracza(){
	$(".hp").html('HP: '+hp+'/'+max_hp);
	$(".exp").html('EXP: '+exp+'/'+max_exp);
	$(".dmg").html('DMG: '+dmg_min+'-'+dmg_max);
	$(".def").html('DEF: '+def);
	$(".kasa").html('ZŁOTO: '+kasa);
	
	$("#nick").html('MILO.JEZ - Lvl '+lvl_gracza);
}