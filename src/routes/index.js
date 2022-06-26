import Home from "../page/Home"
import Following from "../page/Following"
import Upload from "../page/Upload"
import Profile from '../page/Profile'

import routes from "../config/routes"

export const publicRoutes = [
    {path: routes.home, element: Home},
    {path: routes.following, element: Following},
    {path: routes.upload, element: Upload, layout: null},
    {path: routes.profile, element: Profile}
]

export const privateRoutes = [

]
