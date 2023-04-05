function cov_2fduz6f2c2() {
  var path = "/home/alliso/Documents/own-repos/vue-cypress-jest/src/components/HelloWorld.cy.js";
  var hash = "9cf7d02c35ba85a2f73f155fb17276060082e289";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/alliso/Documents/own-repos/vue-cypress-jest/src/components/HelloWorld.cy.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 9,
          column: 4
        }
      },
      "2": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 61
        }
      },
      "3": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 27
          },
          end: {
            line: 4,
            column: 28
          }
        },
        loc: {
          start: {
            line: 4,
            column: 33
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 26
          },
          end: {
            line: 6,
            column: 27
          }
        },
        loc: {
          start: {
            line: 6,
            column: 32
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9cf7d02c35ba85a2f73f155fb17276060082e289"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2fduz6f2c2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2fduz6f2c2();
import HelloWorld from './HelloWorld.vue';
cov_2fduz6f2c2().s[0]++;
describe('<HelloWorld />', () => {
  cov_2fduz6f2c2().f[0]++;
  cov_2fduz6f2c2().s[1]++;
  it('Show msg in title', () => {
    cov_2fduz6f2c2().f[1]++;
    cov_2fduz6f2c2().s[2]++;
    cy.mount(HelloWorld, {
      propsData: {
        msg: "Hello world"
      }
    });
    cov_2fduz6f2c2().s[3]++;
    cy.get("[data-cy=msg]").should("have.text", "Hello world");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmZkdXo2ZjJjMiIsImFjdHVhbENvdmVyYWdlIiwiSGVsbG9Xb3JsZCIsInMiLCJkZXNjcmliZSIsImYiLCJpdCIsImN5IiwibW91bnQiLCJwcm9wc0RhdGEiLCJtc2ciLCJnZXQiLCJzaG91bGQiXSwic291cmNlcyI6WyJIZWxsb1dvcmxkLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vSGVsbG9Xb3JsZC52dWUnXG5cblxuZGVzY3JpYmUoJzxIZWxsb1dvcmxkIC8+JywgKCkgPT4ge1xuXG4gIGl0KCdTaG93IG1zZyBpbiB0aXRsZScsICgpID0+IHtcbiAgICBjeS5tb3VudChIZWxsb1dvcmxkLCB7IHByb3BzRGF0YToge21zZzogXCJIZWxsbyB3b3JsZFwifSB9KVxuICAgIGN5LmdldChcIltkYXRhLWN5PW1zZ11cIikuc2hvdWxkKFwiaGF2ZS50ZXh0XCIsIFwiSGVsbG8gd29ybGRcIilcbiAgfSlcblxufSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLE9BQU9FLFVBQVUsTUFBTSxrQkFBa0I7QUFBQUYsY0FBQSxHQUFBRyxDQUFBO0FBR3pDQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTTtFQUFBSixjQUFBLEdBQUFLLENBQUE7RUFBQUwsY0FBQSxHQUFBRyxDQUFBO0VBRS9CRyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsTUFBTTtJQUFBTixjQUFBLEdBQUFLLENBQUE7SUFBQUwsY0FBQSxHQUFBRyxDQUFBO0lBQzVCSSxFQUFFLENBQUNDLEtBQUssQ0FBQ04sVUFBVSxFQUFFO01BQUVPLFNBQVMsRUFBRTtRQUFDQyxHQUFHLEVBQUU7TUFBYTtJQUFFLENBQUMsQ0FBQztJQUFBVixjQUFBLEdBQUFHLENBQUE7SUFDekRJLEVBQUUsQ0FBQ0ksR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztFQUM1RCxDQUFDLENBQUM7QUFFSixDQUFDLENBQUMifQ==