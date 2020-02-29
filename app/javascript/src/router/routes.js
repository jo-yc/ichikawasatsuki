import About from '../pages/About'
import Gallery from '../pages/Gallery'
import WorkList from '../pages/WorkList'
import Work from '../pages/Work'
import Books from '../pages/Books'
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
    component: Gallery,
    name: 'gallery'
  },
  {
    path: '/works',
    component: WorkList,
    name: 'work_list'
  },
  {
    path: '/works/:id',
    component: Work,
    name: 'work'
  },
  {
    path: '/books',
    component: Books,
    name: 'books'
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
