import type { Role } from "~/types/form.ts";

export interface Conference {
	date: {
		begin: number;
		end: number;
		month: string;
		year: number;
	};
	descriptions: ConferenceDescriptions;
	location: string;
	pricing: ConferencePricing;
	slug: string;
	talks: ConferenceTalk[];
	title: string;
	website: string;
}

export interface ConferenceDescriptions {
	/**
	 * 40-50 character description of the conference.
	 */
	brief: string;

	/**
	 * 80-100 character description of the conference.
	 */
	medium: string;
}

/**
 * Costs of tickets for a conference, keying number of tickets to USD price.
 */
export interface ConferencePricing {
	1: number;
	[i: number]: number | undefined;
}

export interface ConferenceTalk {
	/**
	 * How to describe the talk, either for all roles or role-specific descriptions.
	 */
	description: Partial<Record<Role, string>> | string;
	title: string;
	url: string;
}
