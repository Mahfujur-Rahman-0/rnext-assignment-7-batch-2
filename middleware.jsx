import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

//dynamic force path changer start
export default function middleware(request) {
	return NextResponse.rewrite(new URL("/video", request.url));
}
export const config = {
	matcher: "/",
};
//dynamic force path changer end

//lang func implement start
let locals = ["bn", "en"];
let defaultLocal = "en";

function getLocal(request) {
	const acceptedLang = request.headers.get("accept-language") ?? undefined;
	let headers = { "accept-language": acceptedLang };
	let languages = new Negotiator({ headers }).languages();
	return match(languages, locals, defaultLocal);
}
//lang func implement end
