function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

doSomethingAsync().then((result) => {
  console.log(result); // Output: done
});
