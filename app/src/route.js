/**
 * Created by sinowinner on 17/6/9.
 */
import Github from './component/Github'
import Jianshu from './component/Jianshu'
import Zhihu from './component/Zhihu'
import Base from './component/Base'
import Certificate from './component/Certificate'
import Skills from './component/Skills'

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
    },
    {
        path: '/base',
        component: Base
    },
    {
        path: '/certificate',
        component: Certificate
    },
    {
        path: '/skills',
        component: Skills
    }
]

export default myRoutes