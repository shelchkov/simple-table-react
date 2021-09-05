# Simple Table React

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

## Contribution

Run `npm version patch` to add new tag and push it to GitHub. Run `npm publish` to build and publish puckage.
