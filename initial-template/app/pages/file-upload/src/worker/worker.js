onmessage = ({ data }) => {
  // debugger;
  console.log("recebido!", data);
  self.postMessage({
    status: "done",
  });
};
