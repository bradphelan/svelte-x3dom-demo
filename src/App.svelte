<script lang="js">
	import { slide_out } from "./x3dom";

	import { fade, fly } from "svelte/transition";

	import X3domWrap from "./X3domWrap";

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
	<X3domWrap>
		<shape on:click={hit}>
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
				on:click={hit}
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
			<shape on:click={hit}>
				<appearance>
					<material diffuseColor="0 0 1" />
				</appearance>
				<sphere />
			</shape>
		</transform>
	</X3domWrap>
</div>
