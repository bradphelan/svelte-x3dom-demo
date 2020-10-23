<script>
    import {loaded} from "./x3dom"
</script>

<x3d width="500px" height="400px">
    <scene>
        {#await loaded }
            <span>loading x3dom</span>
        {:then} 
            <slot/>
        {/await}
    <scene/>
</x3d>