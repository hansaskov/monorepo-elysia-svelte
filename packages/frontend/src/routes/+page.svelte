<script lang="ts">
    import type { Treaty } from "@elysiajs/eden";
    import { api } from "$lib/eden"

    let response: Promise<Treaty.TreatyResponse<{ 200: string; }>>

    function onclick() {
        response = api.hello.get()
    }

</script>

<button {onclick}>
	Send request
</button>



{#await response}
    <p>Loading...</p>

{:then {data, error}}

    {#if !error}
        <p>Successful response: </p> {data}
    {:else}
        <p>Error response: </p> {error.value}
    {/if}
{:catch error}
    <p>{error.message}</p>
{/await}
