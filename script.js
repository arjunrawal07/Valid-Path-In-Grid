let pathChecks = [];
let grid = [[], []];

let connectPaths = function () {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[[i][j]] == 1 && (grid[i][j + 1] == 1 || 3 || 4 || 5 || 6)) {
        pathChecks.push("true");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (
        grid[[i][j]] == 2 &&
        (grid[i][j + 1] == 2 || 3 || 4 || 5 || 6)
      ) {
        pathChecks.push("true");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (
        grid[[i][j]] == 3 &&
        (grid[i][j + 1] == 1 || 2 || 4 || 5 || 6)
      ) {
        pathChecks.push("true");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (
        grid[[i][j]] == 4 &&
        (grid[i][j + 1] == 1 || 2 || 3 || 5 || 6)
      ) {
        pathChecks.push("true");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (
        grid[[i][j]] == 5 &&
        (grid[i][j + 1] == 1 || 2 || 3 || 4 || 6)
      ) {
        pathChecks.push("true");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else if (
        grid[[i][j]] == 6 &&
        (grid[i][j + 1] == 1 || 2 || 3 || 4 || 5)
      ) {
        pathChecks.push("true");
        //   } else {
        //     pathChecks.push("false");
        //   }
      } else {
        pathChecks.push("false");
      }
    }
  }
};
var hasValidPath = function (pathChecks) {
  for (let i = 0; i < pathChecks.length; i++) {
    if (pathChecks[i] === "false") {
      return "false";
    }
  }
};
