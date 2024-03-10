import { fontawesomeSubset } from "fontawesome-subset";

var icons = {
	"solid": [
		"arrow-right",
		"asterisk",
		"ban",
		"exclamation-circle",
		"sync",
		"tools"
	],
	"brands": [
		"github"
	]
}

var outputDir = './webfonts';

fontawesomeSubset(icons, outputDir, {
	package: 'pro'
});
