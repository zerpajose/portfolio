<script>
  import projects from '../data/projects.json'
</script>

<div class="row row-cols-1 row-cols-md-2 g-4 mt-3 ms-5">
  {#each projects as project}
  <div class="col">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={project.thumbnail} class="card-img img-fluid rounded-start pt-4" alt={project.thumbnail}>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{project.repo}</h5>
            <p class="description card-text">{project.description}</p>
            {#each project.url as url, index}
              <span> Repo {index+1} </span><a href={url}><img class="github" src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" alt="github"></a>  
            {/each}
            <p class="card-text">
              {#each project.labels as label}
                <small class="text-muted">-{label} </small>
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
  .description{
    font-size: 11px;
  }
  .card{
    padding: 0;
  }
  .card-title{
    font-size: medium;
    font-weight: bold;
  }
  .card-img{
    width: 125px;
  }
  .github{
    width: 10%;
  }
</style>