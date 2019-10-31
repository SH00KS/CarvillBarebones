import AppHome from '@/components/AppHome';
const AppMedium = () => import('@/components/AppMedium');
const Example = () => import('@/components/example/Example');


const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/medium',
        name: 'Medium',
        component: AppMedium
    },
    {
        path: '/example',
        name: 'Example',
        component: Example
    }
];

export default routes;
