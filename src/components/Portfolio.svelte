<script>
  import { Tooltip } from "svelte-tooltip-simple";
  import projects from '../data/projects.json'
</script>

<h2><span class="subtitle">Projects</span></h2>
<div class="row gx-0 row-cols-1 row-cols-md-2 mt-3 ms-5">
  {#each projects as project}
  <div class="col">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="thumb col-md-4">
          <img src={project.thumbnail} class="card-img img-fluid rounded-start" alt={project.thumbnail}>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{project.repo}</h5>
            <p class="description card-text">{project.description}</p>
            <hr>
            {#each project.url as url, index}
              <span class="repo">Repo {index+1} <a href={url}><img class="github" src="/src/assets/github.svg" alt="github"></a></span>
            {/each}
            <hr>
            <p class="card-text">
              {#each project.labels as label}
                <img class="filter-cyan label" src={label} alt={label}>
              {/each}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/each}  
</div>

<style>
  h2{
    margin-top: 2%;
  }
  .filter-cyan{
    filter: invert(91%) sepia(14%) saturate(1784%) hue-rotate(99deg) brightness(102%) contrast(108%);
  }
  .subtitle{
    font-family: 'Press Start 2P', cursive;
    color: #1e0b1d;
    background-color: #47ffe7;
    padding-left: 3px;
  }
  .label{
    width: 8%;
    margin-left: 1%;
    margin-right: 1%;
  }
  .description{
    font-size: 7.8px;
    text-align: left;
    font-family: 'Press Start 2P', cursive;
  }
  .repo{
    margin-left: 1%;
    margin-right: 1%;
    font-family: 'Press Start 2P', cursive;
    font-size: 9px;
  }
  .card{
    padding: 0;
    background: rgba(255, 255, 255, 0);
    color: #47ffe7;
    border-color: #47ffe7;
  }
  .card-title{
    font-size: medium;
    font-weight: bold;
    font-family: 'Press Start 2P', cursive;
    font-size: small;
  }
  .card-img{
    width: 60%;
    margin-left: 10%;
  }
  .github{
    width: 10%;
  }
  .thumb{
    display: flex;
    align-items: center;
  }
</style>