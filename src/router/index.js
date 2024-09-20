import { route } from 'quasar/wrappers';
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';
import { setupLayouts } from 'virtual:generated-layouts';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  // setupLayouts로 레이아웃 적용 및 라우트 수정
  const extendRoutes = setupLayouts(
    routes.map(route => {
      if (route.path.includes('admin')) {
        route = {
          ...route,
          meta: {
            ...route.meta,
            layout: 'admin',
          },
        };
      }
      return route;
    }),
  );

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createHistory(process.env.VUE_ROUTER_BASE),
    routes: extendRoutes, // 수정된 라우트 배열을 직접 사용

    // quasar.conf.js -> build -> vueRouterMode에 따라 모드 결정
    // quasar.conf.js -> build -> publicPath에 따라 베이스 경로 설정
  });

  return Router;
});
