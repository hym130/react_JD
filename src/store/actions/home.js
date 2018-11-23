export const homes = (data) => {
       return {
           //用dispatch向store里边进行存数据
            //type必须有 在store里边可进行判断
            type: 'Get_JD_LIST',
            jdList:data.wareInfoList
       }
}
