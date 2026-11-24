export type Card = {
  // campos de CardDto
  id: string;
  text: string;
};

export type Game = {
  // campos de GameDto.
  gameId: string;
  cards: Card[];
};
