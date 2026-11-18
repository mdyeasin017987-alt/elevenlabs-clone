/**
 * Demo content for the dashboard UI.
 *
 * Replace these static records with API responses when backend endpoints are
 * ready. Keeping presentation data outside Svelte components makes it easier
 * to add pagination, loading states and server-backed data later.
 */

export const currentUser = { name: 'Sahadat', workspace: 'Personal workspace' } as const;

export type VoiceLang = 'bn-BD' | 'en-US';

export type Voice = {
	name: string;
	style: string;
	detail: 'Female' | 'Male';
	lang: VoiceLang;
	sample: string;
	/** Browser speech has no real "voices", so each one gets its own pitch/rate to sound different. */
	pitch: number;
	rate: number;
	/** Present only for trending voices. */
	uses?: string;
};

export const languages = [
	{ value: 'bn-BD', label: 'Bangla (Bangladesh)' },
	{ value: 'en-US', label: 'English (United States)' },
	{ value: 'en-GB', label: 'English (United Kingdom)' },
	{ value: 'hi-IN', label: 'Hindi (India)' },
	{ value: 'es-ES', label: 'Spanish (Spain)' }
] as const;

export const voices: readonly Voice[] = [
	{ name: 'Ayesha', style: 'Natural', detail: 'Female', lang: 'bn-BD', sample: 'আসুন, আপনার গল্পটা শুরু করা যাক।', pitch: 1.15, rate: 1 },
	{ name: 'Rahim', style: 'Natural', detail: 'Male', lang: 'bn-BD', sample: 'প্রতিটি নতুন দিন নিয়ে আসে নতুন সম্ভাবনা।', pitch: 0.85, rate: 1 },
	{ name: 'Sadia', style: 'Expressive', detail: 'Female', lang: 'bn-BD', sample: 'এই মুহূর্তটিকে মনে রাখুন।', pitch: 1.3, rate: 0.95 },
	{ name: 'Tanvir', style: 'Conversational', detail: 'Male', lang: 'bn-BD', sample: 'চলুন, একসাথে কিছু তৈরি করি।', pitch: 0.95, rate: 1.1 },
	{ name: 'Sofia', style: 'Warm', detail: 'Female', lang: 'en-US', sample: 'Welcome back. Let me read that story to you.', pitch: 1.2, rate: 0.95, uses: '1.2M uses' },
	{ name: 'Adam', style: 'Confident', detail: 'Male', lang: 'en-US', sample: 'Let us build something people will remember.', pitch: 0.9, rate: 1, uses: '980K uses' },
	{ name: 'Emily', style: 'Friendly', detail: 'Female', lang: 'en-US', sample: 'Hi there! It is great to meet you.', pitch: 1.1, rate: 1.05, uses: '765K uses' },
	{ name: 'Michael', style: 'Professional', detail: 'Male', lang: 'en-US', sample: 'Here is a quick summary of this quarter.', pitch: 1, rate: 0.95, uses: '622K uses' },
	{ name: 'Daniel', style: 'Deep', detail: 'Male', lang: 'en-US', sample: 'In a world of endless noise, one voice stands out.', pitch: 0.7, rate: 0.9, uses: '590K uses' }
];

export const trendingVoices = voices.filter((voice) => voice.uses);

export function voiceByName(name: string): Voice {
	return voices.find((voice) => voice.name === name) ?? voices[0];
}

export const usage = { used: 7500, limit: 10000 } as const;

export const activities = [
	{ title: 'বাংলা ভয়েস টেস্ট', age: '2 minutes ago', text: 'আজকের দিনটি সুন্দর হোক।', lang: 'bn-BD', voice: 'Ayesha' },
	{ title: 'Product Demo Voice', age: '1 hour ago', text: 'Meet the next generation of thoughtful audio experiences.', lang: 'en-US', voice: 'Adam' },
	{ title: 'My Project', age: '2 hours ago', text: 'Your story, brought naturally to life.', lang: 'en-US', voice: 'Sofia' },
	{ title: 'Welcome message', age: 'Yesterday', text: 'Thank you for choosing Vocalis.', lang: 'en-US', voice: 'Emily' },
	{ title: 'শুভ সকাল', age: '2 days ago', text: 'শুভ সকাল! আজ আপনার দিনটি ভালো কাটুক।', lang: 'bn-BD', voice: 'Rahim' }
] as const;

export const projects = [
	{ title: 'বাংলা ভয়েস টেস্ট', description: 'Bangla · Ayesha', updated: 'Edited 2 minutes ago', duration: '0:18', tone: 'tone-1', lang: 'bn-BD', voice: 'Ayesha', text: 'আজকের দিনটি সুন্দর হোক।' },
	{ title: 'Product Demo Voice', description: 'English · Adam', updated: 'Edited 1 hour ago', duration: '0:42', tone: 'tone-2', lang: 'en-US', voice: 'Adam', text: 'Meet the next generation of thoughtful audio experiences.' },
	{ title: 'My Project', description: 'English · Sofia', updated: 'Edited 2 hours ago', duration: '1:06', tone: 'tone-4', lang: 'en-US', voice: 'Sofia', text: 'Your story, brought naturally to life.' }
] as const;

export const models = [
	{
		id: 'v3',
		name: 'Vocalis v3 (Multilingual)',
		version: 'v3',
		isNew: true,
		text: 'Our most expressive model yet. Better emotion, higher quality, and support for multiple languages.',
		tags: ['Multilingual', 'Higher Quality', 'More Expressive']
	},
	{
		id: 'flash',
		name: 'Vocalis Flash',
		version: 'Fl',
		isNew: false,
		text: 'Low-latency model for quick previews and interactive experiences.',
		tags: ['Fast', 'Multilingual']
	},
	{
		id: 'bangla',
		name: 'Vocalis Bangla Natural',
		version: 'বা',
		isNew: false,
		text: 'Tuned for natural Bangla pronunciation and rhythm.',
		tags: ['Bangla', 'Natural']
	}
] as const;
