# Simple Table React

![npm](https://img.shields.io/npm/v/simple-table-react)
![CircleCI](https://img.shields.io/circleci/build/github/shelchkov/simple-table-react)
[![codecov](https://codecov.io/gh/shelchkov/simple-table-react/branch/master/graph/badge.svg?token=ZP819N2P5X)](https://codecov.io/gh/shelchkov/simple-table-react)

[Demo](https://simple-table-react.herokuapp.com)

## How to use

Pass an array of objects and a list of columns (headers) to DataTable:

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
