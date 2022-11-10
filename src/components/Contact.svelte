<script>
  import contact from "../data/contact.json"
  import {copyToClipboard} from "../lib/functions"
    import Modal from "./Modal.svelte";
</script>

<h2><span class="subtitle">Contact</span></h2>
<div class="socials container text-center">
  <div class="row gx-0">
    <div class="row">
      <div class="col"></div>
    {#each contact as item}
        <div class="col">
          {#if item.social === 'Gmail'}
            <img data-bs-toggle="modal" data-bs-target="#emailModal" on:click={copyToClipboard} on:keypress={copyToClipboard} class="social filter-cyan" src={item.logo} alt={item.social}>
          {:else}
            <a href={item.link} target="_blank" rel="noreferrer"><img class="social filter-cyan" src={item.logo} alt={item.social}></a>
          {/if}
        </div>
    {/each}
      <div class="col"></div>
    </div>
  </div>
</div>

<Modal />

<style>
  h2{
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .subtitle{
    font-family: 'Press Start 2P', cursive;
    color: #1e0b1d;
    background-color: #47ffe7;
    padding-left: 3px;
  }
  .social{
    width: 3em;
    cursor: pointer;
  }
  .socials{
    margin-top: 1em;
  }
  .filter-cyan{
    filter: invert(91%) sepia(14%) saturate(1784%) hue-rotate(99deg) brightness(102%) contrast(108%);
  }
</style>