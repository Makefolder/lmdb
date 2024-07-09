export enum Colour {
	Green = 'green', // #0eba81
	Purple = 'purple', // #4f45e4
	Cyan = 'cyan', // #0ba5e9
	Lime = 'lime', // #84cc15
	Yellow = 'yellow', // #eab305
	Pinky = 'pinky', // #d41876
	Grey = 'grey' // #48598f
}

export type Link = {
	url: string;
	title: string;
	colour: Colour;
};
