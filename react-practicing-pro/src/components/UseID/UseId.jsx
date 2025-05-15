// import React, { useId } from "react";

// const UseId = () => {
//   // no need to think about id
//   const usernameId = useId;
//   const emailId = useId;

//   return (
//     <>
//       <h1>useId</h1>
//       <form>
//         <div>
//           <label htmlFor={usernameId}>username</label>
//           <input type="email" id={usernameId} name="username" />
//         </div>
//         <div>
//           <label htmlFor={emailId}>email</label>
//           <input type="password" id={emailId} name="email" />
//         </div>Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana.
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };
// export default UseId;

import React, { useId } from "react";
const UseId = () => {
  // no need to think about id
  const id = useId;

  return (
    <>
      <h1>useId</h1>
      <form>
        <div>
          <label htmlFor={id + "usernameId"}>username</label>
          <input type="name" id={id + "usernameId"} name="username" />
        </div>
        <div>
          <label htmlFor={id + "passwordId"}>Password</label>
          <input type="password" id={id + "passwordId"} name="password" />
        </div>
        <div>
          <label htmlFor={id + "emailId"}>email</label>
          <input type="email" id={id + "emailId"} name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseId;
