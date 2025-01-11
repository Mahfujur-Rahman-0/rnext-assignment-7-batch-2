"use client";
import useDataContext from "../context/UseDataContext";
import "./LanBtn.css";
export default function LanBtn() {
	const { lang, setLang } = useDataContext();

	return (
		<div className="checkbox-wrapper-35">
			<input
				onChange={() => setLang((prev) => !prev)}
				checked={lang}
				name="switch"
				id="switch"
				type="checkbox"
				className="switch"
			/>
			<label htmlFor="switch">
				<span className="switch-x-toggletext">
					<span className="switch-x-unchecked">
						<span className="switch-x-hiddenlabel">Unchecked: </span>EN
					</span>
					<span className="switch-x-checked">
						<span className="switch-x-hiddenlabel">Checked: </span>BN
					</span>
				</span>
			</label>
		</div>
	);
}
