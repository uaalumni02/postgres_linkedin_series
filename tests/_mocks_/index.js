import casual from "casual";

let name = casual.random_element(["Porche", "Ferrari", "Lamborghini"]);

casual.define("model", () => {
  return {
    name,
  };
});

export default casual;
