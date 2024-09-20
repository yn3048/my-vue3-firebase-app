<template>
  <q-page padding>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>글수정</q-toolbar-title>
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
      >
        <template #actions>
          <q-btn flat label="취소" />
          <q-btn type="submit" flat label="수정" color="primary" />
        </template>
      </PostForm>
    </BaseCard>
  </q-page>
</template>

<script>
// fallthrough 속성 방지 함수
// export default {
//   inheritAttrs: false,
// };
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});
</script>

<script setup>
import { ref } from 'vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import PostForm from 'src/components/apps/post/PostForm.vue';

const form = ref(getInitialForm());
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  width: 800px;
</route>
