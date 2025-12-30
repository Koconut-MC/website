<script lang="ts">
	interface Props {
		visible: boolean;
		width?: string;
		height?: string;
	}
	const { visible, width = "24px", height = "30px" }: Props = $props();
</script>

<!-- https://codepen.io/aurer/pen/ZEJxpO -->
<svg
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px"
	y="0px"
	{width}
	{height}
	viewBox="0 0 24 30"
	style={`enable-background:new 0 0 50 50; display: ${visible ? "block" : "none"}`}
	xml:space="preserve"
>
	<rect
		x="0"
		y="10"
		width="4"
		height="10"
		fill="var(--special-clr)"
		opacity="0.2"
	>
		<animate
			attributeName="opacity"
			attributeType="XML"
			values="0.2; 1; .2"
			begin="0s"
			dur="0.6s"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="height"
			attributeType="XML"
			values="10; 20; 10"
			begin="0s"
			dur="0.6s"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="y"
			attributeType="XML"
			values="10; 5; 10"
			begin="0s"
			dur="0.6s"
			repeatCount="indefinite"
		/>
	</rect>
	<rect
		x="8"
		y="10"
		width="4"
		height="10"
		fill="var(--special-clr)"
		opacity="0.2"
	>
		<animate
			attributeName="opacity"
			attributeType="XML"
			values="0.2; 1; .2"
			begin="0.15s"
			dur="0.6s"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="height"
			attributeType="XML"
			values="10; 20; 10"
			begin="0.15s"
			dur="0.6s"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="y"
			attributeType="XML"
			values="10; 5; 10"
			begin="0.15s"
			dur="0.6s"
			repeatCount="indefinite"
		/>
	</rect>
	<rect
		x="16"
		y="10"
		width="4"
		height="10"
		fill="var(--special-clr)"
		opacity="0.2"
	>
		<animate
			attributeName="opacity"
			attributeType="XML"
			values="0.2; 1; .2"
			begin="0.3s"
			dur="0.6s"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="height"
			attributeType="XML"
			values="10; 20; 10"
			begin="0.3s"
			dur="0.6s"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="y"
			attributeType="XML"
			values="10; 5; 10"
			begin="0.3s"
			dur="0.6s"
			repeatCount="indefinite"
		/>
	</rect>
</svg>

<style>
	svg {
		margin-inline: auto;
	}
</style>
