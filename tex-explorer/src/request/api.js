import { get, post } from './http'

export const apiIndexInfo = p => get('admin/blockBrowser/indexInfo', p);  //首页数据
export const apiTransaction = p => get('admin/blockBrowser/transaction', p);  //首页转账数据
export const apiStockInfo = p => get('admin/blockBrowser/selectUserChargesByAddress', p);  //区块浏览器账号信息
export const apiMoneyDetail = p => get('admin/blockBrowser/selectUserChargeByTranId', p);  //区块浏览器交易详情、转账详情