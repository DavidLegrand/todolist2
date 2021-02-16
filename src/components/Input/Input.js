import React, { useState } from "react";

const Input = () => {
  const [form, setform] = useState({
    login: "",
    fruit: "",
    newsletter: false,
  });

  const handler = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setform({ ...form, [name]: value });
  };

  return (
    <form>
      <p>
        Choisir un login :
        <input name="login" value={form.login} onChange={handler} />{" "}
        {form.login}
      </p>
      <p>
        Choisir un fruit :
        <select name="fruit" value={form.fruit} onChange={handler}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>{" "}
        {form.fruit}
      </p>
      <p>
        Civilité : Mr :{" "}
        <input type="radio" name="civility" value="Mr" onChange={handler} />
        Mme :{" "}
        <input
          type="radio"
          name="civility"
          value="Mme"
          onChange={handler}
        />{" "}
        {form.civility}
      </p>
      <p>
        S'abonner à la newsletter :{" "}
        <input
          type="checkbox"
          name="newsletter"
          checked={form.newsletter}
          onChange={handler}
        />
        {form.newsletter ? "Oui" : "Non"}
      </p>
    </form>
  );
};

export default Input;
