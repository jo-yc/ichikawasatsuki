import About from '../pages/About'
import GalleryList from '../pages/GalleryList'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import Policy from '../pages/Policy'

export default [
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/gallery',
    component: GalleryList,
    name: 'gallery_list'
  },
  {
    path: '/gallery/:id',
    component: Gallery,
    name: 'gallery'
  },
  {
    path: '/contact',
    component: Contact,
    name: 'contact'
  },
  {
    path: '/policy',
    component: Policy,
    name: 'policy'
  }
]
