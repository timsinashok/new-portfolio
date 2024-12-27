import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface ThemeStateProps {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStateProps>()(
	devtools(
		persist(
			(set) => ({
				isDarkMode: matchMedia("(prefers-color-scheme: dark)").matches,
				toggleTheme: () =>
					set((state) => ({ isDarkMode: !state.isDarkMode })),
			}),
			{
				name: "themeStore",
				storage: createJSONStorage(() => sessionStorage),
			}
		)
	)
);
