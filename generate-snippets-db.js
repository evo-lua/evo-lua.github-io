const print = console.log;

const child_process = require("child_process");
const fs = require("fs");
const path = require("path");

const GIT_CLONE_COMMAND = "git clone https://github.com/evo-lua/evo-luvi ";
const GIT_UPDATE_COMMAND = "cd evo-luvi && git fetch --all && git pull --rebase";
const OUTPUT_FILE_PATH = path.join("static", "examples-autogenerated.json");
const RUNTIME_REPO_EXAMPLES_DIR = path.join("evo-luvi", "Tests", "Examples");

const hasClonedRepoBefore = fs.existsSync("evo-luvi");
if (!hasClonedRepoBefore) {
	print("Cloning runtime repository (non-recursively since only the examples are needed)...");
	child_process.execSync(GIT_CLONE_COMMAND);
} else {
	print("Runtime repository was cloned before - updating it instead...");
	child_process.execSync(GIT_UPDATE_COMMAND);
}

print("Generating snippets database...");
const exampleFiles = fs.readdirSync(RUNTIME_REPO_EXAMPLES_DIR);
print("Found " + exampleFiles.length + " examples in directory " + RUNTIME_REPO_EXAMPLES_DIR);

function processSnippet(filePath) {
	const textDecoder = new TextDecoder();
	const binaryFileContents = fs.readFileSync(filePath);
	const fileContentsAsText = textDecoder.decode(binaryFileContents);
	return fileContentsAsText;
}

const snippetsDatabase = {};

let numSnippetsProcessed = 0;

exampleFiles.forEach(fileName => {
	const filePath = path.join("evo-luvi", "Tests", "Examples", fileName);
	print("Processing example file: " + filePath);

	const scriptText = processSnippet(filePath);
	snippetsDatabase[fileName] = scriptText;

	numSnippetsProcessed += 1;
});
print("Finished processing " + numSnippetsProcessed + " snippets");

print("Exporting snippets database...");
fs.writeFileSync(OUTPUT_FILE_PATH, JSON.stringify(snippetsDatabase));

print("Successfully exported snippets database to file: " + OUTPUT_FILE_PATH);