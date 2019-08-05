// Container
const MainContainer = () => import('../UI/MainContainer');
// Pages
const Login = () => import('../UI/pages/Login');
const Projects = () => import('../UI/pages/Projects');
const ProjectDetail = () => import('../UI/pages/Projects/Detail');
const Organisations = () => import('../UI/pages/Organisations');
const Home = () => import('../UI/pages/Home');
const EditSlideshowItem = () => import('../UI/pages/Home/EditSlideshowItem');
const Partners = () => import('../UI/pages/Partners');
const EditPartner = () => import('../UI/pages/Partners/EditPartner');
const CreatePartner = () => import('../UI/pages/Partners/CreatePartner');
const News = () => import('../UI/pages/News');
const Events = () => import('../UI/pages/Events');
const AddEvent = () => import('../UI/pages/Events/Add');
const EditEvent = () => import('../UI/pages/Events/Edit');

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
        redirect: 'projects/list',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: 'list',
            name: 'Projects',
            component: Projects
          },
          {
            path: ':projectId',
            name: 'Project Detail',
            component: ProjectDetail,
            props: true
          }
        ]
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
      },
      {
        path: 'news',
        name: 'News',
        component: News
      },
      {
        path: 'events',
        name: 'Events',
        redirect: 'events/list',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: 'list',
            name: 'List',
            component: Events,
          },
          {
            path: 'add',
            name: 'Add Event',
            component: AddEvent,
            meta: {
              isDetail: true
            }
          },
          {
            path: ':eventId/edit',
            name: 'Edit Event',
            component: EditEvent,
            props: true
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
