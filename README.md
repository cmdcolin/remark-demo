## remark demo

### Input

```
# Title

Hello world


## Sub

This is cool
```

### Run

```
node test.js
```

### Output

```

{
  "type": "root",
  "children": [
    {
      "type": "heading",
      "depth": 1,
      "children": [
        {
          "type": "text",
          "value": "Title"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Hello world"
        }
      ]
    },
    {
      "type": "heading",
      "depth": 2,
      "children": [
        {
          "type": "text",
          "value": "Sub"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "This is cool"
        }
      ]
    }
  ]
}



```

### Add-ons

Optionally combine with grey-matter to parse e.g. headers like this

```
---
title: Test
date: 2012-12-11
---
```
