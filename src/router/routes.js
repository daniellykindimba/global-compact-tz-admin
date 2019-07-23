// Container
const MainContainer = () => import('../UI/MainContainer');
// Pages
const Login = () => import('../UI/pages/Login');
const Projects = () => import('../UI/pages/Projects');
const Organisations = () => import('../UI/pages/Organisations');
const Home = () => import('../UI/pages/Home');
const EditSlideshowItem = () => import('../UI/pages/Home/EditSlideshowItem');
const NewsEvents = () => import('../UI/pages/NewsEvents');
const Partners = () => import('../UI/pages/Partners');
const EditPartner = () => import('../UI/pages/Partners/EditPartner');
const CreatePartner = () => import('../UI/pages/Partners/CreatePartner');

export default [
  {
    path: '/',
    name: 'Tz SDG Portal',
    redirect: '/projects',
    component: MainContainer,
    children: [
      {
        path: 'projects',
        name: 'Projects',
        component: Projects
      },
      {
        path: 'organisations',
        name: 'Organisations',
        component: Organisations
      },
      {
        path: 'home',
        name: 'Home',
        component: Home,
        children: [
          {
            path: 'editSlideshowItem/:itemId',
            name: 'Edit Slideshow Item',
            component: EditSlideshowItem,
            props: true
          }
        ]
      },
      {
        path: 'news-events',
        name: 'News & Events',
        component: NewsEvents
      },
      {
        path: 'partners',
        name: 'Partners',
        component: Partners,
        children: [
          {
            path: 'edit/:partnerId',
            name: 'Edit Partner',
            component: EditPartner,
            props: true
          },
          {
            path: 'create',
            name: 'Add Partner',
            component: CreatePartner
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
