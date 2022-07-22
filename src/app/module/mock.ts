export const MOCKCONFIG = {
  title: "TEST",
  components: [
    {
      "label": "Password",
      "tableView": false,
      "key": "password",
      "type": "password",
      "input": true,
      "protected": true

    },
    {
      "label": "Text Area",
      "autoExpand": false,
      "tableView": true,
      "validate": {
        "minLength": 12
      },
      "key": "textArea",
      "type": "textarea",
      "input": true
    },
    {
      "type": "button",
      "label": "Submit",
      "key": "submit",
      "disableOnInvalid": true,
      "input": true,
      "tableView": false
    }
  ]
}
