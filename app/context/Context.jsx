"use client";

import { createContext, useState } from "react";

export const DataContext = createContext();

export default function ContextProvider({ children }) {
	const [lang, setLang] = useState(false);

	return (
		<DataContext.Provider value={{ lang, setLang }}>
			{children}
		</DataContext.Provider>
	);
}
