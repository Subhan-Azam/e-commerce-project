const fetchUsers = async () => {
  try {
    let res = await axios.get("http://localhost:3001/api/allUsers");
    let data = res.data.body;
    console.log("res====", res);
    console.log("data====", data);
    return data;
  } catch (error) {
    console.error("Error", error);
  }
};

export default async function Page() {
  let result = await fetchUsers();
  console.log("result====", result);

  return (
    <>
      <div>Fetching Users</div>

      {result?.map((item, index) => {
        return (
          <div key={index}>
            <p>Id : {item._id}</p>
            <p>Name : {item.name}</p>
            <p>Email : {item.email}</p>
          </div>
        );
      })}
    </>
  );
}
