/**
 * Created by sinowinner on 17/6/9.
 */
import Github from './component/Github'
import Jianshu from './component/Jianshu'
import Zhihu from './component/Zhihu'
import Base from './component/Base'
import Certificate from './component/Certificate'
import Skills from './component/Skills'
import Skills1 from './component/Skills1'
import Exp from './component/Exp'

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
    },
    {
        path: '/skills1',
        component: Skills1
    },
    {
        path: '/exp',
        component: Exp
    }
]

export default myRoutes