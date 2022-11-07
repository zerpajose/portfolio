<script>
  import skills from '../data/skills.json'
</script>



  {#each skills as skill}
  <div class="grid text-start mx-3">  
    <span class="list-group-item active" aria-current="true">{skill.title}</span>
    <hr />
      {#each skill.items as item}
        <div>
          <span class="circle"><img height="32" width="32" src="{item["icon"]}" alt="{item["lang"]}"></span>
          <span>{item["lang"]}</span>
        </div>
      {/each}
      
    </div>
  {/each}


<style>
  img{
    align-self: center;
    padding: 10%;
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
</style>