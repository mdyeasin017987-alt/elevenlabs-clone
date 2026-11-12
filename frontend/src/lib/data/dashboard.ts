/**
 * Demo content for the dashboard UI.
 *
 * Replace these static records with API responses when backend endpoints are
 * ready. Keeping presentation data outside Svelte components makes it easier
 * to add pagination, loading states and server-backed data later.
 */
export const dashboardVoices = [
	{ name: 'Ayesha', style: 'Natural', detail: 'Female', sample: 'আসুন, আপনার গল্পটা শুরু করা যাক।', tone: 'rose' },
	{ name: 'Rahim', style: 'Natural', detail: 'Male', sample: 'প্রতিটি নতুন দিন নিয়ে আসে নতুন সম্ভাবনা।', tone: 'green' },
	{ name: 'Sadia', style: 'Expressive', detail: 'Female', sample: 'এই মুহূর্তটিকে মনে রাখুন।', tone: 'blue' },
	{ name: 'Tanvir', style: 'Conversational', detail: 'Male', sample: 'চলুন, একসাথে কিছু তৈরি করি।', tone: 'gold' }
] as const;

export const dashboardActivities = [
	{ title: 'বাংলা ভয়েস টেস্ট', age: '2 minutes ago', text: 'আজকের দিনটি সুন্দর হোক।', lang: 'bn-BD' },
	{ title: 'Product Demo Voice', age: '1 hour ago', text: 'Meet the next generation of thoughtful audio experiences.', lang: 'en-US' },
	{ title: 'My Project', age: '2 hours ago', text: 'Your story, brought naturally to life.', lang: 'en-US' }
] as const;

export const dashboardProjects = [
	{ title: 'বাংলা ভয়েস টেস্ট', description: 'Bangla · Ayesha', updated: 'Edited 2 minutes ago', duration: '0:18', tone: 'slate' },
	{ title: 'Product Demo Voice', description: 'English · Rahim', updated: 'Edited 1 hour ago', duration: '0:42', tone: 'blue' },
	{ title: 'My Project', description: 'Bangla · Sadia', updated: 'Edited 2 hours ago', duration: '1:06', tone: 'green' }
] as const;
