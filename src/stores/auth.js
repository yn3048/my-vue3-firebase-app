import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  // const user = ref(null);
  const user = useLocalStorage('auth/user', null, {
    // serializer: 입출력 될 때 데이터 값 변환
    serializer: StorageSerializers.object,
  });
  const isAuthenticated = computed(() => !!user.value);
  const uid = computed(() => user.value?.uid || null);

  const setUser = userData => {
    user.value = userData;
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
      };
    } else {
      user.value = null;
    }
  };

  const hasOwnContent = contentUid => {
    // 로그인 안 된 상태일 경우
    if (!isAuthenticated.value) {
      return false;
    }
    return uid.value === contentUid;
  };

  return {
    user,
    uid,
    isAuthenticated,
    setUser,
    hasOwnContent,
  };
});
