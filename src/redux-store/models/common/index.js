import { isArray } from "lodash";
import commonProvider from "data-access/common-provider";

export default {
  state: {
    banksInfo: (() => {
      try {
        let data = localStorage.getItem("_banks") || "";
        if (data) {
          data = JSON.parse(data);
          return data;
        }
      } catch (error) {
        console.log("error_banks", error);
      }
      return null;
    })(),
    notices: {},
    noticeDetails: {},
    systemCheckingData: {},
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    onGetAllBanks: () => {
      return new Promise((resolve, reject) => {
        commonProvider
          .getAllBanks()
          .then((res) => {
            if (res?.count && isArray(res?.rows)) {
              res.rows = res.rows.map((item) => {
                return {
                  ...item,
                  value: item?.id || 0,
                  text: item?.bankname || "",
                };
              });

              dispatch.common.updateData({
                banksInfo: res,
              });
              localStorage.setItem("_banks", JSON.stringify(res || {}));
            }
          })
          .catch((e) => {
            console.log("getAllBanksError: ", e);
            reject(e);
          });
      });
    },
  }),
};
