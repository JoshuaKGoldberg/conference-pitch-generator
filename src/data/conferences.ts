import type { Conference } from "~/types/conferences.ts";

export const conferences: Conference[] = [
	{
		date: {
			begin: 18,
			end: 19,
			month: "September",
			year: 2025,
		},
		descriptions: {
			brief: "web dev tooling conference at the aquarium",
			medium:
				"conference for the latest and greatest in web dev tooling, at the New England Aquarium",
		},
		location: "Boston",
		pricing: {
			1: 550,
			2: 1000, // ??
			3: 1450,
		},
		slug: "squiggleconf-2025",
		talks: [
			{
				description: {
					bootcamp:
						"I know a lot of us need to know how to set up projects and get builds working, but most online guides still use old and slow tools. This would help us understand the latest and greatest.",
					employee:
						"We've talked recently about wanting faster and more reliable builds, but most online guides still use old and slow tools. This would help us understand the latest and greatest.",
				},
				title: "Rolldown: How Vite Bundles at the Speed of Rust",
				url: "https://squiggleconf.com/sessions#rolldown-how-vite-bundles-at-the-speed-of-rust",
			},
			{
				description: {
					bootcamp:
						"Fellows are branching out and making their own projects but it's hard to know which frameworks to use. I think a lot of new projects would benefit from seeing the options compared and contrasts like this.",
					employee:
						"We've been branching out and looking at how to make new projects but it’s hard to know which frameworks to use. I think a lot of new our initiatives would benefit from seeing the options compared and contrasts like this.",
				},
				title: "JavaScript Framework Cage Match",
				url: "https://squiggleconf.com/2025/sessions#javascript-framework-cage-match",
			},
			{
				description: {
					bootcamp:
						"We've seen that when fellows push themselves too hard over a sustained time, they burn out and aren’t able to motivate long-term. I think quite a few folks would benefit from learning how to sustainably put effort into tech.",
					employee:
						"We've seen that when our devs push themselves too hard over a sustained time, they burn out and aren’t able to motivate long-term. I think quite a few folks would benefit from learning how to sustainably put effort into tech.",
				},
				title: "Tech Broke My Heart",
				url: "https://squiggleconf.com/2025/sessions#javascript-framework-cage-match",
			},
		],
		title: "SquiggleConf 2025",
		website: "https://squiggleconf.com/2025",
	},
];
