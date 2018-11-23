import Mock from 'mockjs';
let Random = Mock.Random;
const arr = [];

for(let i=0; i<100; i++){
    arr.push(Mock.mock({
        id:i,
        name:Random.cname(),
        phone:Random.natural(10000),
        company:Mock.mock('@county(true)'),
        buttMan:Random.cname(),
        weixin:Random.string(7, 10),
        department:'市场部',
        duty:Random.csentence(3, 5),
        status:i % 2 == 0 ? '已拒绝':'已审核',
        operation: i % 2 == 0 ?[0,1,2] :[3]

    }))
}
export default arr