import { Router } from "express";
const router = Router();
import { con } from "../Repo/connection.js";

router.get("/", async (req, res) => {

	res.send("ping");
});

router.get("/ping", (req, res) => {
	res.send({
		message: "pong",
	});
});

export default router;
