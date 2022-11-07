<script>
  import skills from '../data/skills.json'
</script>

<div class="container text-center">
  {#each skills as skill}
  <div class="row">
    <h3>{skill.title}</h3>
    {#each skill.items as item}
      <div class="col">
        <div class="card" style="width: 12rem;">
          <img height="64" width="64" src="{item["icon"]}" alt="{item["lang"]}" />
          <div class="card-body">
            <span class="card-title">{item["lang"]}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
  {/each}
</div>

<style>
  h3{
    color: white;
  }
  img{
    align-self: center;
  }
  .col{
    align-items: center;
  }
  .card-title{
    font-family: 'Press Start 2P', cursive;
    font-size: 9px;
  }
</style>