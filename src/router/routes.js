// Container
const MainContainer = () => import('../UI/MainContainer');
// Pages
const Login = () => import('../UI/pages/Login');
const Projects = () => import('../UI/pages/Projects');
const Organisations = () => import('../UI/pages/Organisations');
const NewsEvents = () => import('../UI/pages/NewsEvents');
const Partners = () => import('../UI/pages/Partners');
const Home = () => import('../UI/pages/Home');

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
        component: Home
      },
      {
        path: 'news-events',
        name: 'News & Events',
        component: NewsEvents
      },
      {
        path: 'partners',
        name: 'Partners',
        component: Partners
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
