import Home from "../page/Home"
import Following from "../page/Following"
import Upload from "../page/Upload"

export const publicRoutes = [
    {path: '/', element: Home},
    {path: '/following', element: Following},
    {path: '/upload', element: Upload, layout: null}
]

export const privateRoutes = [

]
