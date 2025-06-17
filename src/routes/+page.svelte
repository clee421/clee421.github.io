<style>
  .page-container {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header {
    font-size: clamp(2rem, 4rem, 5vw);
    line-height: 2.4;
    box-sizing: border-box;
    margin: 1%;
    width: 100%;
    text-align: center;
    perspective: 500px;
  }
  .body {
    font-size: clamp(1rem, 2rem, 5vw);
    line-height: 1.2;
    box-sizing: border-box;
    margin: 1%;
    width: 100%;
    text-align: center;
    perspective: 500px;
  }

  .link {
    color: blue
  }

  .link:hover {
    text-decoration: underline;
  }

  .wrap-button {
    height: 100%;
    width: 100%;
  }

  .wrap-button:hover {
    cursor: pointer;
  }
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from 'gsap';

  let box: HTMLDivElement;

  let animation: any
  onMount(() => {
    animation = gsap.from(box, {
      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4",
      stagger: 0.04
    })
  });

  function handleClick() {
    console.log(animation)
    animation && animation.revert();
  }
</script>

<div class="page-container">
  <h1 class="text-4xl text-blue-500">Tailwind is alive 🎉</h1>
  <button class="wrap-button" on:click={handleClick}>
    <div class="header">
      <h1>Calvin Lee</h1>
    </div>
    <div bind:this={box} class="body">
      Welcome to my playground for frontend things. To see my personal site go to <a class="link" href="https://calvinlee.dev/">calvinlee.dev</a>
    </div>
  </button>
</div>