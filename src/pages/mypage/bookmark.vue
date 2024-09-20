<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';

const posts = Array.from(Array(3), (_, index) => ({
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
</script>

<style lang="scss" scoped></style>
