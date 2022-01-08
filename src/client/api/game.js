const prefix = "v1";

//game powerball
export const GET_RESULT_POWERBALL = prefix + "/powerballs/getpowerball";
export const GET_HISTORY_BET_POWERBALL =
  prefix + "/powerballbethistories/getpowerballbethistories";
export const BET_GAME_POWER_BALLARRAY =
  prefix + "/powerballbethistories/betgamepowerballarray";
export const BET_GAME_POWER_BALLARRAY_5MINUTES =
  prefix + "/powerballbethistories/5minutes-betgamepowerballarray";
export const GET_MONEY_OF_GAME_BY_ID =
  prefix + "/moneyofgames/getMoneyOfGameByGameId";

//lotto
export const BET_GAME_LOTTO_BALLARRAY =
  prefix + "/powerballbethistories/betgamelotoarray";
