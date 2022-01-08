import { convertTimeUTCtoLocal } from "./helper";
import moment from "moment";

export const getColorFollowValue = (value = 0) => {
  // 0~10 = yello
  // 11~20 = blue
  // 21 ~ 30 = red
  // 31 ~ 40 = black
  // 41~ 45 = green

  //yellow-blue-red-black-green
  const color = ["#F3AF00", "#2A2FA9", "#D02020", "#2B2B2B", "#23AF00"];
  let count = 0;

  if (value <= 10) count = 0;
  else if (value <= 20) count = 1;
  else if (value <= 30) count = 2;
  else if (value <= 40) count = 3;
  else if (value <= 45) count = 4;

  return color[count];
};

export const renderNameHistory = (value = "") => {
  value = String(value);

  if (value.length < 9) return value;

  const threeKey = value.substring(0, 8);
  value = threeKey + "..";
  return value;
};

export const renderNameStar = (value = "") => {
  value = String(value);

  if (value.length < 4) return value;

  const threeKey = value.substring(0, 3);
  value = threeKey + "***";
  return value;
};

export const convertItemSelected = (
  option = [],
  isRamdom = false,
  leg = -1
) => {
  const item = {};
  const arr = option.map((_i) => _i.value);

  item.result = [...arr];
  item.fullbet = arr.join();
  item.number1 = arr[0];
  item.number2 = arr[1];
  item.number3 = arr[2];
  item.number4 = arr[3];
  item.number5 = arr[4];
  item.number6 = arr[5];
  item.orderId = leg;
  item.type = isRamdom ? "자동" : "수동";

  return { ...item };
};

export const randomNumberMinMax = (min = 0, max = 28) => {
  return Math.floor(Math.random() * (max + 1) + min);
};

export const getGameTypeID = (payload = {}) => {
  const { typeGame = 5000, type = "POWERBALL" } = payload;
  // 1: powerball
  // 2: powerball
  // 3: powerball - 5min

  switch (type) {
    case "POWERBALL": {
      if (typeGame == 1000005) return 3;
      else return 1;
    }
    case "LOTTO":
      return 2;
  }
};

export const getGameIdNumber = (payload = {}) => {
  // type powerball || 1: powerball 5000 - 1H, 2: powerball 10000 - 1H, 3: powerball 30000 - 1H, 4: powerball 50000 - 1H
  // 9: powerball 10000 - 5min, 10: powerball 2000 - 1H

  // type lotto: || 5: lotto 5000 - 7D, 6: lotto 10000 - 7D, 7: lotto 30000 - 7D, 8: lotto 50000 - 7D
  // 11: lotto 2000 - 7D

  let _type = 1;
  const { typeGame = 5000, type = "POWERBALL", callAPI = "HISTORY" } = payload;

  if (callAPI == "BETGAME") return getTypeBetGame(payload);

  switch (type) {
    case "POWERBALL": {
      switch (Number(typeGame)) {
        case 2000:
          return (_type = 10);
        case 5000:
          return (_type = 1);
        case 10000:
          return (_type = 2);
        case 30000:
          return (_type = 3);
        case 50000:
          return (_type = 4);
        case 1000005:
          return (_type = 9);
      }

      return _type;
    }
    case "LOTTO": {
      switch (Number(typeGame)) {
        case 2000:
          return (_type = 11);
        case 5000:
          return (_type = 5);
        case 10000:
          return (_type = 6);
        case 30000:
          return (_type = 7);
        case 50000:
          return (_type = 8);
      }

      return _type;
    }
  }

  return type;
};

const getTypeBetGame = (payload = {}) => {
  const { typeGame = 5000 } = payload;

  switch (typeGame) {
    case 2000:
      return "02";
    case 5000:
      return "05";
    case 10000:
      return "10";
    case 30000:
      return "30";
    case 50000:
      return "50";
    case 1000005:
      return "10";
  }
};

export const renderTextDate = (date = new Date()) => {
  const value = moment(convertTimeUTCtoLocal(date));

  const year = value.format("YYYY");
  const month = value.format("MM");
  const day = value.format("DD");
  const hour = value.format("HH:mm");

  return `${year}년 ${month}월 ${day}일 ${hour}시 추첨`;
};

export const getShowNameFollowGameId = (gameid = 1) => {
  const type_txt = [
    //powerball
    "파워볼 5,000",
    "파워볼 10,000",
    "파워볼 30,000",
    "파워볼 50,000",
    // loto
    "로또 5,000",
    "로또 10,000",
    "로또 30,000",
    "로또 50,000",

    "파워볼 5분",
    "파워볼 2,000",

    "로또 2,000",
  ];

  return type_txt[gameid - 1];
};

export const getTypeGame = (gameid = 1, type = "") => {
  const type_txt = [
    //powerball
    "POWERBALL",
    "1시간 10000원",
    "POWERBALL",
    "POWERBALL",
    // loto
    "LOTTO",
    "LOTTO",
    "LOTTO",
    "LOTTO",

    "POWERBALL",
    "POWERBALL",

    "LOTTO",
  ];

  const listGame = [
    //powerball
    "POWERBALL",
    "POWERBALL",
    "POWERBALL",
    "POWERBALL",
    // loto
    "LOTTO",
    "10000원",
    "LOTTO",
    "LOTTO",

    "5분 10000원",
    "1시간 2000원",

    "2000원",
  ];
  return type ? listGame[gameid - 1] : type_txt[gameid - 1];
};

export const converDataHistoryExaclyGame = (
  _fullbetArr = [],
  _resultArr = []
) => {
  const data = _fullbetArr.map((exac) => {
    const leg = _fullbetArr.length;
    _resultArr[6] = leg == 6 ? -1 : _resultArr[6];
    const __tr = _resultArr.find((__t) => Number(__t) == Number(exac))
      ? true
      : false;

    return {
      number: exac,
      isExacly: __tr,
      leg: leg - 1,
    };
  });

  return data || [];
};
