export type GenshinElement = 'anemo' | 'hydro' | 'dendro' | 'electro' | 'geo' | 'cryo' | 'pyro';

export type GenshinWeapon = 'bow' | 'catalyst' | 'claymore' | 'polearms' | 'sword';

export type GenshinRarity = 4 | 5;

export type GenshinGender = 'f' | 'm';

export type Region =
	| 'mondstat'
	| 'liyue'
	| 'inazuma'
	| 'snezhnaya'
	| 'sumeru'
	| 'fontaine'
	| 'natlan';

export type GenshinCharacter = {
	id: number;
	name: string;
	alias: string;
	element: GenshinElement;
	rarity: GenshinRarity;
	weapone: GenshinWeapon;
	region: Region;
	gender: GenshinGender;
};
