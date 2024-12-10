"use client";
import { useContext } from "react";
import { DataContext } from "./Context";

export default function useDataContext() {
	return useContext(DataContext);
}
