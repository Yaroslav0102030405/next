"use client";

import Ct from "../components/ct/Ct";
import { useState, useEffect } from "react";
// const elementWidth: string = "50px";
// const result: number = Number.parseInt(elementWidth);

// const elementHeight = "100.12px";
// const result2: number = Number.parseFloat(elementHeight);

// const salary: number = 1300.1234567;
// const res3: number = Number(salary.toFixed(4));

// const num: string = "10";
// const res4: number = Number(num);

const message = "Тут пару символів dfdfdfd";

const a = "Yara";
const b = "Lukov";
const s = "SAMSUNG";

const st = [...s];
const ab = ["aaa", "bbb", "ccc"];
const bbb = "bbb";

const sub = "pro";

const acc = sub === "pro" || sub === "vip";

const balance = 1100;
let mes = "";

// if (balance > 0) {
//   mes = "Позитивний";
// } else {
//   mes = "Негативний";
// }

if (balance > 500 && balance < 1000) {
  mes = "Баланс 500";
} else if (balance > 1000) {
  mes = "Баланс 1000";
} else {
  mes = "Негативний баланс";
}

// const start: number = 2;
// let price: number = 1;

// switch (start) {
//   case 1:
//     price = 10;
//     break;

//   case 2:
//     price = 20;
//     break;

//   default:
//     price;
// }

// const friends1 = ["Poly"];

interface User {
  id: number;
  name: string;
  age: number;
}

const Contacts = () => {
  const numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const [friends, setFriends] = useState<string[]>(["Poly"]);
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Tamara", age: 10 },
    { id: 2, name: "Oleg", age: 5 },
  ]);

  const targetId = 2;
  const foundUser = users.find((user) => user.id === targetId);

  const handleCkick = () => {
    setFriends([...friends, "Anna"]);
  };

  const handleRemoveLast = () => {
    const newFriends = friends.slice(0, friends.length - 1);
    setFriends(newFriends);
  };

  useEffect(() => {
    const updatedUsers = users.map((user) => ({
      ...user,
      age: Math.round(user.age * 1.1),
    }));
    setUsers(updatedUsers);
  }, []);

  const num: number[] = [1, 2, 3, 4, 5];

  const num2 = num.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return (
    <>
      {foundUser ? (
        <div>
          <h3>Профіль користувача</h3>
          <p>Ім'я: {foundUser.name}</p>
          <p>Вік: {foundUser.age}</p>
        </div>
      ) : (
        <p>Користувача не знайдено.</p>
      )}

      <h1>Page Contacts</h1>
      {numbers2
        .filter((number) => number % 2 === 0)
        .map((number, index) => (
          <li key={index}>
            <p>{number}</p>
          </li>
        ))}
      {/* <p>{result}</p>
      <p>{result2}</p>
      <p>{res3}</p>
      <p>{res4}</p> */}
      <Ct />
      <p>{message.length}</p>
      <p>{a + b}</p>
      <p>{`Привіт ! ${a} Пока ${b}`}</p>
      <p>{s.toLowerCase()}</p>
      <p>{s.toUpperCase()}</p>
      <p>{s.slice()}</p>
      <p>{[...s]}</p>
      <p>{st.slice(2)}</p>
      {ab.includes(bbb) ? `Є такий ${bbb} елемент` : "Не має такого елементу"}
      <p>
        {s[0].toLowerCase() +
          s.slice(1).toUpperCase() +
          s.slice(s.length - 1).toLowerCase()}
      </p>
      {/* <p>{5 && 0 && "mango"}</p> */}
      <p>{0 || 2}</p>
      {acc && <p>Привіт</p>}
      <p>{mes}</p>
      {/* <p>{price}</p> */}

      <button onClick={handleCkick}>Кнопка</button>
      <button onClick={handleRemoveLast}>Удалити</button>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <p>
              {friend} {(index += 1)}
            </p>
          </li>
        ))}
      </ul>
      <p>{num2}</p>
      {users.map((user, index) => (
        <li key={index}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </li>
      ))}
    </>
  );
};

export default Contacts;
