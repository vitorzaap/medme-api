import { Router } from "express";
const router = Router();
import { con } from "../Repo/connection.js";

router.get("/", async (req, res) => {
	const c = `
    SELECT * FROM tb_usuario
    `;
	const [r] = await con.query(c);

	res.send(r);
});

router.get("/ping", (req, res) => {
	res.send({
		message: "pong",
	});
});

export default router;
