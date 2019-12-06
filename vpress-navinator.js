const dirTree = require("directory-tree");
const { join, basename, relative } = require("path");
const glob = require("glob");

function generateVPressSidebar() {
  const vpressNav = {};
  const vpressItems = glob.sync("**/*.md", {
    cwd: "Docs"
  });

  vpressItems.forEach(item => {
    console.log("item", item);

    let groupName;
    let itemName;
    let path = item
      .replace(".md", "")
      .replace("README", "")
      .replace("index", "");

    path = `/${path}`;

    if (item.split("/").length === 1) itemName = item;
    else [groupName, itemName] = item.split("/");

    if (groupName) {
      if (!vpressNav[groupName]) vpressNav[groupName] = [];
      vpressNav[groupName].push(path);
    } else {
      vpressNav[itemName] = path;
    }
  });

  const vpressNavArray = [];

  for (const key in vpressNav) {
    const item = vpressNav[key];

    if (Array.isArray(item)) {
      const groupObj = {
        title: titleCase(key),
        children: item,
        collapsable: false
      };
      vpressNavArray.push(groupObj);
    } else {
      vpressNavArray.push(item);
    }
  }

  return vpressNavArray.sort();
}

function handleMarkdownFile(item) {
  item.path = item.path
    .replace("Docs", "")
    .replace(".md", "")
    .replace("README", "")
    .replace("index", "");

  return item;
}

function titleCase(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

exports.generateVPressSidebar = generateVPressSidebar;
exports.handleMarkdownFile = handleMarkdownFile;
