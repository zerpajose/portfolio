<script>
  let social = [
    {
      link: "mailto:zjose88@gmail.com",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/gmail.svg"
    },
    {
      link: "https://twitter.com/zerpajose",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg"
    },
    {
      link: "https://github.com/zerpajose",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg"
    },
    {
      link: "https://www.linkedin.com/in/josevzerpam/",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg"
    }
  ]
</script>

<nav class="navbar navbar-expand-lg px-5">
  <div class="container-fluid">

    <a class="navbar-brand" href="#Home">
      <img src="/src/assets/logo512x512_vaporware.png" alt="VincentDev" width="40">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav">
        {#each social as network}
        <li class="nav-item mx-1">
          <a class="nav-link text-light" href={network.link} target="_blank" rel="noreferrer">
            <span class="circle">
              <img width="25" src={network.logo} alt="gmail">
            </span>
          </a>
        </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

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
  }
</style>