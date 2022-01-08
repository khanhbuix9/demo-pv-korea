import moment from "moment";

export const convertTimeUTCtoLocal = (date = new Date()) => {

  const createdAt = moment.utc(date || new Date()).format('YYYY-MM-DD HH:mm:ss');
  const stillUtc = moment.utc(createdAt).toDate();
  const local = moment(stillUtc).local().toString();

  return local;
}

export const formatMoney = (num) => {
  num = String(num);

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const checkMobile = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    return true
  } else {
    // false for not mobile device
    return false
  }
}

export const formatNumber = (n, type) => {
  if (type) {
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "")
  }
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const formatNumberDecime = (id = '', demical = 2) => {
  let input = document.getElementById(id);
  let input_val = input.value;

  // don't validate empty input
  if (input_val === "") { return input_val; }
  if (input_val.length >= 2) {
    const isDemical = input_val.indexOf(".") > -1;

    if (input_val.indexOf(".") === 0) {
      input_val = "0" + input_val
    }

    if (!isDemical && input_val.indexOf("0") === 0) {
      input_val = input_val.substring(1);
    }
  }

  // original length
  let original_len = input_val.length;


  // initial caret position 
  let caret_pos = input.selectionStart;

  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    let decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    let left_side = input_val.substring(0, decimal_pos);
    let right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side, true);

    // // On blur make sure 2 numbers after decimal
    // if (blur === "blur") {
    //     right_side += "00";
    // }

    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, demical);

    // join number by .
    if (demical === 0) {
      input_val = left_side
    } else {
      input_val = left_side + "." + right_side;
    }


  } else {
    input_val = formatNumber(input_val);
    // input_val = input_val;
  }

  input.value = input_val;

  const updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input.setSelectionRange(caret_pos, caret_pos);
  return input.value = input_val;
}

export const hanldNumberFormat = (number) => {
  number = String(number)

  if (number.indexOf(',') === -1) return Number(number)

  const arrNumber = number.split(',');
  let value = ""

  arrNumber.forEach(item => {
    value += item
  });

  return Number(value);
}
