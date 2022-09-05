const SIDEBAR = [
  {
    "name":"Daten erfassen",
    "open":true,
    "link":"",
    "children":[
      {
        "name":"Passierschein A38",
        "open":false,
        "link":"/PassierscheinA38",
        "children":[

        ]
      }
    ]
  },
  {
    "name":"Zusammenfassung",
    "open":false,
    "link":"/Zusammenfassung",
    "children":[

    ]
  },
  {
    "name":"Identifizieren",
    "open":false,
    "link":"",
    "children":[
      {
        "name":"Verfahren wählen",
        "open":false,
        "link":"/Identifizieren/VerfahrenWaehlen",
        "children":[

        ]
      },
      {
        "name":"Ident. durchführen",
        "open":false,
        "link":"/Identifizieren/Durchfuehren",
        "children":[

        ]
      }
    ]
  },
  {
    "name":"bezahlen und absenden",
    "open":false,
    "link":"/BezahlenUndAbsenden",
    "children":[

    ]
  },
  {
    "name":"Bestätigung",
    "open":false,
    "link":"/Bestätigung",
    "children":[

    ]
  }
];

module.exports = [
  {
    id: "get-sidebar", // id of the route
    url: "/api/sidebar", // url in path-to-regexp format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        type: "json", // variant type
        options: {
          status: 200,

          body: SIDEBAR
        }
      },
    ]
  }
];
