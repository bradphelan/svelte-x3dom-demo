<script lang="js">
	import { onclick, slide_out } from "./x3dom";

	import { fade, fly } from "svelte/transition";

	let yes = false;

	let hitpnt = [0, 0, 0];

	let hit = (event) => {
		hitpnt = event.hitPnt;
	};
</script>

<style>
	.canvas {
		border: solid 1px black;
		background-color: black;;
		padding: 2px;
	}
</style>

<h1>X3DOM + Svelte </h1>

<label for="show cone">Show cone</label>
<input name="show cone" type="checkbox" bind:checked={yes} />

<div class="canvas">
	<x3d width="500px" height="400px">
		<scene>
			<shape use:onclick={hit}>
				<appearance>
					<material diffuseColor="1 0 0" />
				</appearance>
				<box />
			</shape>

			<transform id="marker" scale=".15 .15 .15" translation={hitpnt}>
				<shape>
					<appearance>
						<material diffuseColor="#FFD966" />
					</appearance>
					<sphere />
				</shape>
			</transform>

			{#if yes}
				<transform
					id="green_cone"
					use:onclick={hit}
					out:slide_out
					translation="-3 0 0">
					<shape>
						<appearance>
							<material diffuseColor="0 1 0" />
						</appearance>
						<cone />
					</shape>
				</transform>
			{/if}

			<transform translation="3 0 0">
				<shape use:onclick={hit}>
					<appearance>
						<material diffuseColor="0 0 1" />
					</appearance>
					<sphere />
				</shape>
			</transform>
		</scene>
	</x3d>
</div>
