<script>
  import skills from '../data/skills.json'
</script>

  <h2><span class="subtitle">Skills</span></h2>
  {#each skills as skill}
  <div class="grid text-start mx-3">  
    <span class="list-group-item active" aria-current="true">{skill.title}</span>
    <hr />
      {#each skill.items as item}
        <div class="item">
          <span class="circle"><img height="32" width="32" src="{item["icon"]}" alt="{item["lang"]}"></span>
          <span>{item["lang"]}</span>
        </div>
      {/each}
    </div>
  {/each}

<style>
  h2{
    margin-bottom: 3%;
  }
  img{
    align-self: center;
    padding: 10%;
  }
  .subtitle{
    font-family: 'Press Start 2P', cursive;
    color: #2d102b;
    background-color: #47ffe7;
    padding-left: 3px;
  }
  .grid{
    display: inline-table;
    width: 19%;
    color: white;
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
  }
  hr{
    background-color: #47ffe7;
    height: 2px;
    border: none;
  }
  .circle{
    background-color: #47ffe7;
    border-radius: 100%;
    display: inline-block;
    padding: 2%;
  }
  .item{
    margin: 3%;
  }
</style>