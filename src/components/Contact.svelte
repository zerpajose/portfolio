<script>
  import contact from "../data/contact.json"
  import {copyToClipboard} from "../lib/functions"
</script>

<h2><span class="subtitle">Contact</span></h2>
<div class="text-center">
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <div class="row">
        {#each contact as item}
            <div class="col">
              {#if item.social === 'Gmail'}
                <img data-bs-toggle="modal" data-bs-target="#emailModal" on:click={copyToClipboard} on:keypress={copyToClipboard} class="social filter-cyan" src={item.logo} alt={item.social}>
              {:else}
                <a href={item.link} target="_blank" rel="noreferrer"><img class="social filter-cyan" src={item.logo} alt={item.social}></a>
              {/if}
            </div>
        {/each}
        </div>
    </div>
    <div class="col"></div>
  </div>
</div>

<div class="modal fade" id="emailModal" tabindex="-1" aria-labelledby="emailModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="emailModalLabel">Email copied to clipboard</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<style>
  h2{
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .subtitle{
    font-family: 'Press Start 2P', cursive;
    color: #2d102b;
    background-color: #47ffe7;
    padding-left: 3px;
  }
  .social{
    width: 75%;
    cursor: pointer;
  }
  .filter-cyan{
    filter: invert(91%) sepia(14%) saturate(1784%) hue-rotate(99deg) brightness(102%) contrast(108%);
  }
</style>