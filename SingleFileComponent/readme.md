## Loading Components Asyncronously

Rule of thumb, if a component is needed conditionally and does not require to be loaded on first load - set the component to load ASYNCROUNOUSLY.

while if a component is a direct dependency of a parent component - load the componet SYNCRONOUSLY



## FileNaming
consider using Flag naming convention instead of separating components by Directory.
refer to /lessons/vue-3-organizing-single-file-components