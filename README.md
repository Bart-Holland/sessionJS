# sessionJS
sessionStorage the easy way

## How To
Download this small script and add it to your HTML or require config.
After this you just have four methods to add and remove data from windows.sessionStorage

### S.set
You can add data to the sessionStorage by calling S.set() with an object as parameter.
This object needs to contain one or more key value pairs to add to the sessionStorage. 
Per examle:

```
var obj = { 
    "breed": "Border Collie",
    "name": "Blaze",
    "gender": "male"
  };
  
S.set(obj);
```

### S.get
Retrieve one, more or all data from the sessionStorage.
S.get expects a string or array as parameter. When you do not send a parameter you will retrieve all data from the sessionStorage. S.get returns an object (key value pairs) with the data from sessionStorage.

##### retrieving all data from sessionStorage
``` 
var dogInfo = S.get(); 
```

##### retrieving one item
```
var dogName = S.get('name'); //dogName == Blaze
```

##### retrieving more items
```
var dog = S.get(['name', 'gender']);
```

### S.clear
Remove one or more items from the sessionStorage.
S.clear expects a string or an array as parameter. When you do not send a parameter nothing will happen.

##### Removing one item
``` 
S.clear('name');
```

##### Removing more items
```
S.clear(['name', 'gender']);
```

### S.destroy
Cleanup the sessionStorage deleting all data from the sessionStorage

```
S.destroy();
```


