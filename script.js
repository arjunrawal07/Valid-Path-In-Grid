let pathChecks = [];
let grid = [[], []];

let connectPaths = function () {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1 && grid[i][j + 1] == 2) {
        pathChecks.push("false");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (grid[i][j] == 2 && grid[i][j + 1] == 1) {
        pathChecks.push("false");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (grid[i][j] == 3 && grid[i][j + 1] == 3) {
        pathChecks.push("false");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (grid[i][j] == 4 && grid[i][j + 1] == 4) {
        pathChecks.push("false");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (grid[i][j] == 5 && grid[i][j + 1] == 5) {
        pathChecks.push("false");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (grid[i][j] == 6 && grid[i][j + 1] == 6) {
        pathChecks.push("false");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else {
        pathChecks.push("true");
      }
    }
  }
};
var hasValidPath = function (pathChecks) {
  for (let i = 0; i < pathChecks.length; i++) {
    if (pathChecks[i] == "false") {
      return "false";
    } else {
      return "true";
    }
  }
};
