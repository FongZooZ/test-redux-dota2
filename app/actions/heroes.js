import { HeroConstant } from '../constants/action';

export const fetchHeroes = () => ({
	type: HeroConstant.FETCH_ALL
});

export const removeHeroes = () => ({
	type: HeroConstant.REMOVE_ALL
});