/* eslint-disable no-console */
module.exports = {
	"default": [
		"packagejson",
		"mdfiles",
	],
	packagejson: {
		nonull: true,
		src: "package.json",
		dest: "dist/",
		options: {
			process: function( content ) {
				console.log( "Process" );
				const obj = JSON.parse( content );
				obj.devDependencies = {};
				obj.scripts = {};
				obj.jest = {};
				return JSON.stringify( obj, null, 2 );
			},
		},
	},
	mdfiles: {
		src: "*.md",
		dest: "dist/",
	},
};
