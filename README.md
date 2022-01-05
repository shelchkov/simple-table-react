# Simple Table React

![npm](https://img.shields.io/npm/v/simple-table-react)
![CircleCI](https://img.shields.io/circleci/build/github/shelchkov/simple-table-react?logo=circleci)
[![codecov](https://codecov.io/gh/shelchkov/simple-table-react/branch/master/graph/badge.svg?token=ZP819N2P5X)](https://codecov.io/gh/shelchkov/simple-table-react)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4347aeb13d704c5299167bf3d8323416)](https://www.codacy.com/gh/shelchkov/simple-table-react/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=shelchkov/simple-table-react&amp;utm_campaign=Badge_Grade)

[Demo](https://simple-table-react.herokuapp.com)

## How to use

Pass an array of objects (each should contain id) and a list of columns (headers) to DataTable:

```javaScript
<DataTable
  headers={headers}
  data={data}
  actions={Actions}
  handleRowClick={handleClick}
  getCellColor={getCellColor}
  getValue={getCellValue}
/>
```

DataTable also receives optional functions: handleRowClick, getCellColor and getValue. Component that Actions function returns will be placed at the right of every row.

## Styles customisation

Styles can be added to css classses `simple-table`, `simple-table-cell` (can be used to style text and border color), `simple-table-head` and `simple-table-row`. Note that getCellColor will overwrite text color, so you will need to add `!important`.
