const passes =  [
  {
    pass_id: "B428",
    message: 'Bitte beantragen Sie zuerst den Antragsschein B428.',
    success: false,
  },
  {
    pass_id: "A38",
    message: 'Yeah :)',
    success: true,
  },
  {
    pass_id: "ZzZ27",
    message: 'Bitte beantragen Sie zuerst den Zugangsschein 2 zum Roten Zettel 5B der Sie hier weiter bringt.',
    success: false,
  },
];

const pass = passes[Math.floor(Math.random()*passes.length)];

module.exports = [
  {
    id: "get-pass", // id of the route
    url: "/api/passes", // url in path-to-regexp format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        type: "json", // variant type
        options: {
          status: 200,
          body: pass
        }
      },
    ]
  }
];
