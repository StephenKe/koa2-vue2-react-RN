/**
 * Created by sinowinner on 17/6/9.
 */
import Github from './component/Github'
import Jianshu from './component/Jianshu'
import Zhihu from './component/Zhihu'

////////////////////////////////////////////////////////////
// then our route config
const myRoutes = [
    {
        path: '/github',
        component: Github
    },
    {
        path: '/jianshu',
        component: Jianshu
    },
    {
        path: '/zhihu',
        component: Zhihu
    }
]

export default myRoutes