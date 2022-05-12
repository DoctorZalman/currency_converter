import {get} from "../../http";
import {AxiosResponse} from "axios";
import {IConvertPayload} from "../../redux/converter/actionCreators";

export const getCurrencyRate = async (payload: IConvertPayload): Promise<AxiosResponse> => await get(`convert`, {
  params: {
    ...payload
  }
});