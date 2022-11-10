<script>
  import skills from '../data/skills.json'
</script>

<h2><span class="subtitle">Skills</span></h2>
<div class="skills-list">
  {#each skills as skill}
  <div class="grid text-start">
    <div>
      <hr />
      <span class="list-group-item active" aria-current="true">{skill.title}</span>
      <hr />
        {#each skill.items as item}
          <div class="item">
            <span class="circle"><img height="32" width="32" src="{item["icon"]}" alt="{item["lang"]}"></span>
            <span>{item["lang"]}</span>
          </div>
        {/each}
    </div>
  </div>
  {/each}
</div>

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
    color: #1e0b1d;
    background-color: #47ffe7;
    padding-left: 3px;
  }
  .grid{
    display: inline-table;
    color: white;
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    width: 15rem;
    margin-right: 1px;
    margin-left: 1px;
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
  .skills-list{
    margin-bottom: 5%;
  }
</style>