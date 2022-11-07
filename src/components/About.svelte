<script>
    import Profile from "./Profile.svelte";
    import Summary from "./Summary.svelte";

</script>

<section class="container text-center py-5">
  <div class="row">
    <div class="col text-start">
      <Profile />
    </div>
    <div id="summary" class="col">
      <Summary />
    </div>
  </div>
</section>

<style>
  #summary{
    position: relative;
  }
</style>