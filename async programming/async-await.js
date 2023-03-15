async function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

async function doSomething() {
  const result = await doSomethingAsync();
  console.log(result); // Output: done
}

doSomething();
