import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
	res.send({
		message: "OK",
	});
});

router.get("/ping", (req, res) => {
	res.send({
		message: "pong",
	});
});

export default router;
