import { storeToRefs } from 'pinia';
import { boot } from 'quasar/wrappers';
import { useAuthStore } from 'src/stores/auth';

function requiresAuth(to) {
  const { isAuthenticated } = storeToRefs(useAuthStore());

  if (
    to.matched.some(
      // 로그인 해야 접근가능한 페이지 & 로그인이 되지 않은 경우 루트 페이지로 이동
      record => record.meta.requiresAuth && !isAuthenticated.value,
    )
  ) {
    alert('로그인이 필요한 페이지입니다!🚨');
    return '/';
  }
  return true;
}

export default boot(async ({ app, router }) => {
  router.beforeEach(requiresAuth);
});
