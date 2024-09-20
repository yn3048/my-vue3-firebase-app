<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />

      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>

      <PostRightBar class="col-3" @open-write-dialog="openWriteDialog" />
    </div>
    <PostWriteDialog v-model="postDialog" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from 'src/pages/components/PostHeader.vue';
import PostLeftBar from 'src/pages/components/PostLeftBar.vue';
import PostRightBar from 'src/pages/components/PostRightBar.vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';

const router = useRouter();
// const goPostDetails = id => {
//   router.push(`/posts/${id}`);
// };

const posts = Array.from(Array(20), (_, index) => ({
  id: index,
  title: 'Vue3 Firebase 강의 ' + index,
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerumpossimus iusto minus molestiae esse quibusdam nisi. Quod rerumpossimus iusto minus molestiae esse quibusdam nisi',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'a101',
  category: '카테고리' + index,
}));

const postDialog = ref(false);
const openWriteDialog = () => {
  postDialog.value = true;
};
</script>

<style lang="scss" scoped></style>
