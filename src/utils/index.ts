export type Date = {
	city: string,
	date: string | null,
	extra?: string,
	hide?: boolean
}
export const dates: Date[] = [
	{
		city: "Irun",
		date: "2025-06-21",
	},
	{
		city: "Iurreta",
		date: "2025-06-23",
	},
	{
		city: "Apatamonasterio",
		date: "2025-06-28",
	},
	{
		city: "Portugalete",
		date: "2025-07-01",
	},
	{
		city: "Erandio",
		date: "2025-07-12",
	},
	{
		city: "Zornotza",
		date: "2025-07-19",
	},
	{
		city: "Busturi",
		date: "2025-07-24",
	},
	{
		city: "Gernika",
		date: "2025-08-14",
	},
	{
		city: "Larrabetzu",
		date: "2025-08-15",
		hide: true,
	},
	{
		city: "Bilbo",
		date: "2025-08-20",
		hide: true,
	},
	{
		city: "Bakio",
		date: "2025-08-28",
		hide: true,
	},
	{
		city: "Artea",
		date: "2025-09-06",
		hide: true,
	},
	{
		city: "Laukiz",
		date: "2025-09-26",
		hide: true,
	},
	{
		city: "Mendata",
		date: "2025-09-27",
		hide: true,
	},
	{
		city: "",
		date: null,
		extra: "Laster gehiago"
	},
]

