import { Router } from '@vaadin/router';
const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
    { path: '/', component: 'recipe-list' },
    { path: '/recipe/:id', component: 'recipe-detail' },
]);
//# sourceMappingURL=router.js.map