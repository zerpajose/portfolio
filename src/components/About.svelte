<script>
    import Profile from "./Profile.svelte";
    import Summary from "./Summary.svelte";

</script>

<section class="container text-center py-md-5">
  <div class="row">
    <div class="col-sm mx-auto">
      <Profile />
    </div>
    <div id="summary" class="col-sm">
      <Summary />
    </div>
  </div>
</section>
