import { route } from 'quasar/wrappers';
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router/auto'; // auto router를 위해 auto 추가
import { routes } from 'vue-router/auto-routes';
import { LoadingBar } from 'quasar';

import { setupLayouts } from 'virtual:generated-layouts';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  // 라우트 수정 및 레이아웃 설정 로직을 routes 배열에 바로 적용
  const customRoutes = setupLayouts(
    routes.map(route => {
      if (route.path.includes('admin')) {
        return {
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
    routes: customRoutes, // 커스텀 라우트 사용
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach(() => {
    LoadingBar.start();
  });

  Router.afterEach(() => {
    LoadingBar.stop();
  });

  return Router;
});
