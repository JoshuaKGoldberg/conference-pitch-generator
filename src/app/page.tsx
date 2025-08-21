import { useState } from "react";
import type { Role } from "../types/form.ts";

export default async function Home() {
	const role = useState<Role>();

	return (
		<>
			<h1>Hello, world!</h1>
		</>
	);
}
