module.exports = function(wallaby) {
  return {
    files: ["src/**/*.ts"],

    tests: ["test/**/*.domain-spec.ts", "test/**/*.api-spec.ts"],

    env: {
      type: "node",
    },

    testFramework: "jest",

    setup: wallaby => {
      console.log("Setup");
      console.log("Current worker id: " + wallaby.workerId);
      console.log("Current session id: " + wallaby.sessionId);
      //   wallaby.delayStart();
      //   yourAsyncCleanUp(() => {
      //     console.log("Setup");
      //     console.log("Current worker id: " + wallaby.workerId);
      //     console.log("Current session id: " + wallaby.sessionId);
      //     wallaby.start();
      //   });
    },

    teardown: function(wallaby) {
      console.log("Teardown");
      console.log("Current worker id: " + wallaby.workerId);
      console.log("Current session id: " + wallaby.sessionId);
    },
  };
};
