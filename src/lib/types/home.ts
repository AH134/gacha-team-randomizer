import type { Game } from '.';

export type GameProps = {
	alt: string;
	name: string;
	game: Game;
};

export type Data = {
	id: number;
	gameType: Game;
	alt: string;
	name: string;
};
