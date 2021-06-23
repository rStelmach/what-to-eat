<template>
  <div class="container">
    <nav>
      <header class="box" @click="goHome"><a href="#">What To Eat</a></header>
      <div class="closed" v-if="!isClicked">
        <button class="box">Try it out!</button>
      </div>
      <div class="opened " v-else>
        <ul class="box">
          <li><a href="#Recipes" v-smooth-scroll="{ duration: 1000 }">Recipes</a></li>
          <li><a>Promotions</a></li>
          <li><a>Sign in</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div class="burger box">
        <i :class="{ 'fas fa-bars': !isClicked }" @click="clickBurger"></i>
        <i :class="{ 'fas fa-times': isClicked }" @click="clickBurger"></i>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const isClicked = ref(false);

    function clickBurger() {
      isClicked.value = !isClicked.value;
    }
    function goHome() {
      router.push({ name: 'home', path: '/home' });
    }

    return { isClicked, clickBurger, goHome };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: white;
  min-height: 10vh;
  width: 100%;
  margin: 0 auto;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5%;
    .box {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    header {
      margin-left: auto;
      a {
        color: black;
        text-decoration: none;
        font-size: 4rem;
        font-weight: bold;
      }
    }

    .closed {
      button {
        border: none;
        color: white;
        font-weight: 600;
        font-size: 2.5rem;
        background-color: #50a684;
        border-radius: 20px;
        padding: 1rem 18rem;
        cursor: pointer;
        transition: 0.2s;
      }
      button:hover {
        transform: scale(1.01);
        padding: 1rem 20rem;
      }
    }

    .opened {
      width: 23.8%;
      ul {
        display: flex;
        justify-content: space-between;

        li {
          list-style: none;
          cursor: pointer;
          a {
            color: black;
            font-size: 2rem;
            font-weight: 600;
            text-decoration: none;
          }
        }
      }
    }

    .burger {
      i {
        font-size: 4rem;
        transition: 0.5s linear;
        cursor: pointer;
      }
    }
  }
}
</style>
