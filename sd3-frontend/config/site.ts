export type SiteConfig = typeof siteConfig;

export const siteConfig: {
	name: string;
	description: string;
	navItems: {label: string; href: string}[]
	navMenuItems: {label: string; href: string}[]
	links: {
		[key: string]: string
	}
} = {
	name: "Stable Diffusion with TorchServe Backend",
	description: "Stable Diffusion with TorchServe Backend",
	navItems: [
		// {
		// 	label: "Home",
		// 	href: "/",
		// },
	],
	navMenuItems: [
		// {
		// 	label: "Home",
		// 	href: "/",
		// },
	],
	links: {
		github: "https://github.com/Himank-J"
	},
};