const service = require("./decks.service");
const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const VALID_PROPERTIES = ["name", "description"];

function hasOnlyValidProperties(req, res, next) {
	const { data = {} } = req.body;
	const invalidFields = Object.keys(data).filter(
		(field) => !VALID_PROPERTIES.includes(field),
	);

	if (invalidFields.length) {
		return next({
			status: 400,
			message: `Invalid field(s): ${invalidFields.join(", ")}`,
		});
	}
	next();
}

const hasRequiredProperties = hasProperties("name", "description");

async function deckExists(req, res, next) {
	const deck = await service.read(req.params.deckId);
	if (deck) {
		res.locals.deck = deck;
		return next();
	}
	next({
		status: 404,
		message: "Deck cannot be found",
	});
}

async function list(req, res, next) {
	const data = await service.list();
	res.json({ data });
}

function read(req, res, next) {
	const data = res.locals.deck;
	res.json({ data });
}

async function create(req, res) {
	const data = await service.create(req.body.data);
	res.status(201).json({ data });
}

async function update(req, res) {
	const updatedDeck = {
		...req.body.data,
		deckId: res.locals.deck.deckId,
	};
	const data = await service.update(updatedDeck);
	res.json({ data });
}

async function destroy(req, res) {
	const { deck } = res.locals;
	await service.delete(deck.deckId);
	res.sendStatus(204);
}

module.exports = {
	list: asyncErrorBoundary(list),
	read: [asyncErrorBoundary(deckExists), read],
	create: [
		hasOnlyValidProperties,
		hasRequiredProperties,
		asyncErrorBoundary(create),
	],
	update: [
		asyncErrorBoundary(deckExists),
		hasOnlyValidProperties,
		hasRequiredProperties,
		asyncErrorBoundary(update),
	],
	destroy: [asyncErrorBoundary(deckExists), asyncErrorBoundary(destroy)],
};
