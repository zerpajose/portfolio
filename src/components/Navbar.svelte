<script>
  import social from "../data/contact.json"
  import {copyToClipboard} from "../lib/functions"
    import Modal from "./Modal.svelte";
</script>

<nav class="navbar navbar-expand-lg px-5">
  <div class="container-fluid">

    <a class="navbar-brand" href="/">
      <img src="/src/assets/logo512x512_vaporware.png" alt="VincentDev" width="40">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav">
        {#each social as network}
        <li class="nav-item mx-1">
          {#if network.social === "Gmail"}
            <div class="nav-link text-light">
              <span class="circle">
                <img class="social-logo" data-bs-toggle="modal" data-bs-target="#emailModal" on:click={copyToClipboard} on:keypress={copyToClipboard} src={network.logo} alt="gmail">
              </span>
            </div>
          {:else}
            <a class="nav-link text-light" href={network.link} target="_blank" rel="noreferrer">
              <span class="circle">
                <img class="social-logo" src={network.logo} alt="gmail">
              </span>
            </a>
          {/if}
          
        </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<Modal />

<style>
  nav{
    background-color: #2d102b;
  }
  li{
    color: white;
    font-family: 'Akshar', sans-serif;
  }
  .circle{
    background-color: #47ffe7;
    border-radius: 100%;
    display: inline-block;
    padding: 30%;
    cursor: pointer;
  }
  .social-logo{
    width: 1.5em;
  }
  .navbar-toggler{
    background-color: #47ffe7;
  }
</style>