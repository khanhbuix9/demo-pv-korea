import {
  GET_INFO_BANKS,
  GET_DATA_NOTICE,
  GET_DETAIL_NOTICE,
  GET_DATA_ON_THE_SYSTEM_CHECKING,
} from "client/api/common";
import client from "utils/client-utils";

export default {
  getAllBanks() {
    return client.requestApi("get", GET_INFO_BANKS, {});
  },
  getBanksIdDetails(id = -1) {
    if (id === -1) return;

    const url = `${GET_INFO_BANKS}/${id}`;
    return client.requestApi("get", url, {});
  },
  getDataNotice(body = {}) {
    body.pageIndex--;
    const url = `${GET_DATA_NOTICE}?limit=${body?.pageSize || 6}&page=${
      body?.pageIndex || 0
    }&sortby=id:desc`;
    return client.requestApi("get", url, {});
  },
  getDetailsNotice(body = {}) {
    const url = `${GET_DETAIL_NOTICE}`;
    return client.requestApi("post", url, body);
  },
  getDataCheckingOnTheSystem() {
    return client.requestApi("get", GET_DATA_ON_THE_SYSTEM_CHECKING, {});
  },
};
