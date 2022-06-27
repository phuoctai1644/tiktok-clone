import Home from "../page/Home"
import Following from "../page/Following"
import Upload from "../page/Upload"
import Profile from '../page/Profile'

import config from "../config"

export const publicRoutes = [
    {path: config.routes.home, element: Home},
    {path: config.routes.following, element: Following},
    {path: config.routes.upload, element: Upload, layout: null},
    {path: config.routes.profile, element: Profile}
]

export const privateRoutes = [

]
