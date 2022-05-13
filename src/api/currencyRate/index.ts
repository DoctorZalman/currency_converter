import {get} from "../../http";
import {AxiosResponse} from "axios";
import {IConvertPayload} from "../../interfaces";

export const getCurrencyRate = async (payload: IConvertPayload): Promise<AxiosResponse> => await get(`convert`, {
  params: {...payload}
});

export const getLatestRate = async (): Promise<AxiosResponse> => await get(`latest?base=UAH`);