import useDataContext from "../context/UseDataContext";

export default function useLang() {
	const { lang } = useDataContext();
	return lang;
}
