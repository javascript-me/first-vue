<template>
	<div id="app" name>
		This area is shared with all route page. <br />

		<router-link to="/">app-one</router-link><br />
		main page...<br />
		<router-link to="/app-other">app-other</router-link><br />
		
		<router-view/>
	</div>

</template>

