function doSomethingAsync(callback) {
  setTimeout(() => {
    callback("done");
  }, 1000);
}

doSomethingAsync((result) => {
  console.log(result); // Output: done
});
