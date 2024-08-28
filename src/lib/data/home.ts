export interface GameProps {
	src: string;
	alt: string;
	name: string;
	href: string;
}

interface Data {
	id: number;
	srcIcon: string;
	srcCard: string;
	alt: string;
	name: string;
	href: string;
}

interface EmoteData {
	id: number;
	src: string;
	alt: string;
}

export const gamesList: Data[] = [
	{
		id: 0,
		srcIcon: 'images/genshin/genshin-icon.webp',
		srcCard: 'images/genshin/genshin-card.webp',
		alt: 'Genshin Icon',
		name: 'Genshin Impact',
		href: '/genshin'
	},
	{
		id: 1,
		srcIcon: 'images/hsr/hsr-icon.webp',
		srcCard: 'images/hsr/hsr-card.webp',
		alt: 'HSR Icon',
		name: 'Honkai: Star Rail',
		href: '/star-rail'
	},
	{
		id: 2,
		srcIcon: 'images/wuwa/wuwa-icon.webp',
		srcCard: 'images/wuwa/wuwa-card.webp',
		alt: 'Wuwa Icon',
		name: 'Wuthering Waves',
		href: '/wuthering-waves'
	}
];

export const emotesList: EmoteData[] = [
	{
		id: 0,
		src: 'images/genshin/xiao-emote.webp',
		alt: 'Xiao Emote'
	},
	{
		id: 1,
		src: 'images/hsr/march-emote.webp',
		alt: 'March 7th Emote'
	},
	{
		id: 2,
		src: 'images/hsr/firefly-emote.webp',
		alt: 'Firefly Emote'
	},
	{
		id: 3,
		src: 'images/wuwa/rover-emote.webp',
		alt: 'Rover Emote'
	},
	{
		id: 4,
		src: 'images/genshin/paimon-emote.webp',
		alt: 'Paimon Emote'
	}
];
