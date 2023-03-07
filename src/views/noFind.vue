<script setup lang="ts"></script>

<template>
  <div class="box">
    <img src="/images/Trash-big.png" alt="" />
    <div>
      <h1 class="title">404 NOT FIND</h1>
      <p style="width: 800px; text-indent: 2em">
        When the king of racoons approached you during the fall of 2005, you were taken aback by the generosity of the
        offer he made and also his ability to talk. You’ve been living in harmony ever since. They pay 50% of your rent
        and you “forget” to take out the garbage every other week.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 100vw;
  height: 100vh;
  background-color: #74b9ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    text-align: center;
    margin-bottom: 30px;
  }
  img {
    transform: translateY(-20px);
    width: 450px;
  }
}
</style>
